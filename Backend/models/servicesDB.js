const mongoose = require("mongoose");

const servicesDetails = new mongoose.Schema({
  userId: { type: String, required: true },
  email: {
    type: String,
  },
  contactNumber: {
    type: String,
    default: null, // Default value set to null
  },
  profileImage: {
    type: String,
    default: null, // Default value set to null
  },

  serviceType: {
    type: String, // rent or sale or sublet
    required: true,
  },

  companyName: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    // required: true,
  },

  cost: { type: Number, required: true },

  //   location: {
  //     city: { type: [String], required: true },
  //     area: { type: [String], required: true },
  //   },

  location: {
    type: Map,
    of: {
      type: [String],
    //   required: true,
    //   validate: {
    //     validator: function (areas) {
    //       return Array.isArray(areas) && areas.length > 0;
    //     },
    //     message: "Each city must have at least one area",
    //   },
    },
    required: true,
    // validate: {
    //   validator: function (value) {
    //     return Object.keys(value).length > 0;
    //   },
    //   message: "At least one city-area pair is required",
    // },
  },

  images: {
    type: [String], // Array of strings for multiple images
    required: true,
  },

  success: {
    type: Boolean,
    default: false,
  },
});

const ServicesDetails = mongoose.model("servicesDetails", servicesDetails);
module.exports = ServicesDetails;
