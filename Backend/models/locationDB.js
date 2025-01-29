const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  coordinates: {
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    }
  },
  city: {
    type: String,
    // required: true,
    // trim: true
  },
  area: {
    type: String,
    // required: true,
    // trim: true
  },
  houseId:{
    type: String,
    // required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const LocationSchema = mongoose.model("locationSchema", locationSchema);
module.exports = LocationSchema;
