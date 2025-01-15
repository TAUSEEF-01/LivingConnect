const mongoose = require("mongoose");

const communityDetails = new mongoose.Schema({
  userId: { type: String, required: true },
  email: {
    type: String,
  },
  contactNumber: {
    type: String,
    default: null,
  },
  profileImage: {
    type: String,
    default: null,
  },

  centerType: {
    type: String, // wedding, birthday, conference, multi-purpose
    required: true,
  },

  details: {
    capacity: { type: Number, required: true }, // number of people
    halls: { type: Number, required: true }, // number of halls
    size: { type: Number }, // in square meters
    parking: { type: Number, required: true }, // number of parking spaces
    kitchenArea: { type: Boolean },
    diningArea: { type: Boolean },
    stageArea: { type: Boolean }
  },
  
  restrictions: {
    noiseRestriction: { type: Boolean },
    timeRestriction: { type: String },
    foodRestriction: { type: Boolean },
    decorationRestriction: { type: Boolean }
  },

  price: {
    basePrice: { type: Number, required: true },
    fullDayPrice: { type: Number },
    halfDayPrice: { type: Number },
    perHourPrice: { type: Number }
  },

  location: {
    city: { type: String, required: true },
    area: { type: String, required: true },
    sector: { type: String },
    road: { type: String },
    buildingNumber: { type: String }
  },

  facilities: {
    airConditioned: { type: Boolean },
    generator: { type: Boolean },
    wifi: { type: Boolean },
    sound: { type: Boolean },
    lighting: { type: Boolean },
    decoration: { type: Boolean },
    catering: { type: Boolean },
    staging: { type: Boolean },
    security: { type: Boolean }
  },

  availability: {
    regularHours: {
      open: { type: String },
      close: { type: String }
    },
    bookedDates: [{
      date: { type: Date },
      timeSlot: { type: String }
    }]
  },

  images: {
    type: [String],
    required: true,
  },

  success: {
    type: Boolean,
    default: false,
  }
});

const CommunityDetails = mongoose.model("communityDetails", communityDetails);
module.exports = CommunityDetails;
