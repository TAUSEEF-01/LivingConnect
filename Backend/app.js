const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const User = require("./models/userModel"); // Import the User model
const Session = require("./models/sessionModel"); // Ensure correct import
const bodyParser = require("body-parser");
// const AsyncStorage = require("@react-native-async-storage/async-storage");

const jwt = require("jsonwebtoken");

const { generateToken } = require("./utils/generateToken");
const { validateToken } = require("./utils/validateToken");

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

app.use(bodyParser.json()); // Middleware to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Middleware for URL-encoded data

app.set("view engine", "ejs"); // Setting EJS as the template engine
app.set("views", "./views"); // Specify the directory for your view templates

mongoose
  .connect("mongodb://localhost:27017/UserInfo")
  // mongoose.connect("mongodb+srv://thebest:oDgT53RnQtXgolkb@cluster0.ab0nk.mongodb.net/LoginSignup?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("MongoDB Connected Succesfully!");
  })
  .catch((err) => {
    console.error("Failed to Connect:", err.message);
  });

// register endpoint
app.post("/register", async (req, res) => {
  console.log("Request received at /register endpoint");

  const { email, password } = req.body;
  console.log("Received email:", email, "Password:", password);

  if (!email || !password) {
    return res.status(400).json({ error: "Please all fields are required" });
  }

  const userExits = await User.findOne({ email });
  console.log("userExits", userExits);

  if (userExits) {
    return res.status(400).json({ error: "User already exists" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: hashedPassword,
    });

    console.log("user created", newUser);
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Login endpoint
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // Generate token
    const token = generateToken(user._id);
    console.log("Generated Token:", token);

    // Save the token in the session model
    await Session.create({ userId: user._id, token });

    // Respond to the client
    res.status(200).json({
      message: "Login successful.",
      token,
      user: { email: user.email, id: user._id },
    });
  } catch (err) {
    console.error("Error during login:", err.message);
    res.status(500).json({ message: "Internal server error." });
  }
});

// logout endpoint
app.post("/logout", async (req, res) => {
  console.log("Authorization Header:", req.headers.authorization);

  const token = req.headers.authorization?.split(" ")[1];
  console.log("Extracted Token:", token);

  if (!token) {
    return res.status(400).json({ message: "Token is required for logout" });
  }

  // Validate the token
  const decoded = validateToken(token); // Verify the JWT token
  if (!decoded) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }

  try {
    console.log("Deleting token from database...");

    // Use the correct Session model
    const result = await Session.deleteOne({ token });
    console.log("Delete Result:", result);

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Token not found" });
    }

    // await AsyncStorage.clear();

    res.status(200).json({ message: "Logout successful" });
  } catch (err) {
    console.error("Error during logout:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// verify endpoint
app.get("/verify", async (req, res) => {
  console.log("Verifying token...");

  const token = req.headers.authorization?.split(" ")[1]; // Get token from Authorization header

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    console.log("Token being verified:", token);

    // Validate the token
    const decoded = validateToken(token); // Verify the JWT token
    if (!decoded) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    console.log("Decoded token:", decoded);

    // Find the session by token
    const session = await Session.findOne({ token });
    console.log("Session found in DB:", session);

    if (!session) {
      return res.status(401).json({ message: "Session not found" });
    }

    const userId = await User.findById(decoded.id);
    console.log("User found in DB:", userId);

    res.status(200).json({
      message: "Session valid",
      userId: decoded.id,
      user: { email: userId.email, id: userId._id },
    });
  } catch (err) {
    console.error("Error during verification:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/", async (req, res) => {
  res.status(200).json({ message: "Session valid" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://10.0.2.2:${PORT}`);
  console.log(`Server accessible at http://localhost:${PORT}`);
});
