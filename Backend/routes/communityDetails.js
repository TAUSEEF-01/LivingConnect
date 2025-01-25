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


// Endpoint to fetch all Community Center details
router.get("/get-all-CommunityCenter-details", async (req, res) => {
    try {
      const query = { success: true };
  
      const homes = await CommunityDetails.find(query);
      // const homes = await HomeDetails.find({});
      res.status(200).json(homes);
    } catch (error) {
      res.status(500).json({ message: "Error fetching home details", error });
    }
  });


// Fixed successFalse Search Endpoint
router.get("/successFalse", async (req, res) => {
    try {
      // Construct search query
      const query = { success: false };
  
      const communityCenter = await CommunityDetails.find(query, { email: 1 });
      console.log(communityCenter);
      res.status(200).json(communityCenter);
    } catch (error) {
      console.error("Error retrieving Community Centers:", error);
      res.status(500).json({ message: "Failed to retrieve Community Centers", error });
    }
});


// Fixed successFalse Search Endpoint
router.get("/successTrue", async (req, res) => {
    try {
      // Construct search query
      const query = { success: true };
  
      const communityCenter = await CommunityDetails.find(query, { email: 1 });
      console.log(communityCenter);
      res.status(200).json(communityCenter);
    } catch (error) {
      console.error("Error retrieving Community Centers:", error);
      res.status(500).json({ message: "Failed to retrieve Community Centers", error });
    }
});


router.get("/get-communityCenter-details/:id", async (req, res) => {
    try {
      console.log("Get Community Center Details api called");
      console.log(req.params.id);
      const communityCenter = await CommunityDetails.findById(req.params.id);
      // const Community Center = await Community CenterDetails.findById("67641db8d20432a2fb09230c");
      if (!communityCenter) {
        return res.status(404).json({ message: "Community Center not found" });
      }
      console.log(communityCenter);
      res.status(200).json(communityCenter);
    } catch (error) {
      res.status(500).json({ message: "Error fetching Community Center details", error });
    }
});


// Endpoint to accept a Community Center and set success to true
router.patch("/accept/:id", async (req, res) => {
    // console.log("Accept Community Center API called");
  
    const { id } = req.params;

    try {
        // Find the Community Center by ID and update success to true
        const updatedHome = await CommunityDetails.findByIdAndUpdate(
        id,
            { success: true },
            { new: true } // Return the updated document
        );

        if (!updatedHome) {
        return res.status(404).json({ message: "Community Center not found" });
        }

        res.status(200).json({
        message: "Community Center accepted successfully",
        home: updatedHome,
        });
    } catch (error) {
        console.error("Error updating Community Center success:", error);
        res.status(500).json({
        message: "Failed to accept the Community Center",
        error,
        });
    }
});




// Endpoint to accept a Community Center and set success to true
router.patch("/cancel/:id", async (req, res) => {
    // console.log("Accept Community Center API called");
  
    const { id } = req.params;
  
    try {
      // Find the Community Center by ID and update success to true
      const updatedHome = await CommunityDetails.findByIdAndUpdate(
        id,
        { success: false },
        { new: true } // Return the updated document
      );
  
      if (!updatedHome) {
        return res.status(404).json({ message: "Community Center not found" });
      }
  
      res.status(200).json({
        message: "Community Center canceled successfully",
        home: updatedHome,
      });
    } catch (error) {
      console.error("Error updating Community Center success:", error);
      res.status(500).json({
        message: "Failed to accept the Community Center",
        error,
      });
    }
  });




module.exports = router;
