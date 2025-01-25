const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/userModelDB"); // Import the User model
const Session = require("../models/sessionModelDB"); // Ensure correct import
const HomeDetails = require("../models/homeDetailsDB");
const CommunityDetails = require("../models/communityDetailsDB"); // Make sure the path is correct

const { generateToken } = require("../utils/generateToken");
const { validateToken } = require("../utils/validateToken");
const { getUserInfo } = require("../utils/getUserInfo");

// router.post("/updateHomeDetails", async (req, res) => {
//   console.log("Update Home Details api called");
//   const { userId, images, type, rent, details, location } = req.body;

//   try {
//     const updatedHomeDetails = await HomeDetails.findOneAndUpdate(
//       { userId }, // Assuming you're updating by userId, you could use a different approach
//       { images, type, rent, details, location },
//       { new: true, upsert: true } // Upsert: Create if not exists, otherwise update
//     );

//     if (updatedHomeDetails) {
//       res.status(200).json({
//         message: "Home details updated successfully!",
//         data: updatedHomeDetails,
//       });
//     } else {
//       res.status(400).json({ message: "Failed to update home details" });
//     }
//   } catch (error) {
//     console.error("Error updating home details:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });



// Create new home details


// router.post("/add-community-center", async (req, res) => {
//   console.log("Add Community Center api called");

//   const token = req.headers.authorization?.split(" ")[1]; // Get token from Authorization header

//   console.log("Token:", token);

//   if (!token) {
//     return res.status(401).json({ message: "Unauthorized: No token provided" });
//   }

//   try {
//     const userInfo = await getUserInfo(token);
//     const userId = userInfo.userId;
//     const email = userInfo.email;
//     const contactNumber = userInfo.contactNumber;
//     const profileImage = userInfo.profileImage;

//     const {
//       // userId,
//       PropertyType,
//       details,
//       memberRestriction,
//       rent,
//       rentPeriod,
//       location,
//       facilities,
//       availability,
//       images,
//     } = req.body;

//     console.log(req.body); // Add this line to see the incoming data

//     // Create a new home details document
//     const newHomeDetails = new HomeDetails({
//       userId,
//       email,
//       contactNumber,
//       profileImage,
//       PropertyType,
//       details,
//       memberRestriction,
//       rent,
//       rentPeriod,
//       location,
//       facilities,
//       availability,
//       images,
//     });

//     console.log(newHomeDetails); // Check if _id is available

//     // Save the new home details to the database
//     const savedHomeDetails = await newHomeDetails.save();

//     console.log("Saved Home Details!");

//     res.status(200).json({
//       message: "Home details added successfully",
//       homeDetails: savedHomeDetails,
//     });
//   } catch (error) {
//     console.error("Error adding home details:", error);
//     res.status(500).json({
//       message: "Error adding home details",
//       error: error.message,
//     });
//   }
// });







// POST endpoint to add community details
router.post("/add-community-center", async (req, res) => {
    console.log("Add Community Center api called");

    const token = req.headers.authorization?.split(" ")[1]; // Get token from Authorization header
  
    console.log("Token:", token);
  
    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }
  
    try {
      const userInfo = await getUserInfo(token);
      const userId = userInfo.userId;
      const email = userInfo.email;
      const contactNumber = userInfo.contactNumber;
      const profileImage = userInfo.profileImage;

    const {
    //   userId,
    //   email,
    //   contactNumber,
    //   profileImage,
      centerType,
      details,
      restrictions,
      price,
      location,
      facilities,
      availability,
      images,
    } = req.body;

    console.log(req.body);

    // Validate required fields
    if (!centerType || !details || !price || !location || !images) {
      return res.status(400).json({ message: "Required fields are missing." });
    }

    // Validate nested fields in `details`, `price`, and `location`
    if (
      !details.capacity ||
      !details.halls ||
      !details.parking ||
      !price.basePrice ||
      !location.city ||
      !location.area
    ) {
      return res
        .status(400)
        .json({ message: "Missing required nested fields." });
    }

    console.log(req.body);

    // Create a new instance of CommunityDetails
    const newCommunityDetails = new CommunityDetails({
      userId,
      email,
      contactNumber,
      profileImage,
      centerType,
      details,
    //   restrictions,
      price,
      location,
      facilities,
      availability,
      images,
    });

    // Save to database
    await newCommunityDetails.save();
    return res.status(200).json({
      message: "Community details added successfully.",
      communityDetails: newCommunityDetails,
    });
  } catch (err) {
    console.error("Error saving community details:", err);
    res.status(500).json({ message: "Failed to save community details." });
  }
});

module.exports = router;
