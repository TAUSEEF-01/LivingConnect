const express = require("express");
const router = express.Router();

const authenticationRoutes = require("./authentication");
router.use("/auth", authenticationRoutes); // Routes from authentication.js

const profileRoutes = require("./profile");
router.use("/profile", profileRoutes);

router.get("/", async (req, res) => {
  res.status(200).json({ message: "Session valid" });
});



module.exports = router;
