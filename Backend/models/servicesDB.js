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
    
  cost: { type: Number, required: true },

  location: {
    city: { type: [String], required: true },
    area: { type: [String], required: true },
  },

  images: {
    type: [String], // Array of strings for multiple images
    required: true,
  },

  success: {
    type: Boolean,
    default: false,
  }
});

const ServicesDetails = mongoose.model("servicesDetails", servicesDetails);
module.exports = ServicesDetails;
