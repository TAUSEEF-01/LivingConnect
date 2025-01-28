const express = require("express");
const router = express.Router();
const { getUserInfo } = require("../utils/getUserInfo");

const authenticationRoutes = require("./authentication");
router.use("/auth", authenticationRoutes); // Routes from authentication.js

const profileRoutes = require("./profile");
router.use("/profile", profileRoutes);

const houseDetailsRoutes = require("./houseDetails");
router.use("/houseDetails", houseDetailsRoutes);

const messageRoutes = require("./message");
router.use("/messages", messageRoutes);

router.get("/", async (req, res) => {
  res.status(200).json({ message: "Session valid" });
});

module.exports = router;
