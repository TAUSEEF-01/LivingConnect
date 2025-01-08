// ##########################################################

// const express = require("express");
// const app = express();
// const path = require("path");
// const hbs = require("hbs");
// const collection = require("./Database/userInfo");

// const tempelatePath = path.join(__dirname, "./templates");

// app.use(express.json());
// app.set("view engine", "hbs");
// app.set("views", tempelatePath);
// app.use(express.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//   res.render("login");
// });
// app.get("/signup", (req, res) => {
//   res.render("signup");
// });

// app.post("/signup", async (req, res) => {
//   const { name, password } = req.body;

//   if (password.length < 7) {
//     return res.render("signup", {
//       error: "Password must be at least 7 characters long.",
//     });
//   }

//   const data = {
//     name,
//     password,
//   };

//   await collection.insertMany([data]);

//   res.render("home");
// });

// app.all("/login", async (req, res) => {
//   if (req.method === "GET") {
//     res.render("login");
//   } else if (req.method === "POST") {
//     try {
//       const check = await collection.findOne({ name: req.body.name });

//       if (check.password === req.body.password) {
//         res.render("home");
//       } else {
//         res.send("Wrong Password!");
//       }
//     } catch {
//       res.send("Wrong Details!");
//     }
//   }
// });

// app.get("/logout", (req, res) => {
//   res.redirect("/login");
// });

// app.listen(3000, () => {
//   console.log("Port Connected at the following website http://localhost:3000/");
// });

// // #############################################################################

// const express = require("express");
// const app = express();
// // const hbs = require("hbs");
// const collection = require("./models/userModel");

// // app.use(express.json());
// // app.set("view engine", "hbs");
// // app.use(express.urlencoded({ extended: false }));

// app.listen(3000 , ()=>{
//     console.log("Node js server started!");
// });

///////////////////////////////////

// app.post("/register", async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ error: "Please all fields are required" });
//   }

//   const userExits = await User.findOne({ email });
//   console.log("userExits", userExits);

//   if (userExits) {
//     return res.status(400).json({ error: 'User already exists' });
//   }

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10); // Hash the password with salt rounds

//     // Insert the new user with the hashed password (adjust according to your DB setup)
//     const newUser = { email, password: hashedPassword };
//     await User.create(newUser); // or any other DB operation

//     res.status(201).json({ message: "User registered successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// app.post("/register", async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ error: "Please all fields are required" });
//   }

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10); // Hash the password with salt rounds

//     // Save user to the database
//     const newUser = new collection({
//       email,
//       password: hashedPassword,
//     });

//     await newUser.save(); // Save the user to MongoDB

//     res.status(201).json({ message: "User registered successfully" });
//   } catch (err) {
//     console.error("Error during registration:", err); // Log the actual error
//     res.status(500).json({ message: "Server error", error: err.message }); // Send error message
//   }
// });

// ########################################################

// const express = require("express");
// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const cors = require("cors");
// const User = require("./models/userModel"); // Import the User model

// const bodyParser = require('body-parser');

// // const { restrictToLoggedinUserOnly, checkAuth } = require("./middlewares/auth");

// const app = express();
// const PORT = 5000;

// // app.use(cors());
// app.use(cors({
//   origin: '*',  // Be more specific in production
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));

// app.use(express.json());

// app.use(bodyParser.json()); // Middleware to parse JSON bodies
// app.use(bodyParser.urlencoded({ extended: true })); // Middleware for URL-encoded data

// app.set('view engine', 'ejs'); // Setting EJS as the template engine
// app.set('views', './views'); // Specify the directory for your view templates

// // mongoose
// //   .connect("mongodb://localhost:27017/UserInfo", { useNewUrlParser: true, useUnifiedTopology: true })
// //   .then(() => console.log("MongoDB Connected"))
// //   .catch((err) => console.error("MongoDB connection error:", err));

// mongoose.connect("mongodb://localhost:27017/UserInfo")
// // mongoose.connect("mongodb+srv://thebest:oDgT53RnQtXgolkb@cluster0.ab0nk.mongodb.net/LoginSignup?retryWrites=true&w=majority&appName=Cluster0")
// .then(()=>{
//     console.log("MongoDB Connected Succesfully!");
// })
// .catch((err) => {
//     console.error("Failed to Connect:", err.message);
// });

// app.post("/register", async (req, res) => {

//   console.log("Request received at /register endpoint");

//   const { email, password } = req.body;

//   console.log("Received email:", email, "Password:", password);

//   if (!email || !password) {
//     return res.status(400).json({ error: 'Please all fields are required' });
//   }

//   //! check if user already exists
//   const userExits = await User.findOne({ email });
//   console.log("userExits", userExits);

//   if (userExits) {
//     return res.status(400).json({ error: 'User already exists' });
//   }

//   try {
//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Save to the database
//     const newUser = await User.create({
//       email,
//       password: hashedPassword,
//     });

//     console.log("user created", newUser);

//     // const data = {
//     //   email,
//     //   password: hashedPassword
//     // };
//     // await collection.insertMany([data]);
//     // await newUser.save();

//     res.status(201).json({ message: "User registered successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// const jwt = require("jsonwebtoken");
// const Session = require("./models/sessionModel"); // Ensure correct import

// // Function to generate a token
// const generateToken = (userId) => {
//   const payload = { id: userId };
//   const secretKey = "abc@123"; // Keep this secret and secure
//   const options = { expiresIn: "2h" }; // Token expires in 2 hours

//   return jwt.sign(payload, secretKey, options);
// };

// // Login endpoint
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: "User not found." });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: "Invalid credentials." });
//     }

//     // Generate token
//     const token = generateToken(user._id);
//     console.log("Generated Token:", token);

//     // Save the token in the session model
//     await Session.create({ userId: user._id, token });

//     // Respond to the client
//     res.status(200).json({
//       message: "Login successful.",
//       token,
//       user: { email: user.email, id: user._id }
//     });
//   } catch (err) {
//     console.error("Error during login:", err.message);
//     res.status(500).json({ message: "Internal server error." });
//   }
// });

// // app.post("/login", async (req, res) => {

// //   const { email, password } = req.body;

// //   // console.log(`login with ${email}`);

// //   try {
// //     const user = await User.findOne({ email });
// //     if (!user) {
// //       return res.status(404).json({ message: "User not found." });
// //     }

// //     const isPasswordValid = await bcrypt.compare(password, user.password);
// //     if (!isPasswordValid) {
// //       return res.status(401).json({ message: "Invalid credentials." });
// //     }

// //     const token = generateToken(user._id);
// //     // await YourSessionModel.create({ token });
// //     console.log("Generated Token:", token);

// //     res.status(200).json({ message: "Login successful.", user: { email: user.email } });
// //   } catch (err) {
// //     res.status(500).json({ message: "Internal server error." });
// //   }
// // });

// app.post("/logout", async (req, res) => {
//   console.log("Authorization Header:", req.headers.authorization);

//   const token = req.headers.authorization?.split(" ")[1];
//   console.log("Extracted Token:", token);

//   if (!token) {
//     return res.status(400).json({ message: "Token is required for logout" });
//   }

//   try {
//     console.log("Deleting token from database...");

//     // Use the correct Session model
//     const result = await Session.deleteOne({ token });
//     console.log("Delete Result:", result);

//     if (result.deletedCount === 0) {
//       return res.status(404).json({ message: "Token not found" });
//     }

//     res.status(200).json({ message: "Logout successful" });
//   } catch (err) {
//     console.error("Error during logout:", err);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// // app.post("/logout", async (req, res) => {
// //   console.log(req.body);

// //   const token = req.headers.authorization?.split(" ")[1];

// //   if (!token) {
// //     return res.status(400).json({ message: "Token is required for logout" });
// //   }

// //   // Remove token from the database or invalidate the session
// //   try {
// //     await YourSessionModel.deleteOne({ token });
// //     res.status(200).json({ message: "Logout successful" });
// //   } catch (err) {
// //     console.error("Error during logout:", err.message);
// //     res.status(500).json({ message: "Internal server error" });
// //   }
// // });

// // app.post("/logout", async (req, res) => {
// //   try {
// //     const authHeader = req.headers.authorization;
// //     if (!authHeader) return res.status(401).json({ message: "Unauthorized" });

// //     const token = authHeader.split(" ")[1];
// //     // Invalidate the session (remove the token from the DB or session store)
// //     await YourSessionModel.deleteOne({ token });

// //     res.status(200).json({ message: "Logged out successfully" });
// //   } catch (err) {
// //     res.status(500).json({ message: "Internal server error" });
// //   }
// // });

// // app.get("/verify", async (req, res) => {

// //   console.log("verifying!!");

// //   try {
// //     const authHeader = req.headers.authorization;
// //     if (!authHeader) return res.status(401).json({ message: "Unauthorized" });

// //     const token = authHeader.split(" ")[1];
// //     // Validate the token/session (if using sessions, query your DB here)
// //     const sessionValid = await YourSessionModel.findOne({ token });
// //     if (!sessionValid) return res.status(401).json({ message: "Invalid session" });

// //     res.status(200).json({ message: "Session valid" });

// //   } catch (err) {
// //     res.status(500).json({ message: "Internal server error" });
// //   }
// // });

// // const validateToken = (token) => {
// //   try {
// //     const secretKey = "abc@123"; // Must match the key used during token generation
// //     return jwt.verify(token, secretKey); // Returns decoded payload if valid
// //   } catch (err) {
// //     console.error("Invalid Token:", err.message);
// //     return null; // Token is invalid
// //   }
// // };

// // app.get("/verify", restrictToLoggedinUserOnly, async (req, res) => {

// //   console.log("verifying!!");

// //   try {
// //     // const authHeader = req.headers.authorization;
// //     // if (!authHeader) return res.status(401).json({ message: "Unauthorized" });

// //     // const token = authHeader.split(" ")[1];
// //     // // Validate the token/session (if using sessions, query your DB here)
// //     // const sessionValid = await YourSessionModel.findOne({ token });

// //     const sessionValid = await validateToken(req.token);
// //     if (!sessionValid) return res.status(401).json({ message: "Invalid session" });

// //     res.status(200).json({ message: "Session valid" });

// //   } catch (err) {
// //     res.status(500).json({ message: "Internal server error" });
// //   }
// // });

// // const validateToken = (token) => {
// //   try {
// //     const secretKey = "abc@123"; // Must match the key used during token generation
// //     return jwt.verify(token, secretKey); // Returns decoded payload if valid
// //   } catch (err) {
// //     console.error("Invalid Token:", err.message);
// //     return null; // Token is invalid
// //   }
// // };

// // Middleware to restrict access to logged-in users only
// // const restrictToLoggedinUserOnly = async (req, res, next) => {
// //   const authHeader = req.headers.authorization;
// //   if (!authHeader) return res.status(401).json({ message: "Unauthorized" });

// //   const token = authHeader.split(" ")[1];
// //   if (!token) return res.status(400).json({ message: "Token is required" });

// //   // Validate the token first
// //   const decoded = validateToken(token);
// //   if (!decoded) return res.status(401).json({ message: "Invalid or expired token" });

// //   // Check if the session exists in the database
// //   const session = await Session.findOne({ token });
// //   if (!session) return res.status(401).json({ message: "Session not found" });

// //   // Attach the user ID to the request for use in other routes
// //   req.userId = decoded.id;
// //   next(); // Proceed to the next middleware or route handler
// // };

// const validateToken = (token) => {
//   try {
//     const secretKey = "abc@123";
//     return jwt.verify(token, secretKey); // Returns decoded payload if valid
//   } catch (err) {
//     console.error("Invalid or expired token:", err.message);
//     return null; // Token is invalid or expired
//   }
// };

// app.get("/verify", async (req, res) => {
//   console.log("Verifying token...");

//   const token = req.headers.authorization?.split(" ")[1]; // Get token from Authorization header

//   if (!token) {
//     return res.status(401).json({ message: "Unauthorized: No token provided" });
//   }

//   try {
//     console.log("Token being verified:", token);

//     // Validate the token
//     const decoded = validateToken(token); // Verify the JWT token
//     if (!decoded) {
//       return res.status(401).json({ message: "Invalid or expired token" });
//     }

//     console.log("Decoded token:", decoded);

//     // Find the session by token
//     const session = await Session.findOne({ token });
//     console.log("Session found in DB:", session);

//     if (!session) {
//       return res.status(401).json({ message: "Session not found" });
//     }

//     // Optional: Check if the session has expired (based on createdAt or the token's expiration)
//     const now = Date.now();
//     const sessionExpiry = new Date(session.createdAt).getTime() + 2 * 60 * 60 * 1000; // 2 hours session expiry

//     if (now > sessionExpiry) {
//       return res.status(401).json({ message: "Session expired" });
//     }

//     res.status(200).json({ message: "Session valid", userId: decoded.id });

//   } catch (err) {
//     console.error("Error during verification:", err.message);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// // app.get("/verify", restrictToLoggedinUserOnly, async (req, res) => {
// //   console.log("Verifying token...");

// //   const token = req.headers.authorization.split(" ")[1]; // Extract token from Authorization header
// //   console.log("Token being verified:", token);

// //   try {
// //     // Validate the token
// //     const decoded = validateToken(token);
// //     if (!decoded) {
// //       return res.status(401).json({ message: "Invalid or expired token" });
// //     }

// //     // Check if the session exists in the database
// //     const session = await Session.findOne({ token });
// //     console.log("Session found:", session);

// //     if (!session) {
// //       return res.status(401).json({ message: "Session not found" });
// //     }

// //     res.status(200).json({ message: "Session valid", userId: decoded.id });
// //   } catch (err) {
// //     console.error("Error during verification:", err.message);
// //     res.status(500).json({ message: "Internal server error" });
// //   }
// // });

// app.get("/", async (req, res) => {
//   res.status(200).json({ message: "Session valid" });
// });

// app.listen(PORT, '0.0.0.0', () => {
//   console.log(`Server running on http://10.0.2.2:${PORT}`);
//   console.log(`Server accessible at http://localhost:${PORT}`);
// });

// // 555555555555555555555555555555555555555555555555555555555555555555

// const express = require("express");
// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const cors = require("cors");
// const User = require("./models/userModel"); // Import the User model
// const Session = require("./models/sessionModel"); // Ensure correct import
// const Property = require("./models/propertyModel");
// const bodyParser = require('body-parser');
// // const AsyncStorage = require("@react-native-async-storage/async-storage");

// const jwt = require("jsonwebtoken");

// const { generateToken } = require("./utils/generateToken");
// const { validateToken } = require("./utils/validateToken");

// const { getUserInfo } = require("./utils/getUserInfo");

// // const { restrictToLoggedinUserOnly, checkAuth } = require("./middlewares/auth");

// const app = express();
// const PORT = 5000;

// // app.use(cors());
// app.use(cors({
//   origin: '*',  // Be more specific in production
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(bodyParser.json()); // Middleware to parse JSON bodies
// app.use(bodyParser.urlencoded({ extended: true })); // Middleware for URL-encoded data

// app.set('view engine', 'ejs'); // Setting EJS as the template engine
// app.set('views', './views'); // Specify the directory for your view templates

// const { connectMongoDB } = require("./connection");
// connectMongoDB("mongodb://localhost:27017/UserInfo");
// // connectMongoDB("mongodb+srv://thebest:oDgT53RnQtXgolkb@cluster0.ab0nk.mongodb.net/LoginSignup?retryWrites=true&w=majority&appName=Cluster0");

// const routes = require('./routes');
// app.use(routes);

// // mongoose.connect("mongodb://localhost:27017/UserInfo")
// // // mongoose.connect("mongodb+srv://thebest:oDgT53RnQtXgolkb@cluster0.ab0nk.mongodb.net/LoginSignup?retryWrites=true&w=majority&appName=Cluster0")
// // .then(()=>{
// //     console.log("MongoDB Connected Succesfully!");
// // })
// // .catch((err) => {
// //     console.error("Failed to Connect:", err.message);
// // });

// // // register endpoint
// // app.post("/register", async (req, res) => {

// //   console.log("Request received at /register endpoint");

// //   const { email, password } = req.body;
// //   console.log("Received email:", email, "Password:", password);

// //   if (!email || !password) {
// //     return res.status(400).json({ error: 'Please all fields are required' });
// //   }

// //   const userExits = await User.findOne({ email });
// //   console.log("userExits", userExits);

// //   if (userExits) {
// //     return res.status(400).json({ error: 'User already exists' });
// //   }

// //   try {
// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     const newUser = await User.create({
// //       email,
// //       password: hashedPassword,
// //     });

// //     console.log("user created", newUser);
// //     res.status(201).json({ message: "User registered successfully" });
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({ message: "Server error" });
// //   }
// // });

// // // Login endpoint // check previous login session ****
// // app.post("/login", async (req, res) => {
// //   const { email, password } = req.body;

// //   try {
// //     const user = await User.findOne({ email });

// //     if (!user) {
// //       return res.status(404).json({ message: "User not found." });
// //     }

// //     const isPasswordValid = await bcrypt.compare(password, user.password);
// //     if (!isPasswordValid) {
// //       return res.status(401).json({ message: "Invalid credentials." });
// //     }

// //     // Generate token
// //     const token = generateToken(user._id);
// //     // console.log("Generated Token:", token);

// //     // Save the token in the session model
// //     await Session.create({ userId: user._id, token });
// //     // await AsyncStorage.setItem("userToken", token);

// //     // const keys = await AsyncStorage.getAllKeys();
// //     // console.log("AsyncStorage keys:", keys); // Logs all keys in AsyncStorage

// //     // Respond to the client
// //     res.status(200).json({
// //       message: "Login successful.",
// //       token,
// //       user: { email: user.email, id: user._id }
// //     });
// //   } catch (err) {
// //     console.error("Error during login:", err.message);
// //     res.status(500).json({ message: "Internal server error." });
// //   }
// // });

// // // logout endpoint
// // app.post("/logout", async (req, res) => {
// //   console.log("Authorization Header:", req.headers.authorization);

// //   const token = req.headers.authorization?.split(" ")[1];
// //   console.log("Extracted Token:", token);

// //   if (!token) {
// //     return res.status(400).json({ message: "Token is required for logout" });
// //   }

// //   // Validate the token
// //   const decoded = validateToken(token); // Verify the JWT token
// //   if (!decoded) {
// //     return res.status(401).json({ message: "Invalid or expired token" });
// //   }

// //   try {
// //     console.log("Deleting token from database...");

// //     // Use the correct Session model
// //     const result = await Session.deleteOne({ token });
// //     console.log("Delete Result:", result);

// //     if (result.deletedCount === 0) {
// //       return res.status(404).json({ message: "Token not found" });
// //     }

// //     // await AsyncStorage.clear();

// //     res.status(200).json({ message: "Logout successful" });
// //   } catch (err) {
// //     console.error("Error during logout:", err);
// //     res.status(500).json({ message: "Internal server error" });
// //   }
// // });

// // // verify endpoint
// // app.get("/verify", async (req, res) => {
// //   console.log("Verifying token...");

// //   const token = req.headers.authorization?.split(" ")[1]; // Get token from Authorization header

// //   if (!token) {
// //     return res.status(401).json({ message: "Unauthorized: No token provided" });
// //   }

// //   try {
// //     console.log("Token being verified:", token);

// //     // Validate the token
// //     const decoded = validateToken(token); // Verify the JWT token
// //     if (!decoded) {
// //       return res.status(401).json({ message: "Invalid or expired token" });
// //     }

// //     console.log("Decoded token:", decoded);

// //     // Find the session by token
// //     const session = await Session.findOne({ token });
// //     console.log("Session found in DB:", session);

// //     if (!session) {
// //       return res.status(401).json({ message: "Session not found" });
// //     }

// //     // No session expiration check; session is considered valid indefinitely
// //     // res.status(200).json({ message: "Session valid", userId: decoded.id });

// //     const userId = await User.findById(decoded.id);
// //     console.log("User found in DB:", userId);

// //     res.status(200).json({
// //       message: "Session valid",
// //       userId: decoded.id,
// //       user: { email: userId.email, id: userId._id }
// //     });

// //   } catch (err) {
// //     console.error("Error during verification:", err.message);
// //     res.status(500).json({ message: "Internal server error" });
// //   }
// // });

// // app.get("/verify", async (req, res) => {
// //   console.log("Verifying token...");

// //   const token = req.headers.authorization?.split(" ")[1]; // Get token from Authorization header

// //   if (!token) {
// //     return res.status(401).json({ message: "Unauthorized: No token provided" });
// //   }

// //   try {
// //     console.log("Token being verified:", token);

// //     // Validate the token
// //     const decoded = validateToken(token); // Verify the JWT token
// //     if (!decoded) {
// //       return res.status(401).json({ message: "Invalid or expired token" });
// //     }

// //     console.log("Decoded token:", decoded);

// //     // Find the session by token
// //     const session = await Session.findOne({ token });
// //     console.log("Session found in DB:", session);

// //     if (!session) {
// //       return res.status(401).json({ message: "Session not found" });
// //     }

// //     // Optional: Check if the session has expired (based on createdAt or the token's expiration)
// //     const now = Date.now();
// //     const sessionExpiry = new Date(session.createdAt).getTime() + 2 * 60 * 60 * 1000; // 2 hours session expiry

// //     if (now > sessionExpiry) {
// //       return res.status(401).json({ message: "Session expired" });
// //     }

// //     res.status(200).json({ message: "Session valid", userId: decoded.id });

// //   } catch (err) {
// //     console.error("Error during verification:", err.message);
// //     res.status(500).json({ message: "Internal server error" });
// //   }
// // });

// // app.get("/", async (req, res) => {
// //   res.status(200).json({ message: "Session valid" });
// // });

// // // Your update profile endpoint
// // app.post("/update-profile", async (req, res) => {

// //   const token = req.headers.authorization?.split(" ")[1]; // Get token from Authorization header
// //   // console.log("Received Update Request with token:", token);

// //   // if (!token) {
// //   //   return res.status(401).json({ message: "Unauthorized: No token provided" });
// //   // }

// //   console.log("Received profile - update Request");

// //   try {

// //     const userInfo = await getUserInfo(token);

// //     // // Validate the token
// //     // const decoded = validateToken(token); // Verify the JWT token
// //     // if (!decoded) {
// //     //   return res.status(401).json({ message: "Invalid or expired token" });
// //     // }

// //     // // const session = await Session.findOne({ token });
// //     // const userId = await User.findById(decoded.id);

// //     const {  name, contactNumber, profileImage } = req.body;
// //     // const { email, name, contactNumber, profileImage } = req.body;

// //     email = userInfo.email;

// //     console.log("Email:", email);

// //     // Validate input
// //     if (!email) {
// //       return res.status(400).json({ message: "Email is required." });
// //     }

// //     // Optional: Add base64 image size validation if needed
// //     if (profileImage && profileImage.length > 5 * 1024 * 1024) {
// //       return res.status(413).json({
// //         message: "Image too large. Maximum 5MB allowed."
// //       });
// //     }

// //     // Update user with base64 image
// //     const updatedUser = await User.findOneAndUpdate(
// //       { email },
// //       {
// //         name,
// //         contactNumber,
// //         ...(profileImage && { profileImage })
// //       },
// //       { new: true }
// //     );

// //     if (!updatedUser) {
// //       return res.status(404).json({ message: "User not found." });
// //     }

// //     res.status(200).json({
// //       message: "Profile updated successfully.",
// //       user: updatedUser,
// //     });
// //   } catch (error) {
// //     console.error("Detailed Server Error:", error);
// //     res.status(500).json({
// //       message: "Internal server error.",
// //       error: error.message
// //     });
// //   }
// // });

// // // app.get("/get-profile", async (req, res) => {
// // //   try {
// // //     console.log("Received profile - POST Request");

// // //     const { email } = req.body; // Extract email from request body
// // //     console.log("Email:", email);

// // //     if (!email) {
// // //       return res.status(400).json({ message: "Email is required." });
// // //     }

// // //     const user = await User.findOne({ email }).select('name contactNumber profileImage');

// // //     if (!user) {
// // //       return res.status(404).json({ message: "User not found." });
// // //     }

// // //     res.status(200).json({
// // //       name: user.name,
// // //       contactNumber: user.contactNumber,
// // //       profileImage: user.profileImage || null,
// // //     });
// // //   } catch (error) {
// // //     console.error("Profile Fetch Error:", error);
// // //     res.status(500).json({
// // //       message: "Internal server error.",
// // //       error: error.message,
// // //     });
// // //   }
// // // });

// // // Endpoint to get user profile
// // app.get("/get-profile", async (req, res) => {

// //   const token = req.headers.authorization?.split(" ")[1]; // Get token from Authorization header

// //   // const { email } = req.body;
// //   // const { email } = req.query;
// //   try {
// //     // console.log("Received profile - get Request");

// //     const userInfo = await getUserInfo(token);

// //     email = userInfo.email;
// //     console.log("Email:", email);

// //     if (!email) {
// //       return res.status(400).json({ message: "Email is required." });
// //     }

// //     // Find user by email and return profile details
// //     const user = await User.findOne({ email }).select('name contactNumber profileImage');

// //     if (!user) {
// //       return res.status(404).json({ message: "User not found." });
// //     }

// //     res.status(200).json({
// //       email: email,
// //       name: user.name,
// //       contactNumber: user.contactNumber,
// //       profileImage: user.profileImage || null
// //     });
// //   } catch (error) {
// //     console.error("Profile Fetch Error:", error);
// //     res.status(500).json({
// //       message: "Internal server error.",
// //       error: error.message
// //     });
// //   }
// // });

// // app.get("/getUserInfo", async (req, res) => {
// //   token = req.headers.authorization.split(" ")[1];
// //   try {
// //     const userInfo = await getUserInfo(token);
// //     // console.log(userInfo);
// //     res.status(200).json({ message: 'User info retrieved', userInfo: userInfo });
// //   } catch (err) {
// //     console.error('Failed to retrieve user info', err);
// //     return res.status(500).json({ message: 'Failed to retrieve user info' });
// //   }
// // });

// // ############################################################

// // Endpoint to get all properties
// app.get('/properties', async (req, res) => {
//   console.log("Request received at /api/properties endpoint");

//   try {
//     // console.log("Request received at /api/properties endpoint");
//     const properties = await Property.find();
//     res.status(200).json({ message: "Done!", properties});
//   } catch (error) {
//     console.error('Error fetching properties:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // POST endpoint to add a new property
// app.post('/propertiesInsert', async (req, res) => {
//   const { image, price, details, location } = req.body;

//   // Validate that all required fields are provided
//   if (!image || !price || !details || !location) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   // Create a new property instance
//   const newProperty = new Property({
//     image,
//     price,
//     details,
//     location,
//   });

//   try {
//     // Save the new property to the database
//     await newProperty.save();
//     return res.status(201).json({ message: 'Property added successfully', property: newProperty });
//   } catch (err) {
//     console.error('Error saving property:', err);
//     return res.status(500).json({ message: 'Failed to add property' });
//   }
// });

// // ############################################################

// // // Middleware
// // app.use(bodyParser.json({ limit: "10mb" }));

// // // Update user profile endpoint
// // app.post("/update-profile", async (req, res) => {
// //   const { email, name, contactNumber, profileImage } = req.body;

// //   if (!email || (!name && !contactNumber && !profileImage)) {
// //     return res.status(400).json({ message: "Email and at least one update field are required." });
// //   }

// //   try {
// //     // Find the user by email and update fields
// //     const updatedUser = await User.findOneAndUpdate(
// //       { email },
// //       {
// //         ...(name && { name }),
// //         ...(contactNumber && { contactNumber }),
// //         ...(profileImage && { profileImage }), // Base64 image string
// //       },
// //       { new: true } // Return the updated document
// //     );

// //     if (!updatedUser) {
// //       return res.status(404).json({ message: "User not found." });
// //     }

// //     res.status(200).json({
// //       message: "Profile updated successfully.",
// //       user: updatedUser,
// //     });
// //   } catch (error) {
// //     console.error("Error updating user profile:", error.message);
// //     res.status(500).json({ message: "Internal server error." });
// //   }
// // });

// // const multer = require("multer");
// // const upload = multer({ dest: 'uploads/' });
// // Configure multer storage

// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     cb(null, 'uploads/');
// //   },
// //   filename: (req, file, cb) => {
// //     cb(null, Date.now() + path.extname(file.originalname));
// //   }
// // });

// // const upload = multer({
// //   storage: storage,
// //   limits: { fileSize: 10 * 1024 * 1024 } // 10MB file size limit
// // });

// // app.use(bodyParser.json({ limit: "50mb" }));  // Increase the limit to 50mb
// // app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// // app.post("/update-profile", upload.single("profileImage"), async (req, res) => {
// //   const { email, name, contactNumber } = req.body;
// //   const profileImage = req.file ? req.file.path : null;

// //   if (!email || (!name && !contactNumber && !profileImage)) {
// //     return res.status(400).json({ message: "Email and at least one update field are required." });
// //   }

// //   try {
// //     const updatedUser = await User.findOneAndUpdate(
// //       { email },
// //       {
// //         ...(name && { name }),
// //         ...(contactNumber && { contactNumber }),
// //         ...(profileImage && { profileImage }),
// //       },
// //       { new: true }
// //     );

// //     if (!updatedUser) {
// //       return res.status(404).json({ message: "User not found." });
// //     }

// //     res.status(200).json({
// //       message: "Profile updated successfully.",
// //       user: updatedUser,
// //     });
// //   } catch (error) {
// //     console.error("Error updating user profile:", error.message);
// //     res.status(500).json({ message: "Internal server error." });
// //   }
// // });

// // const multer = require("multer");
// // const path = require('path');

// // // // Increase payload size limit
// // // app.use(express.json({ limit: "50mb" }));
// // // app.use(express.urlencoded({ limit: "50mb", extended: true }));

// // // Increase JSON payload size limit
// // app.use(bodyParser.json({ limit: '1000mb' })); // Adjust size as needed
// // app.use(bodyParser.urlencoded({
// //   limit: '1000mb',
// //   extended: true
// // }));

// // // Or if you're using express.json() directly:
// // app.use(express.json({ limit: '1000mb' }));
// // app.use(express.urlencoded({
// //   limit: '1000mb',
// //   extended: true
// // }));

// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     cb(null, 'uploads/');
// //   },
// //   filename: (req, file, cb) => {
// //     cb(null, Date.now() + path.extname(file.originalname));
// //   }
// // });

// // const upload = multer({
// //   storage: storage,
// //   limits: {
// //     fileSize: 10 * 1024 * 1024 // 10MB
// //   }
// // });

// // // Updated profile update endpoint
// // app.post("/update-profile", upload.single("profileImage"), async (req, res) => {
// //   try {
// //     const { email, name, contactNumber } = req.body;
// //     const profileImagePath = req.file ? req.file.path : null;

// //     console.log("Received Update Request:", { email, name, contactNumber, profileImagePath });

// //     // Your existing update logic
// //     const updatedUser = await User.findOneAndUpdate(
// //       { email },
// //       {
// //         ...(name && { name }),
// //         ...(contactNumber && { contactNumber }),
// //         ...(profileImagePath && { profileImage: profileImagePath }),
// //       },
// //       { new: true }
// //     );

// //     if (!updatedUser) {
// //       return res.status(404).json({ message: "User not found." });
// //     }

// //     res.status(200).json({
// //       message: "Profile updated successfully.",
// //       user: updatedUser,
// //     });
// //   } catch (error) {
// //     console.error("Detailed Server Error:", error);
// //     res.status(500).json({
// //       message: "Internal server error.",
// //       error: error.message
// //     });
// //   }
// // });

// // app.post("/update-profile", upload.single("profileImage"), async (req, res) => {
// //   try {
// //     const { email, name, contactNumber } = req.body;
// //     const profileImagePath = req.file ? req.file.path : null;

// //     console.log("Received Update Request:", {
// //       email,
// //       name,
// //       contactNumber,
// //       profileImagePath
// //     });

// //     // Your existing update logic
// //     const updatedUser = await User.findOneAndUpdate(
// //       { email },
// //       {
// //         ...(name && { name }),
// //         ...(contactNumber && { contactNumber }),
// //         ...(profileImagePath && { profileImage: profileImagePath }),
// //       },
// //       { new: true }
// //     );

// //     if (!updatedUser) {
// //       return res.status(404).json({ message: "User not found." });
// //     }

// //     res.status(200).json({
// //       message: "Profile updated successfully.",
// //       user: updatedUser,
// //     });
// //   } catch (error) {
// //     console.error("Detailed Server Error:", error);
// //     res.status(500).json({
// //       message: "Internal server error.",
// //       error: error.message
// //     });
// //   }
// // });

// // app.post("/update-profile", async (req, res) => {
// //   try {
// //     const { email, name, contactNumber, profileImage } = req.body;

// //     if (profileImage && profileImage.length > 5 * 1024 * 1024) {
// //       return res.status(413).json({
// //         message: "Image too large. Maximum 5MB allowed."
// //       });
// //     }

// //     console.log("Received Update Request:", {
// //       email,
// //       name,
// //       contactNumber,
// //       profileImage: profileImage ? 'Base64 Image Received' : 'No Image'
// //     });

// //     // Validate input
// //     if (!email) {
// //       return res.status(400).json({ message: "Email is required." });
// //     }

// //     // Update user with base64 image
// //     const updatedUser = await User.findOneAndUpdate(
// //       { email },
// //       {
// //         ...(name && { name }),
// //         ...(contactNumber && { contactNumber }),
// //         ...(profileImage && { profileImage: profileImage }),
// //       },
// //       { new: true }
// //     );

// //     if (!updatedUser) {
// //       return res.status(404).json({ message: "User not found." });
// //     }

// //     res.status(200).json({
// //       message: "Profile updated successfully.",
// //       user: updatedUser,
// //     });
// //   } catch (error) {
// //     console.error("Detailed Server Error:", error);
// //     res.status(500).json({
// //       message: "Internal server error.",
// //       error: error.message
// //     });
// //   }
// // });

// // app.use(express.json());

// app.post('/updateHomeDetails', async (req, res) => {
//   const { userId, images, type, rent, details, location } = req.body;

//   try {
//     const updatedHomeDetails = await HomeDetails.findOneAndUpdate(
//       { userId },  // Assuming you're updating by userId, you could use a different approach
//       { images, type, rent, details, location },
//       { new: true, upsert: true }  // Upsert: Create if not exists, otherwise update
//     );

//     if (updatedHomeDetails) {
//       res.status(200).json({ message: 'Home details updated successfully!', data: updatedHomeDetails });
//     } else {
//       res.status(400).json({ message: 'Failed to update home details' });
//     }
//   } catch (error) {
//     console.error('Error updating home details:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// const HomeDetails = require('./models/homeDetails');

// // app.post('/home-details', async (req, res) => {
// //   try {
// //     const {
// //       // userId,
// //       type,
// //       rent,
// //       // images = [],
// //       details,
// //       location
// //     } = req.body;

// //     // // Validate user exists
// //     // const userExists = await UserModel.findById(userId);
// //     // if (!userExists) {
// //     //   return res.status(404).json({ message: 'User not found' });
// //     // }

// //     // Create new home details
// //     const newHomeDetails = new HomeDetails({
// //       // userId,
// //       type,
// //       rent: Number(rent),
// //       // images,
// //       details: {
// //         beds: Number(details.beds),
// //         baths: Number(details.baths),
// //         size: Number(details.size),
// //         balcony: Number(details.balcony),
// //         floor: Number(details.floor),
// //         parking: details.parking,
// //         lift: details.lift,
// //         gasSupply: details.gasSupply
// //       },
// //       location: {
// //         city: location.city,
// //         region: location.region
// //       }
// //     });

// //     console.log(newHomeDetails);

// //     // Save to database
// //     const savedHomeDetails = await newHomeDetails.save();

// //     res.status(201).json({
// //       message: 'Home details added successfully',
// //       homeDetails: savedHomeDetails
// //     });

// //   } catch (error) {
// //     console.error('Error adding home details:', error);
// //     res.status(500).json({
// //       message: 'Error adding home details',
// //       error: error.message
// //     });
// //   }
// // });

// // Create new home details
// app.post('/home-details', async (req, res) => {

//   console.log("Home Details api called");

//   const token = req.headers.authorization?.split(" ")[1]; // Get token from Authorization header

//   console.log("Token:", token);

//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized: No token provided' });
//   }

//   try {

//     const userInfo = await getUserInfo(token);

//     // const userId = userInfo._id;
//     const userId = userInfo.userId;

//     const {
//       // userId,
//       PropertyType,
//       details,
//       memberRestriction,
//       rent,
//       rentPeriod,
//       location,
//       facitlities,
//       availability,
//       images
//     } = req.body;

//     console.log(req.body);  // Add this line to see the incoming data

//     // Create a new home details document
//     const newHomeDetails = new HomeDetails({
//       userId,
//       PropertyType,
//       details,
//       memberRestriction,
//       rent,
//       rentPeriod,
//       location,
//       facitlities,
//       availability,
//       images
//     });

//     console.log(newHomeDetails);  // Check if _id is available

//     // Save the new home details to the database
//     const savedHomeDetails = await newHomeDetails.save();

//     console.log("Saved Home Details!");

//     res.status(200).json({
//       message: 'Home details added successfully',
//       homeDetails: savedHomeDetails
//     });
//   } catch (error) {
//     console.error('Error adding home details:', error);
//     res.status(500).json({
//       message: 'Error adding home details',
//       error: error.message
//     });
//   }
// });

// // Endpoint to fetch a single home by ID
// app.get("/get-homes-details/:id", async (req, res) => {
//   try {
//     const home = await HomeDetails.findById(req.params.id);
//     if (!home) {
//       return res.status(404).json({ message: "Home not found" });
//     }
//     res.status(200).json(home);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching home details", error });
//   }
// });

// app.listen(PORT, '0.0.0.0', () => {
//   console.log(`Server running on http://10.0.2.2:${PORT}`);
//   console.log(`Server accessible at http://localhost:${PORT}`);
// });

// 555555555555555555555555555555555555555555555555555555555555555555

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
connectMongoDB("mongodb://localhost:27017/UserInfo");
// connectMongoDB("mongodb+srv://thebest:oDgT53RnQtXgolkb@cluster0.ab0nk.mongodb.net/UserInfo?retryWrites=true&w=majority&appName=Cluster0");

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
    success_url: "http://192.168.50.242:5000/success",
    fail_url: "http://192.168.50.242:5000/fail",
    cancel_url: "http://192.168.50.242:5000/cancel",
    ipn_url: "http://192.168.50.242:5000/ipn",
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

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://10.0.2.2:${PORT}`);
  console.log(`Server accessible at http://localhost:${PORT}`);
});
