const jwt = require('jsonwebtoken');

// Function to generate a token
const generateToken = (userId) => {
  const payload = { id: userId };
  const secretKey = "abc@123"; // Keep this secret and secure
  // const options = { expiresIn: "2h" }; // Token expires in 2 hours

  return jwt.sign(payload, secretKey);
};


module.exports = { generateToken };