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
router.use("/message", messageRoutes);

router.get("/", async (req, res) => {
  // const token = req.headers.authorization?.split(" ")[1];
  // if (!token) {
  //   return res.status(401).json({ message: "Unauthorized: No token provided" });
  // }
  // const userInfo = await getUserInfo(token);
  // console.log(userInfo);
  res.status(200).json({ message: "Session valid" });
});

module.exports = router;
