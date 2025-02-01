const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/userModelDB"); // Import the User model
const Session = require("../models/sessionModelDB"); // Ensure correct import
const HomeDetails = require("../models/homeDetailsDB");
const CommunityDetails = require("../models/communityDetailsDB"); // Make sure the path is correct
const Location = require("../models/locationDB");

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
    //   restrictions,
      name,
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
      name,
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


    // Step 2: Save location with houseId
    if (location?.latitude && location?.longitude) {
      const newLocation = new Location({
        coordinates: {
          latitude: location.latitude,
          longitude: location.longitude,
        },
        city: location.city || "Unknown City",
        area: location.area || "Unknown Area",
        houseId: newCommunityDetails._id.toString(), // Use the created home's _id as houseId
      });

      await newLocation.save();
      console.log("Location saved successfully!");
    } else {
      console.warn("Location data is missing or invalid. Skipping location save.");
    }

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




  // Endpoint to fetch all Community Center details
router.get("/get-all-CommunityCenter-details-otherUsers", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]; // Get token from Authorization header

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    // Get user info from the token
    const userInfo = await getUserInfo(token);
    const userId = userInfo.userId;

    console.log("Get Homes Details API called");
    console.log("User ID:", userId);

    // Query homes with success: true and exclude the current user's homes
    const query = {
      success: true,
      userId: { $ne: userId }, // Exclude homes with the same userId
    };

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



// Endpoint to fetch all home details
router.get("/get-all-CommunityCenter-details-successFalse", async (req, res) => {
  try {
    const query = { success: false };

    const homes = await CommunityDetails.find(query);
    res.status(200).json(homes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Community details", error });
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



// Endpoint to fetch all home details
router.get("/get-all-CommunityCenter-details-successTrue", async (req, res) => {
  try {
    const query = { success: true };

    const homes = await CommunityDetails.find(query);
    res.status(200).json(homes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Community details", error });
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




  // Endpoint to fetch all CommunityCenter by ID
router.get("/get-user-CommunityCenter-properties", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]; // Get token from Authorization header
  
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const userInfo = await getUserInfo(token);
    const userId = userInfo.userId;

    console.log("Get Community Center Details api called");
    console.log("User ID:", userId); 

    const CommunityCenter = await CommunityDetails.find({ userId });

    if (!CommunityCenter || CommunityCenter.length === 0) {
      return res.status(404).json({ message: "No Community Center found for this user" });
    }


    console.log(CommunityCenter);
    res.status(200).json(CommunityCenter);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Community Center details", error });
  }
});




// Endpoint to update CommunityCenter details
router.patch("/update-CommunityCenter/:id", async (req, res) => {
  const { id } = req.params; // Extract home ID from URL
  const updateData = req.body; // Data to be updated

  try {
    console.log(`Updating CommunityCenter with ID: ${id}`);
    console.log("Update data:", updateData);

    // Validate ID format (optional, depending on your requirements)
    if (!id) {
      return res.status(400).json({ message: "CommunityCenter ID is required" });
    }

    // Find the home by ID and update the fields provided in `updateData`
    const UpdatedCommunityCenter = await CommunityDetails.findByIdAndUpdate(
      id,
      { $set: updateData }, // Use `$set` to update only the specified fields
      { new: true, runValidators: true } // Return the updated document and validate the data
    );

    if (!UpdatedCommunityCenter) {
      return res.status(404).json({ message: "Home not found" });
    }

    console.log("CommunityCenter updated successfully:", UpdatedCommunityCenter);
    res.status(200).json({ message: "CommunityCenter updated successfully", UpdatedCommunityCenter });
  } catch (error) {
    console.error("Error updating CommunityCenter details:", error);
    res.status(500).json({ message: "Error updating CommunityCenter details", error });
  }
});




router.get("/searchCenters", async (req, res) => {
  try {
    const {
      city,
      area,
      centerType,
      capacityMin,
      capacityMax,
      hallsMin,
      hallsMax,
      sizeMin,
      sizeMax,
      parkingMin,
      kitchenArea,
      diningArea,
      stageArea,
      airConditioned,
      generator,
      wifi,
      sound,
      lighting,
      decoration,
      catering,
      staging,
      security,
      basePriceMin,
      basePriceMax,
      availableFrom,
      availableTo,
    } = req.query;

    let filter = {};

    // **Location Filters**
    if (city) filter["location.city"] = new RegExp(city, "i");
    if (area) filter["location.area"] = new RegExp(area, "i");

    // **Center Type**
    if (centerType) filter.centerType = centerType;

    // **Details Filters**
    if (capacityMin || capacityMax) {
      filter["details.capacity"] = {};
      if (capacityMin) filter["details.capacity"].$gte = parseInt(capacityMin);
      if (capacityMax) filter["details.capacity"].$lte = parseInt(capacityMax);
    }
    if (hallsMin || hallsMax) {
      filter["details.halls"] = {};
      if (hallsMin) filter["details.halls"].$gte = parseInt(hallsMin);
      if (hallsMax) filter["details.halls"].$lte = parseInt(hallsMax);
    }
    if (sizeMin || sizeMax) {
      filter["details.size"] = {};
      if (sizeMin) filter["details.size"].$gte = parseInt(sizeMin);
      if (sizeMax) filter["details.size"].$lte = parseInt(sizeMax);
    }
    if (parkingMin) filter["details.parking"] = { $gte: parseInt(parkingMin) };

    // **Boolean Filters (Facilities & Areas)**
    if (kitchenArea) filter["details.kitchenArea"] = kitchenArea === "true";
    if (diningArea) filter["details.diningArea"] = diningArea === "true";
    if (stageArea) filter["details.stageArea"] = stageArea === "true";

    if (airConditioned) filter["facilities.airConditioned"] = airConditioned === "true";
    if (generator) filter["facilities.generator"] = generator === "true";
    if (wifi) filter["facilities.wifi"] = wifi === "true";
    if (sound) filter["facilities.sound"] = sound === "true";
    if (lighting) filter["facilities.lighting"] = lighting === "true";
    if (decoration) filter["facilities.decoration"] = decoration === "true";
    if (catering) filter["facilities.catering"] = catering === "true";
    if (staging) filter["facilities.staging"] = staging === "true";
    if (security) filter["facilities.security"] = security === "true";

    // **Price Filters**
    if (basePriceMin || basePriceMax) {
      filter["price.basePrice"] = {};
      if (basePriceMin) filter["price.basePrice"].$gte = parseInt(basePriceMin);
      if (basePriceMax) filter["price.basePrice"].$lte = parseInt(basePriceMax);
    }

    // **Availability Filters**
    if (availableFrom || availableTo) {
      filter["availability.from"] = {};
      if (availableFrom) filter["availability.from"].$gte = new Date(availableFrom);
      if (availableTo) filter["availability.from"].$lte = new Date(availableTo);
    }

    // **Query MongoDB**
    const results = await CommunityDetails.find(filter);

    res.status(200).json(results);
  } catch (error) {
    console.error("Error filtering community centers:", error);
    res.status(500).json({ message: "Server error" });
  }
});




// Fetch all locations and include userId from homeDetails
router.get("/locations-otherUsers", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]; // Get token from Authorization header

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    // Get user info from the token
    const userInfo = await getUserInfo(token);
    const userId = userInfo.userId;

    // Fetch locations of houses where success is true and userId is not the current user's
    const locations = await CommunityDetails.find({
      success: true,
      userId: { $ne: userId },
    });

    // Transform the response to the required format
    const formattedLocations = locations.map(location => ({
      coordinates: {
        latitude: location.location.latitude,
        longitude: location.location.longitude,
      },
      _id: location._id,
      city: location.location.city,
      area: location.location.area,
      houseId: location._id,
      __v: location.__v,
    }));

    res.status(200).json({ locations: formattedLocations });
  } catch (error) {
    console.error("Error fetching locations:", error);
    res.status(500).json({ message: "Error fetching locations", error: error.message });
  }
});



module.exports = router;
