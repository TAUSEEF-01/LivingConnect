const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/userModelDB"); // Import the User model
const Session = require("../models/sessionModelDB"); // Ensure correct import

const { generateToken } = require("../utils/generateToken");
const { validateToken } = require("../utils/validateToken");
const { getUserInfo } = require("../utils/getUserInfo");

// Your update profile endpoint
router.post("/update-profile", async (req, res) => {
  console.log("Update profile endpoint called");

  const token = req.headers.authorization?.split(" ")[1];
  // console.log("Received Update Request with token:", token);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const userInfo = await getUserInfo(token);

    // // Validate the token
    // const decoded = validateToken(token); // Verify the JWT token
    // if (!decoded) {
    //   return res.status(401).json({ message: "Invalid or expired token" });
    // }

    // // const session = await Session.findOne({ token });
    // const userId = await User.findById(decoded.id);

    const { name, contactNumber, profileImage } = req.body;
    // const { email, name, contactNumber, profileImage } = req.body;

    email = userInfo.email;

    console.log("Email:", email);

    // Validate input
    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }

    // Optional: Add base64 image size validation if needed
    if (profileImage && profileImage.length > 5 * 1024 * 1024) {
      return res.status(413).json({
        message: "Image too large. Maximum 5MB allowed.",
      });
    }

    // Update user with base64 image
    const updatedUser = await User.findOneAndUpdate(
      { email },
      {
        name,
        contactNumber,
        ...(profileImage && { profileImage }),
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({
      message: "Profile updated successfully.",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Detailed Server Error:", error);
    res.status(500).json({
      message: "Internal server error.",
      error: error.message,
    });
  }
});

// Endpoint to get user profile
router.get("/get-profile", async (req, res) => {
  console.log("Get profile endpoint called");
  const token = req.headers.authorization?.split(" ")[1]; // Get token from Authorization header

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  // const { email } = req.body;
  // const { email } = req.query;
  try {
    // console.log("Received profile - get Request");

    const userInfo = await getUserInfo(token);

    email = userInfo.email;
    console.log("Email:", email);

    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }

    // // Find user by email and return profile details
    // const user = await User.findOne({ email }).select(
    //   "name contactNumber profileImage"
    // );

    // Find user by email and return profile details
    const user = await User.findOne({ email }).select(
      "_id name contactNumber profileImage"
    );

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({
      id: user._id,
      email: email,
      name: user.name,
      contactNumber: user.contactNumber,
      profileImage: user.profileImage || null,
    });
  } catch (error) {
    console.error("Profile Fetch Error:", error);
    res.status(500).json({
      message: "Internal server error.",
      error: error.message,
    });
  }
});

router.get("/getUserInfo", async (req, res) => {
  token = req.headers.authorization.split(" ")[1];
  try {
    const userInfo = await getUserInfo(token);
    // console.log(userInfo);
    res
      .status(200)
      .json({ message: "User info retrieved", userInfo: userInfo });
  } catch (err) {
    console.error("Failed to retrieve user info", err);
    return res.status(500).json({ message: "Failed to retrieve user info" });
  }
});


router.get("/getUserInfo/:id", async (req, res) => {
  console.log("getUserInfo endpoint called");
  // token = req.headers.authorization.split(" ")[1];
  try {
    // const userInfo = await getUserInfo(token);
    // const userInfo = await User.findById(req.params.id);
    // console.log(userInfo);

    // const { userId } = req.body;
    const userId = req.params.id;
    console.log("User ID:", userId);
    
    // const user = await User.findById(userId);
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res
      .status(200)
      .json({ message: "User info retrieved", 
        email: user.email,
        name: user.name,
        contactNumber: user.contactNumber,
       });
  } catch (err) {
    console.error("Failed to retrieve user info", err);
    return res.status(500).json({ message: "Failed to retrieve user info" });
  }
});

module.exports = router;
