const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  details: {
    beds: { type: Number, required: true },
    baths: { type: Number, required: true },
    size: { type: Number, required: true }, // in square meters
  },
  location: {
    city: { type: String, required: true },
    region: { type: String, required: true },
  },
});

const Property = mongoose.model('Property', propertySchema);
module.exports = Property;
