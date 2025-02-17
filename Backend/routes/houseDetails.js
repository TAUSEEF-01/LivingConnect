const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/userModelDB"); // Import the User model
const Session = require("../models/sessionModelDB"); // Ensure correct import
const HomeDetails = require("../models/homeDetailsDB");
const Location = require("../models/locationDB");

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
      facilities,
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
      facilities,
      availability,
      images,
    });
    

    console.log(newHomeDetails); // Check if _id is available

    // Save the new home details to the database
    const savedHomeDetails = await newHomeDetails.save();

    console.log("Saved Home Details!");



    // Step 2: Save location with houseId
    if (location?.latitude && location?.longitude) {
      const newLocation = new Location({
        coordinates: {
          latitude: location.latitude,
          longitude: location.longitude,
        },
        city: location.city || "Unknown City",
        area: location.area || "Unknown Area",
        houseId: savedHomeDetails._id.toString(), // Use the created home's _id as houseId
      });

      await newLocation.save();
      console.log("Location saved successfully!");
    } else {
      console.warn("Location data is missing or invalid. Skipping location save.");
    }

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
    console.log("Get Homes Details api called");
    console.log(req.params.id);
    const home = await HomeDetails.findById(req.params.id);
    // const home = await HomeDetails.findById("67641db8d20432a2fb09230c");
    if (!home) {
      return res.status(404).json({ message: "Home not found" });
    }
    console.log(home);
    res.status(200).json(home);
  } catch (error) {
    res.status(500).json({ message: "Error fetching home details", error });
  }
});



// Endpoint to fetch a single home by ID
router.get("/get-user-house-properties", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]; // Get token from Authorization header
  
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const userInfo = await getUserInfo(token);
    const userId = userInfo.userId;

    console.log("Get Homes Details api called");
    console.log("User ID:", userId); 
    // const homes = await HomeDetails.find(userId);
    // if (!homes) {
    //   return res.status(404).json({ message: "Homes not found" });
    // }

    const homes = await HomeDetails.find({ userId });

    if (!homes || homes.length === 0) {
      return res.status(404).json({ message: "No homes found for this user" });
    }


    console.log(homes);
    res.status(200).json(homes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching home details", error });
  }
});


// Endpoint to fetch all home details
router.get("/get-all-Homes-details", async (req, res) => {
  try {
    const query = { success: true };

    const homes = await HomeDetails.find(query);
    // const homes = await HomeDetails.find({});
    res.status(200).json(homes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching home details", error });
  }
});



// Endpoint to fetch all home details excluding user's own houses
router.get("/get-all-Homes-details-otherUsers", async (req, res) => {
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

    const homes = await HomeDetails.find(query);

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
//     if (garage) query["facilities.garage"] = garage === "true";
//     if (lift) query["facilities.lift"] = lift === "true";
//     if (gasSupply) query["facilities.gasSupply"] = gasSupply === "true";
//     if (generator) query["facilities.generator"] = generator === "true";
//     if (internet) query["facilities.internet"] = internet === "true";
//     if (cctv) query["facilities.cctv"] = cctv === "true";
//     if (wifi) query["facilities.wifi"] = wifi === "true";

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
    const query = { success: true };
    if (city) query["location.city"] = city;
    if (area) query["location.area"] = area;
    if (rentMin) query.rent = { ...query.rent, $gte: Number(rentMin) };
    if (rentMax) query.rent = { ...query.rent, $lte: Number(rentMax) };
    if (propertyType) query.PropertyType = propertyType;
    if (beds) query["details.beds"] = Number(beds);
    if (baths) query["details.baths"] = Number(baths);
    if (sizeMin)
      query["details.size"] = {
        ...query["details.size"],
        $gte: Number(sizeMin),
      };
    if (sizeMax)
      query["details.size"] = {
        ...query["details.size"],
        $lte: Number(sizeMax),
      };
    if (balcony) query["details.balcony"] = Number(balcony);
    if (availabilityTo)
      query["availability.to"] = { $lte: new Date(availabilityTo) };

    const homes = await HomeDetails.find(query);
    res.status(200).json(homes);
  } catch (error) {
    console.error("Error retrieving homes:", error);
    res.status(500).json({ message: "Failed to retrieve homes", error });
  }
});

// Fixed successFalse Search Endpoint
router.get("/successFalse", async (req, res) => {
  try {
    // Construct search query
    const query = { success: false };

    const homes = await HomeDetails.find(query, { email: 1 });
    console.log(homes);
    res.status(200).json(homes);
  } catch (error) {
    console.error("Error retrieving homes:", error);
    res.status(500).json({ message: "Failed to retrieve homes", error });
  }
});


// Endpoint to fetch all home details
router.get("/get-all-Homes-details-successFalse", async (req, res) => {
  try {
    const query = { success: false };

    const homes = await HomeDetails.find(query);
    res.status(200).json(homes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching home details", error });
  }
});



// Fixed successTrue Search Endpoint
router.get("/successTrue", async (req, res) => {
  try {
    // Construct search query
    const query = { success: true };

    const homes = await HomeDetails.find(query, { email: 1 });
    console.log(homes);
    res.status(200).json(homes);
  } catch (error) {
    console.error("Error retrieving homes:", error);
    res.status(500).json({ message: "Failed to retrieve homes", error });
  }
});


// Endpoint to fetch all home details
router.get("/get-all-Homes-details-successTrue", async (req, res) => {
  try {
    const query = { success: true };

    const homes = await HomeDetails.find(query);
    res.status(200).json(homes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching home details", error });
  }
});




// Endpoint to accept a home and set success to true
router.patch("/accept/:id", async (req, res) => {
  // console.log("Accept Home API called");

  const { id } = req.params;

  try {
    // Find the home by ID and update success to true
    const updatedHome = await HomeDetails.findByIdAndUpdate(
      id,
      { success: true },
      { new: true } // Return the updated document
    );

    if (!updatedHome) {
      return res.status(404).json({ message: "Home not found" });
    }

    res.status(200).json({
      message: "Home accepted successfully",
      home: updatedHome,
    });
  } catch (error) {
    console.error("Error updating home success:", error);
    res.status(500).json({
      message: "Failed to accept the home",
      error,
    });
  }
});

// Endpoint to accept a home and set success to true
router.patch("/cancel/:id", async (req, res) => {
  // console.log("Accept Home API called");

  const { id } = req.params;

  try {
    // Find the home by ID and update success to true
    const updatedHome = await HomeDetails.findByIdAndUpdate(
      id,
      { success: false },
      { new: true } // Return the updated document
    );

    if (!updatedHome) {
      return res.status(404).json({ message: "Home not found" });
    }

    res.status(200).json({
      message: "Home canceled successfully",
      home: updatedHome,
    });
  } catch (error) {
    console.error("Error updating home success:", error);
    res.status(500).json({
      message: "Failed to accept the home",
      error,
    });
  }
});

router.get("/userIdByEmail", async (req, res) => {
  try {
    const { email } = req.query;
    const user = await User.findOne({ email });
    if (user) {
      res.status(200).json({ userId: user._id });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});



// Endpoint to update home details
router.patch("/update-home/:id", async (req, res) => {
  const { id } = req.params; // Extract home ID from URL
  const updateData = req.body; // Data to be updated

  try {
    console.log(`Updating home with ID: ${id}`);
    console.log("Update data:", updateData);

    // Validate ID format (optional, depending on your requirements)
    if (!id) {
      return res.status(400).json({ message: "Home ID is required" });
    }

    // Find the home by ID and update the fields provided in `updateData`
    const updatedHome = await HomeDetails.findByIdAndUpdate(
      id,
      { $set: updateData }, // Use `$set` to update only the specified fields
      { new: true, runValidators: true } // Return the updated document and validate the data
    );

    if (!updatedHome) {
      return res.status(404).json({ message: "Home not found" });
    }

    console.log("Home updated successfully:", updatedHome);
    res.status(200).json({ message: "Home updated successfully", updatedHome });
  } catch (error) {
    console.error("Error updating home details:", error);
    res.status(500).json({ message: "Error updating home details", error });
  }
});




// #############################################################

router.get("/homes/locations", async (req, res) => {
  try {
    // Fetch only latitude and longitude from all documents
    const locations = await HomeDetails.location.find({}, {
      // _id: 0, // Exclude the _id field
      latitude: 1,
      longitude: 1,
    });

    // Map the results to an array of lat-long pairs
    const latLongArray = locations.map(home => ({
      latitude: home.location.latitude,
      longitude: home.location.longitude,
    }));

    // Send the array as the response
    res.status(200).json(latLongArray);
  } catch (error) {
    console.error("Error fetching locations:", error);
    res.status(500).json({ error: "Failed to fetch locations" });
  }
});



// Fetch all locations
router.get("/locations", async (req, res) => {
  try {
    const locations = await Location.find(); // Fetch all location data
    res.status(200).json({ locations });
  } catch (error) {
    console.error("Error fetching locations:", error);
    res.status(500).json({ message: "Error fetching locations", error: error.message });
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
    const locations = await HomeDetails.find({
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
