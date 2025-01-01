const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/userModelDB"); // Import the User model
const Session = require("../models/sessionModelDB"); // Ensure correct import

const { generateToken } = require("../utils/generateToken");
const { validateToken } = require("../utils/validateToken");
const { getUserInfo } = require("../utils/getUserInfo");

// register endpoint
router.post("/register", async (req, res) => {
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

// Login endpoint // check previous login session ****
router.post("/login", async (req, res) => {
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
    // console.log("Generated Token:", token);

    // Save the token in the session model
    await Session.create({ userId: user._id, token });

    // await AsyncStorage.setItem("userToken", token);
    // const keys = await AsyncStorage.getAllKeys();
    // console.log("AsyncStorage keys:", keys); // Logs all keys in AsyncStorage

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
router.post("/logout", async (req, res) => {
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
router.get("/verify", async (req, res) => {
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

    // No session expiration check; session is considered valid indefinitely
    // res.status(200).json({ message: "Session valid", userId: decoded.id });

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


// Route to get user details
router.get("/adminCheck", async (req, res) => {

  const token = req.headers.authorization?.split(" ")[1];
  // console.log("Received Update Request with token:", token);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const userInfo = await getUserInfo(token);
    const userId = userInfo.userId; // Assuming you extract the user ID from the token middleware

    // console.log("User ID:", userId);

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ isAdmin: user.isAdmin });
  } catch (error) {
    console.error("Error fetching user details:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
