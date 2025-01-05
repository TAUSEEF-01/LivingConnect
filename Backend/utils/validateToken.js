const jwt = require('jsonwebtoken');

const validateToken = (token) => {
  try {
    const secretKey = "abc@123";
    return jwt.verify(token, secretKey); // Returns decoded payload if valid
  } catch (err) {
    console.error("Invalid or expired token:", err.message);
    return null; // Token is invalid or expired
  }
};

module.exports = { validateToken };
