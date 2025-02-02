const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const User = require("./models/userModelDB"); // Import the User model
const Session = require("./models/sessionModelDB"); // Ensure correct import
const Property = require("./models/propertyModelDB");
const bodyParser = require("body-parser");

// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;

// const AsyncStorage = require("@react-native-async-storage/async-storage");

const jwt = require("jsonwebtoken");

const { generateToken } = require("./utils/generateToken");
const { validateToken } = require("./utils/validateToken");
const { getUserInfo } = require("./utils/getUserInfo");

// const { restrictToLoggedinUserOnly, checkAuth } = require("./middlewares/auth");

const app = express();
const PORT = 5000;

// app.use(cors());
app.use(
  cors({
    origin: "*", // Be more specific in production
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json()); // Middleware to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Middleware for URL-encoded data

app.set("view engine", "ejs"); // Setting EJS as the template engine
app.set("views", "./views"); // Specify the directory for your view templates

const { connectMongoDB } = require("./connection");
// connectMongoDB("mongodb://localhost:27017/UserInfo"); // you can comment out this and run the project locally
connectMongoDB(
  "<use_your_mongoDB_cluster_link>"
);

const routes = require("./routes");
app.use(routes);

const SSLCommerzPayment = require("sslcommerz-lts");
require("dotenv").config(); // Load .env variables

const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASSWORD;
const is_live = process.env.IS_LIVE === "true"; // Convert string to boolean

app.get("/init", (req, res) => {
  console.log("Initiating payment...");

  const data = {
    total_amount: 100,
    currency: "BDT",
    tran_id: `REF${Date.now()}`,
    success_url: "https://livingconnect-backend.vercel.app/success",
    fail_url: "https://livingconnect-backend.vercel.app/fail",
    cancel_url: "https://livingconnect-backend.vercel.app/cancel",
    ipn_url: "https://livingconnect-backend.vercel.app/ipn",
    shipping_method: "Courier",
    product_name: "Computer",
    product_category: "Electronic",
    product_profile: "general",
    cus_name: "Customer Name",
    cus_email: "customer@example.com",
    cus_add1: "Dhaka",
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: "01711111111",
    cus_fax: "01711111111",
    ship_name: "Customer Name",
    ship_add1: "Dhaka",
    ship_add2: "Dhaka",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: "1000",
    ship_country: "Bangladesh",
  };

  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  console.log({ store_id, store_passwd, is_live });

  sslcz
    .init(data)
    .then((apiResponse) => {
      const GatewayPageURL = apiResponse.GatewayPageURL;

      if (GatewayPageURL) {
        res.status(200).json({ url: GatewayPageURL });
        console.log("Redirecting to:", GatewayPageURL);
      } else {
        res
          .status(400)
          .json({ message: "Failed to connect to payment gateway" });
      }
    })
    .catch((error) => {
      console.error("Error initializing payment:", error);
      res.status(500).json({ message: "Internal Server Error" });
    });
});

// ############################################################

// Endpoint to get all properties
app.get("/properties", async (req, res) => {
  console.log("Request received at /properties endpoint");

  try {
    // console.log("Request received at /properties endpoint");
    const properties = await Property.find();
    res.status(200).json({ message: "Done!", properties });
  } catch (error) {
    console.error("Error fetching properties:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// POST endpoint to add a new property
app.post("/propertiesInsert", async (req, res) => {
  const { image, price, details, location } = req.body;

  // Validate that all required fields are provided
  if (!image || !price || !details || !location) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Create a new property instance
  const newProperty = new Property({
    image,
    price,
    details,
    location,
  });

  try {
    // Save the new property to the database
    await newProperty.save();
    return res
      .status(201)
      .json({ message: "Property added successfully", property: newProperty });
  } catch (err) {
    console.error("Error saving property:", err);
    return res.status(500).json({ message: "Failed to add property" });
  }
});

app.get("/health", (req, res) => {
  console.log("Server is running");
  res.status(200).json({ message: "Server is running" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://10.0.2.2:${PORT}`);
  console.log(`Server accessible at http://localhost:${PORT}`);
});
