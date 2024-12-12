const jwt = require('jsonwebtoken');

// Function to generate a token
const generateToken = (userId) => {
  const payload = { id: userId };
  const secretKey = "abc@123"; // Keep this secret and secure

  return jwt.sign(payload, secretKey);
};


module.exports = { generateToken };