const mongoose = require("mongoose");

const adminViewHomeDetailsSchema = new mongoose.Schema({
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
  // userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  PropertyType: {
    type: String, // rent or sale or sublet
    required: true,
  },
  details: {
    beds: { type: Number, required: true },
    baths: { type: Number, required: true },
    size: { type: Number }, // in square meters
    balcony: { type: Number, required: true },
    floor: { type: Number },
  },
  memberRestriction: {
    type: String,
  },
  rent: { type: Number, required: true },
  rentPeriod: {
    type: String,
    required: true,
  },
  location: {
    city: { type: String, required: true },
    area: { type: String, required: true },
    sector: { type: String },
    road: { type: String },
    houseNumber: { type: String },
  },
  facilities: {
    garage: { type: Boolean },
    lift: { type: Boolean },
    gasSupply: { type: Boolean },
    generator: { type: Boolean },
    internet: { type: Boolean },
    cctv: { type: Boolean },
    wifi: { type: Boolean },
  },
  availability: {
    from: { type: Date, required: true },
    to: { type: Date, required: true },
  },
  images: {
    type: [String], // Array of strings for multiple images
    required: true,
  },
});

const adminViewHomeDetails = mongoose.model(
  "adminViewHomeDetails",
  adminViewHomeDetailsSchema
);
module.exports = adminViewHomeDetails;
