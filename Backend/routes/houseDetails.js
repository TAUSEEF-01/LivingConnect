const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/userModelDB"); // Import the User model
const Session = require("../models/sessionModelDB"); // Ensure correct import
const HomeDetails = require("../models/homeDetailsDB");

const { generateToken } = require("../utils/generateToken");
const { validateToken } = require("../utils/validateToken");
const { getUserInfo } = require("../utils/getUserInfo");

router.post("/updateHomeDetails", async (req, res) => {
  console.log("Update Home Details api called");
  const { userId, images, type, rent, details, location } = req.body;

  try {
    const updatedHomeDetails = await HomeDetails.findOneAndUpdate(
      { userId }, // Assuming you're updating by userId, you could use a different approach
      { images, type, rent, details, location },
      { new: true, upsert: true } // Upsert: Create if not exists, otherwise update
    );

    if (updatedHomeDetails) {
      res.status(200).json({
        message: "Home details updated successfully!",
        data: updatedHomeDetails,
      });
    } else {
      res.status(400).json({ message: "Failed to update home details" });
    }
  } catch (error) {
    console.error("Error updating home details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Create new home details
router.post("/home-details", async (req, res) => {
  console.log("Home Details api called");

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
      // userId,
      PropertyType,
      details,
      memberRestriction,
      rent,
      rentPeriod,
      location,
      facitlities,
      availability,
      images,
    } = req.body;

    console.log(req.body); // Add this line to see the incoming data

    // Create a new home details document
    const newHomeDetails = new HomeDetails({
      userId,
      email,
      contactNumber,
      profileImage,
      PropertyType,
      details,
      memberRestriction,
      rent,
      rentPeriod,
      location,
      facitlities,
      availability,
      images,
    });

    // console.log(newHomeDetails); // Check if _id is available

    // Save the new home details to the database
    const savedHomeDetails = await newHomeDetails.save();

    console.log("Saved Home Details!");

    res.status(200).json({
      message: "Home details added successfully",
      homeDetails: savedHomeDetails,
    });
  } catch (error) {
    console.error("Error adding home details:", error);
    res.status(500).json({
      message: "Error adding home details",
      error: error.message,
    });
  }
});

// Endpoint to fetch a single home by ID
router.get("/get-homes-details/:id", async (req, res) => {
  try {
    const home = await HomeDetails.findById(req.params.id);
    // const home = await HomeDetails.findById("67641db8d20432a2fb09230c");
    if (!home) {
      return res.status(404).json({ message: "Home not found" });
    }
    res.status(200).json(home);
  } catch (error) {
    res.status(500).json({ message: "Error fetching home details", error });
  }
});

// Endpoint to fetch all home details
router.get("/get-all-Homes-details", async (req, res) => {
  try {
    const homes = await HomeDetails.find({});
    res.status(200).json(homes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching home details", error });
  }
});



// router.get("/searchHomes", async (req, res) => {
//   try {
//     const { city, area, rentMin, rentMax, propertyType } = req.query;

//     // Construct search query
//     const query = {};
//     if (city) query["location.city"] = city;
//     if (area) query["location.area"] = area;
//     if (rentMin) query.rent = { ...query.rent, $gte: Number(rentMin) };
//     if (rentMax) query.rent = { ...query.rent, $lte: Number(rentMax) };
//     if (propertyType) query.PropertyType = propertyType;

//     const homes = await HomeDetails.find(query);
//     res.status(200).json(homes);
//   } catch (error) {
//     console.error("Error retrieving homes:", error);
//     res.status(500).json({ message: "Failed to retrieve homes", error });
//   }
// });





// router.get("/searchHomes", async (req, res) => {
//   try {
//     const {
//       city,
//       area,
//       rentMin,
//       rentMax,
//       propertyType,
//       beds,
//       baths,
//       balcony,
//       // sizeMin,
//       // sizeMax,
//       // garage,
//       // lift,
//       // gasSupply,
//       // generator,
//       // internet,
//       // cctv,
//       // wifi,
//       // availableFrom,
//       availableTo,
//     } = req.query;

//     // Construct search query
//     const query = {};

//     // Location filters
//     if (city) query["location.city"] = city;
//     if (area) query["location.area"] = area;

//     // Rent filters
//     if (rentMin) query.rent = { ...query.rent, $gte: Number(rentMin) };
//     if (rentMax) query.rent = { ...query.rent, $lte: Number(rentMax) };

//     // Property type
//     if (propertyType) query.PropertyType = propertyType;

//     // Details filters
//     if (beds) query["details.beds"] = Number(beds);
//     if (baths) query["details.baths"] = Number(baths);
//     if (balcony) query["details.balcony"] = Number(balcony);
//     if (sizeMin) query["details.size"] = { ...query["details.size"], $gte: Number(sizeMin) };
//     if (sizeMax) query["details.size"] = { ...query["details.size"], $lte: Number(sizeMax) };

//     // Facility filters
//     if (garage) query["facitlities.garage"] = garage === "true";
//     if (lift) query["facitlities.lift"] = lift === "true";
//     if (gasSupply) query["facitlities.gasSupply"] = gasSupply === "true";
//     if (generator) query["facitlities.generator"] = generator === "true";
//     if (internet) query["facitlities.internet"] = internet === "true";
//     if (cctv) query["facitlities.cctv"] = cctv === "true";
//     if (wifi) query["facitlities.wifi"] = wifi === "true";

//     // Availability filters
//     if (availableFrom) query["availability.from"] = { $gte: new Date(availableFrom) };
//     if (availableTo) query["availability.to"] = { $lte: new Date(availableTo) };

//     const homes = await HomeDetails.find(query);
//     res.status(200).json(homes);
//   } catch (error) {
//     console.error("Error retrieving homes:", error);
//     res.status(500).json({ message: "Failed to retrieve homes", error });
//   }
// });


// Updated Search Endpoint
router.get("/searchHomes", async (req, res) => {
  try {
    const {
      city,
      area,
      rentMin,
      rentMax,
      propertyType,
      beds,
      baths,
      sizeMin,
      sizeMax,
      balcony,
      availabilityTo,
    } = req.query;

    // Construct search query
    const query = {};
    if (city) query["location.city"] = city;
    if (area) query["location.area"] = area;
    if (rentMin) query.rent = { ...query.rent, $gte: Number(rentMin) };
    if (rentMax) query.rent = { ...query.rent, $lte: Number(rentMax) };
    if (propertyType) query.PropertyType = propertyType;
    if (beds) query["details.beds"] = Number(beds);
    if (baths) query["details.baths"] = Number(baths);
    if (sizeMin) query["details.size"] = { ...query["details.size"], $gte: Number(sizeMin) };
    if (sizeMax) query["details.size"] = { ...query["details.size"], $lte: Number(sizeMax) };
    if (balcony) query["details.balcony"] = Number(balcony);
    if (availabilityTo) query["availability.to"] = { $lte: new Date(availabilityTo) };

    const homes = await HomeDetails.find(query);
    res.status(200).json(homes);
  } catch (error) {
    console.error("Error retrieving homes:", error);
    res.status(500).json({ message: "Failed to retrieve homes", error });
  }
});



module.exports = router;
