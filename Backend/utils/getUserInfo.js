const jwt = require("jsonwebtoken");
const User = require("../models/userModelDB"); // Import your User model

// Secret key for JWT (ensure this is securely stored in an environment variable)
// const secretKey = process.env.JWT_SECRET || "abc@123";
const secretKey = "abc@123";

// Function to get user info from the token
const getUserInfo = async (token) => {
  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, secretKey);

    // Extract userId or email from the token payload
    const userId = decoded.id;

    // Fetch user details from the database
    const user = await User.findById(userId, "email _id"); // Only retrieve email and _id

    if (!user) {
      throw new Error("User not found");
    }

    // Return the email and userId
    return {
      email: user.email,
      userId: user._id,
      contactNumber: user.contactNumber,
      profileImage: user.profileImage,
    };
  } catch (error) {
    console.error("Error decoding token or fetching user:", error.message);
    throw new Error("Invalid or expired token");
  }
};

module.exports = { getUserInfo };
