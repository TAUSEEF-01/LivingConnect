// // // // const bodyParser = require("body-parser");
// // // // const mongoose = require("mongoose");
// // // // const passport = require("passport");
// // // // const LocalStrategy = require("passport-local").Strategy;

// // // // const express = require("express");
// // // // const router = express.Router();
// // // // const bcrypt = require("bcrypt");
// // // // const jwt = require("jsonwebtoken");

// // // // const User = require("../models/userModelDB"); // Import the User model
// // // // const Session = require("../models/sessionModelDB"); // Ensure correct import
// // // // const HomeDetails = require("../models/homeDetailsDB");
// // // // const Message = require("../models/message");

// // // // const { generateToken } = require("../utils/generateToken");
// // // // const { validateToken } = require("../utils/validateToken");
// // // // const { getUserInfo } = require("../utils/getUserInfo");

// // // // app.use(bodyParser.urlencoded({ extended: false }));
// // // // app.use(bodyParser.json());
// // // // app.use(passport.initialize());


// // // // router.get("/users/:userId", (req, res) => {
// // // //   const loggedInUserId = req.params.userId;

// // // //   User.find({ _id: { $ne: loggedInUserId } })
// // // //     .then((users) => {
// // // //       res.status(200).json(users);
// // // //     })
// // // //     .catch((err) => {
// // // //       console.log("Error retrieving users", err);
// // // //       res.status(500).json({ message: "Error retrieving users" });
// // // //     });
// // // // });

// // // // const multer = require("multer");

// // // // // Configure multer for handling file uploads
// // // // const storage = multer.diskStorage({
// // // //   destination: function (req, file, cb) {
// // // //     cb(null, "files/"); // Specify the desired destination folder
// // // //   },
// // // //   filename: function (req, file, cb) {
// // // //     // Generate a unique filename for the uploaded file
// // // //     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
// // // //     cb(null, uniqueSuffix + "-" + file.originalname);
// // // //   },
// // // // });

// // // // const upload = multer({ storage: storage });

// // // // const path = require("path");

// // // // // Serve static files from the "files" directory
// // // // app.use("/files", express.static(path.join(__dirname, "files")));


// // // // app.post("/messages", upload.single("imageFile"), async (req, res) => {
// // // //   try {
// // // //     const { senderId, recepientId, messageType, messageText } = req.body;

// // // //     const imageUrl = messageType === "image" && req.file
// // // //       ? `${req.protocol}://${req.get("host")}/files/${req.file.filename}`
// // // //       : null;

// // // //     const newMessage = new Message({
// // // //       senderId,
// // // //       recepientId,
// // // //       messageType,
// // // //       message: messageText,
// // // //       timestamp: new Date(),
// // // //       imageUrl, // Save the public URL
// // // //     });

// // // //     await newMessage.save();
// // // //     res.status(200).json({ message: "Message sent successfully", data: newMessage });
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).json({ error: "Internal Server Error" });
// // // //   }
// // // // });

// // // // ///endpoint to get the userDetails to design the chat Room header
// // // // app.get("/user/:userId", async (req, res) => {
// // // //   try {
// // // //     const { userId } = req.params;

// // // //     //fetch the user data from the user ID
// // // //     const recepientId = await User.findById(userId);

// // // //     res.json(recepientId);
// // // //   } catch (error) {
// // // //     console.log(error);
// // // //     res.status(500).json({ error: "Internal Server Error" });
// // // //   }
// // // // });

// // // // //endpoint to fetch the messages between two users in the chatRoom
// // // // app.get("/messages/:senderId/:recepientId", async (req, res) => {
// // // //   try {
// // // //     const { senderId, recepientId } = req.params;

// // // //     const messages = await Message.find({
// // // //       $or: [
// // // //         { senderId: senderId, recepientId: recepientId },
// // // //         { senderId: recepientId, recepientId: senderId },
// // // //       ],
// // // //     }).populate("senderId", "_id name");

// // // //     res.json(messages);
// // // //   } catch (error) {
// // // //     console.log(error);
// // // //     res.status(500).json({ error: "Internal Server Error" });
// // // //   }
// // // // });

// // // // //endpoint to delete the messages!
// // // // app.post("/deleteMessages", async (req, res) => {
// // // //   try {
// // // //     const { messages } = req.body;

// // // //     if (!Array.isArray(messages) || messages.length === 0) {
// // // //       return res.status(400).json({ message: "invalid req body!" });
// // // //     }

// // // //     await Message.deleteMany({ _id: { $in: messages } });

// // // //     res.json({ message: "Message deleted successfully" });
// // // //   } catch (error) {
// // // //     console.log(error);
// // // //     res.status(500).json({ error: "Internal Server" });
// // // //   }
// // // // });



// // // // app.get("/friend-requests/sent/:userId",async(req,res) => {
// // // //   try{
// // // //     const {userId} = req.params;
// // // //     const user = await User.findById(userId).populate("sentFriendRequests","name email image").lean();

// // // //     const sentFriendRequests = user.sentFriendRequests;

// // // //     res.json(sentFriendRequests);
// // // //   } catch(error){
// // // //     console.log("error",error);
// // // //     res.status(500).json({ error: "Internal Server" });
// // // //   }
// // // // })

// // // // app.get("/friends/:userId",(req,res) => {
// // // //   try{
// // // //     const {userId} = req.params;

// // // //     User.findById(userId).populate("friends").then((user) => {
// // // //       if(!user){
// // // //         return res.status(404).json({message: "User not found"})
// // // //       }

// // // //       const friendIds = user.friends.map((friend) => friend._id);

// // // //       res.status(200).json(friendIds);
// // // //     })
// // // //   } catch(error){
// // // //     console.log("error",error);
// // // //     res.status(500).json({message:"internal server error"})
// // // //   }
// // // // })


// // // // module.exports = router;














// // // const express = require("express");
// // // const bodyParser = require("body-parser");
// // // const passport = require("passport");
// // // const multer = require("multer");
// // // const path = require("path");
// // // const bcrypt = require("bcrypt");
// // // const jwt = require("jsonwebtoken");

// // // const User = require("../models/userModelDB");
// // // const Session = require("../models/sessionModelDB");
// // // const HomeDetails = require("../models/homeDetailsDB");
// // // const Message = require("../models/message");

// // // const { generateToken } = require("../utils/generateToken");
// // // const { validateToken } = require("../utils/validateToken");
// // // const { getUserInfo } = require("../utils/getUserInfo");

// // // const router = express.Router();

// // // // Middleware for parsing request bodies
// // // router.use(bodyParser.urlencoded({ extended: false }));
// // // router.use(bodyParser.json());
// // // router.use(passport.initialize());

// // // // Configure multer for handling file uploads
// // // const storage = multer.diskStorage({
// // //   destination: function (req, file, cb) {
// // //     cb(null, "files/");
// // //   },
// // //   filename: function (req, file, cb) {
// // //     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
// // //     cb(null, uniqueSuffix + "-" + file.originalname);
// // //   },
// // // });

// // // const upload = multer({ storage: storage });

// // // // Serve static files from the "files" directory
// // // router.use("/files", express.static(path.join(__dirname, "files")));

// // // // Route to fetch users excluding the logged-in user
// // // router.get("/users/:userId", (req, res) => {
// // //   const loggedInUserId = req.params.userId;

// // //   User.find({ _id: { $ne: loggedInUserId } })
// // //     .then((users) => res.status(200).json(users))
// // //     .catch((err) => {
// // //       console.error("Error retrieving users", err);
// // //       res.status(500).json({ message: "Error retrieving users" });
// // //     });
// // // });

// // // // // Route to send a message
// // // // router.post("/messages", upload.single("imageFile"), async (req, res) => {
// // // //   try {
// // // //     const { senderId, recepientId, messageType, messageText } = req.body;

// // // //     const imageUrl =
// // // //       messageType === "image" && req.file
// // // //         ? `${req.protocol}://${req.get("host")}/files/${req.file.filename}`
// // // //         : null;

// // // //     const newMessage = new Message({
// // // //       senderId,
// // // //       recepientId,
// // // //       messageType,
// // // //       message: messageText,
// // // //       timestamp: new Date(),
// // // //       imageUrl,
// // // //     });

// // // //     await newMessage.save();
// // // //     res.status(200).json({ message: "Message sent successfully", data: newMessage });
// // // //   } catch (error) {
// // // //     console.error("Error sending message:", error);
// // // //     res.status(500).json({ error: "Internal Server Error" });
// // // //   }
// // // // });



// // // app.post('/messages', async (req, res) => {
// // //   const { senderId, recepientId, messageType, message, imageUrl } = req.body;
// // //   try {
// // //     const newMessage = new Message({ senderId, recepientId, messageType, message, imageUrl });
// // //     await newMessage.save();
// // //     res.json(newMessage);
// // //   } catch (err) {
// // //     res.status(500).json({ error: 'Error sending message' });
// // //   }
// // // });



// // // // Route to fetch user details
// // // router.get("/user/:userId", async (req, res) => {
// // //   try {
// // //     const { userId } = req.params;

// // //     const recepientId = await User.findById(userId);
// // //     res.json(recepientId);
// // //   } catch (error) {
// // //     console.error("Error fetching user details:", error);
// // //     res.status(500).json({ error: "Internal Server Error" });
// // //   }
// // // });

// // // // // Route to fetch chat messages between two users
// // // // router.get("/messages/:senderId/:recepientId", async (req, res) => {
// // // //   try {
// // // //     const { senderId, recepientId } = req.params;

// // // //     const messages = await Message.find({
// // // //       $or: [
// // // //         { senderId: senderId, recepientId: recepientId },
// // // //         { senderId: recepientId, recepientId: senderId },
// // // //       ],
// // // //     }).populate("senderId", "_id name");

// // // //     res.json(messages);
// // // //   } catch (error) {
// // // //     console.error("Error fetching messages:", error);
// // // //     res.status(500).json({ error: "Internal Server Error" });
// // // //   }
// // // // });




// // app.get('/messages/:senderId/:recipientId', async (req, res) => {
// //   const { senderId, recipientId } = req.params;
// //   try {
// //     const messages = await Message.find({
// //       $or: [
// //         { senderId, recepientId: recipientId },
// //         { senderId: recipientId, recepientId: senderId },
// //       ],
// //     }).sort({ timeStamp: 1 });
// //     res.json(messages);
// //   } catch (err) {
// //     res.status(500).json({ error: 'Error fetching messages' });
// //   }
// // });


// // // // Route to delete messages
// // // router.post("/deleteMessages", async (req, res) => {
// // //   try {
// // //     const { messages } = req.body;

// // //     if (!Array.isArray(messages) || messages.length === 0) {
// // //       return res.status(400).json({ message: "Invalid request body!" });
// // //     }

// // //     await Message.deleteMany({ _id: { $in: messages } });
// // //     res.json({ message: "Messages deleted successfully" });
// // //   } catch (error) {
// // //     console.error("Error deleting messages:", error);
// // //     res.status(500).json({ error: "Internal Server Error" });
// // //   }
// // // });

// // // // // Route to fetch sent friend requests
// // // // router.get("/friend-requests/sent/:userId", async (req, res) => {
// // // //   try {
// // // //     const { userId } = req.params;
// // // //     const user = await User.findById(userId)
// // // //       .populate("sentFriendRequests", "name email image")
// // // //       .lean();

// // // //     res.json(user.sentFriendRequests);
// // // //   } catch (error) {
// // // //     console.error("Error fetching sent friend requests:", error);
// // // //     res.status(500).json({ error: "Internal Server Error" });
// // // //   }
// // // // });

// // // // // Route to fetch friends of a user
// // // // router.get("/friends/:userId", async (req, res) => {
// // // //   try {
// // // //     const { userId } = req.params;

// // // //     const user = await User.findById(userId).populate("friends");
// // // //     if (!user) {
// // // //       return res.status(404).json({ message: "User not found" });
// // // //     }

// // // //     const friendIds = user.friends.map((friend) => friend._id);
// // // //     res.status(200).json(friendIds);
// // // //   } catch (error) {
// // // //     console.error("Error fetching friends:", error);
// // // //     res.status(500).json({ message: "Internal Server Error" });
// // // //   }
// // // // });

// // // module.exports = router;












// // // // const express = require('express');
// // // // const router = express.Router();
// // // // const Message = require('../models/message'); // Your existing Message model
// // // // const multer = require('multer');
// // // // const cloudinary = require('cloudinary').v2;

// // // // // Configure multer for handling file uploads
// // // // const storage = multer.memoryStorage();
// // // // const upload = multer({ 
// // // //   storage,
// // // //   limits: {
// // // //     fileSize: 5 * 1024 * 1024 // 5MB limit
// // // //   }
// // // // });

// // // // // Get all messages between two users
// // // // router.get('/messages', async (req, res) => {
// // // //   try {
// // // //     const { senderId, recipientId } = req.query;

// // // //     const messages = await Message.find({
// // // //       $or: [
// // // //         { senderId, recepientId: recipientId },
// // // //         { senderId: recipientId, recepientId: senderId }
// // // //       ]
// // // //     })
// // // //     .sort({ timeStamp: 1 })
// // // //     .populate('senderId', 'name profilePic') // Assuming you have these fields in User model
// // // //     .populate('recepientId', 'name profilePic');

// // // //     res.json(messages);
// // // //   } catch (error) {
// // // //     console.error('Error fetching messages:', error);
// // // //     res.status(500).json({ error: 'Error fetching messages' });
// // // //   }
// // // // });

// // // // // Send a text message
// // // // router.post('/messages', async (req, res) => {
// // // //   try {
// // // //     const { senderId, recepientId, messageType, message } = req.body;

// // // //     const newMessage = new Message({
// // // //       senderId,
// // // //       recepientId,
// // // //       messageType,
// // // //       message,
// // // //       timeStamp: new Date()
// // // //     });

// // // //     await newMessage.save();

// // // //     // If you're using Socket.io, emit event here
// // // //     // io.to(recepientId).emit('newMessage', newMessage);

// // // //     res.status(201).json(newMessage);
// // // //   } catch (error) {
// // // //     console.error('Error sending message:', error);
// // // //     res.status(500).json({ error: 'Error sending message' });
// // // //   }
// // // // });

// // // // // Upload and send an image message
// // // // router.post('/messages/image', upload.single('image'), async (req, res) => {
// // // //   try {
// // // //     if (!req.file) {
// // // //       return res.status(400).json({ error: 'No image file provided' });
// // // //     }

// // // //     // Convert buffer to base64
// // // //     const b64 = Buffer.from(req.file.buffer).toString('base64');
// // // //     const dataURI = `data:${req.file.mimetype};base64,${b64}`;

// // // //     // Upload to Cloudinary
// // // //     const uploadResponse = await cloudinary.uploader.upload(dataURI, {
// // // //       resource_type: 'auto',
// // // //       folder: 'chat_images'
// // // //     });

// // // //     const { senderId, recepientId } = req.body;

// // // //     const newMessage = new Message({
// // // //       senderId,
// // // //       recepientId,
// // // //       messageType: 'image',
// // // //       imageUrl: uploadResponse.secure_url,
// // // //       timeStamp: new Date()
// // // //     });

// // // //     await newMessage.save();

// // // //     // If you're using Socket.io, emit event here
// // // //     // io.to(recepientId).emit('newMessage', newMessage);

// // // //     res.status(201).json(newMessage);
// // // //   } catch (error) {
// // // //     console.error('Error uploading image:', error);
// // // //     res.status(500).json({ error: 'Error uploading image' });
// // // //   }
// // // // });

// // // // // Delete a message
// // // // router.delete('/messages/:messageId', async (req, res) => {
// // // //   try {
// // // //     const message = await Message.findById(req.params.messageId);
    
// // // //     if (!message) {
// // // //       return res.status(404).json({ error: 'Message not found' });
// // // //     }

// // // //     // Optional: Check if user is authorized to delete this message
// // // //     // if (message.senderId.toString() !== req.user.id) {
// // // //     //   return res.status(403).json({ error: 'Unauthorized' });
// // // //     // }

// // // //     // If it's an image message, delete from Cloudinary
// // // //     if (message.messageType === 'image' && message.imageUrl) {
// // // //       const publicId = message.imageUrl.split('/').pop().split('.')[0];
// // // //       await cloudinary.uploader.destroy(publicId);
// // // //     }

// // // //     await message.deleteOne();
// // // //     res.json({ message: 'Message deleted successfully' });
// // // //   } catch (error) {
// // // //     console.error('Error deleting message:', error);
// // // //     res.status(500).json({ error: 'Error deleting message' });
// // // //   }
// // // // });

// // // // // Get recent conversations
// // // // router.get('/conversations/:userId', async (req, res) => {
// // // //   try {
// // // //     const userId = req.params.userId;

// // // //     // Find all messages where user is either sender or recipient
// // // //     const messages = await Message.find({
// // // //       $or: [
// // // //         { senderId: userId },
// // // //         { recepientId: userId }
// // // //       ]
// // // //     })
// // // //     .sort({ timeStamp: -1 })
// // // //     .populate('senderId', 'name profilePic')
// // // //     .populate('recepientId', 'name profilePic');

// // // //     // Group messages by conversation
// // // //     const conversations = messages.reduce((acc, message) => {
// // // //       const conversationUserId = 
// // // //         message.senderId._id.toString() === userId 
// // // //           ? message.recepientId._id.toString()
// // // //           : message.senderId._id.toString();

// // // //       if (!acc[conversationUserId]) {
// // // //         acc[conversationUserId] = {
// // // //           user: message.senderId._id.toString() === userId 
// // // //             ? message.recepientId 
// // // //             : message.senderId,
// // // //           lastMessage: message,
// // // //           unreadCount: 0 // You can implement this based on your needs
// // // //         };
// // // //       }
// // // //       return acc;
// // // //     }, {});

// // // //     res.json(Object.values(conversations));
// // // //   } catch (error) {
// // // //     console.error('Error fetching conversations:', error);
// // // //     res.status(500).json({ error: 'Error fetching conversations' });
// // // //   }
// // // // });

// // // // module.exports = router;
















// // const express = require("express");
// // const bodyParser = require("body-parser");
// // const passport = require("passport");
// // const multer = require("multer");
// // const path = require("path");
// // const bcrypt = require("bcrypt");
// // const jwt = require("jsonwebtoken");

// // const User = require("../models/userModelDB");
// // const Session = require("../models/sessionModelDB");
// // const HomeDetails = require("../models/homeDetailsDB");
// // const Message = require("../models/message");

// // const { generateToken } = require("../utils/generateToken");
// // const { validateToken } = require("../utils/validateToken");
// // const { getUserInfo } = require("../utils/getUserInfo");

// // const router = express.Router();

// // // Middleware for parsing request bodies
// // router.use(bodyParser.urlencoded({ extended: false }));
// // router.use(bodyParser.json());
// // router.use(passport.initialize());

// // // Configure multer for handling file uploads
// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, "files/");
// //   },
// //   filename: function (req, file, cb) {
// //     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
// //     cb(null, uniqueSuffix + "-" + file.originalname);
// //   },
// // });

// // const upload = multer({ storage: storage });





// // // Route to fetch users excluding the logged-in user
// // router.get("/lol", (req, res) => {
// //       res.status(200).json({ message: "done" });
// // });









// // // Serve static files from the "files" directory
// // router.use("/files", express.static(path.join(__dirname, "files")));

// // // Route to fetch users excluding the logged-in user
// // router.get("/users/:userId", (req, res) => {
// //   const loggedInUserId = req.params.userId;

// //   User.find({ _id: { $ne: loggedInUserId } })
// //     .then((users) => res.status(200).json(users))
// //     .catch((err) => {
// //       console.error("Error retrieving users", err);
// //       res.status(500).json({ message: "Error retrieving users" });
// //     });
// // });






// // // Enhanced message sending route with image support
// // router.post("/messages", upload.single("imageFile"), async (req, res) => {
// //   try {
// //     const { senderId, recepientId, messageType, message } = req.body;

// //     const newMessage = new Message({
// //       senderId,
// //       recepientId,
// //       messageType,
// //       message: messageType === 'text' ? message : '',
// //       imageUrl: messageType === 'image' && req.file 
// //         ? `${req.protocol}://${req.get("host")}/files/${req.file.filename}`
// //         : null,
// //       timeStamp: new Date()
// //     });

// //     await newMessage.save();

// //     // Populate sender information
// //     const populatedMessage = await Message.findById(newMessage._id)
// //       .populate('senderId', 'name profilePic')
// //       .populate('recepientId', 'name profilePic');

// //     res.status(200).json(populatedMessage);
// //   } catch (error) {
// //     console.error("Error sending message:", error);
// //     res.status(500).json({ error: "Error sending message" });
// //   }
// // });

// // // Enhanced route to fetch messages between users with pagination
// // router.get("/messages/:senderId/:recepientId", async (req, res) => {
// //   try {
// //     const { senderId, recepientId } = req.params;
// //     const page = parseInt(req.query.page) || 1;
// //     const limit = parseInt(req.query.limit) || 50;
// //     const skip = (page - 1) * limit;

// //     const messages = await Message.find({
// //       $or: [
// //         { senderId, recepientId },
// //         { senderId: recepientId, recepientId: senderId }
// //       ]
// //     })
// //     .sort({ timeStamp: -1 })
// //     .skip(skip)
// //     .limit(limit)
// //     .populate('senderId', 'name profilePic')
// //     .populate('recepientId', 'name profilePic');

// //     const totalMessages = await Message.countDocuments({
// //       $or: [
// //         { senderId, recepientId },
// //         { senderId: recepientId, recepientId: senderId }
// //       ]
// //     });

// //     res.json({
// //       messages: messages.reverse(),
// //       currentPage: page,
// //       totalPages: Math.ceil(totalMessages / limit),
// //       totalMessages
// //     });
// //   } catch (error) {
// //     console.error("Error fetching messages:", error);
// //     res.status(500).json({ error: "Error fetching messages" });
// //   }
// // });

// // // Route to get recent conversations
// // router.get("/conversations/:userId", async (req, res) => {
// //   try {
// //     const userId = req.params.userId;

// //     // Find the last message from each conversation
// //     const conversations = await Message.aggregate([
// //       {
// //         $match: {
// //           $or: [{ senderId: userId }, { recepientId: userId }]
// //         }
// //       },
// //       {
// //         $sort: { timeStamp: -1 }
// //       },
// //       {
// //         $group: {
// //           _id: {
// //             $cond: {
// //               if: { $eq: ["$senderId", userId] },
// //               then: "$recepientId",
// //               else: "$senderId"
// //             }
// //           },
// //           lastMessage: { $first: "$$ROOT" },
// //           unreadCount: {
// //             $sum: {
// //               $cond: [
// //                 { 
// //                   $and: [
// //                     { $eq: ["$recepientId", userId] },
// //                     { $eq: ["$read", false] }
// //                   ]
// //                 },
// //                 1,
// //                 0
// //               ]
// //             }
// //           }
// //         }
// //       },
// //       {
// //         $lookup: {
// //           from: "users",
// //           localField: "_id",
// //           foreignField: "_id",
// //           as: "userDetails"
// //         }
// //       },
// //       {
// //         $unwind: "$userDetails"
// //       }
// //     ]);

// //     res.json(conversations);
// //   } catch (error) {
// //     console.error("Error fetching conversations:", error);
// //     res.status(500).json({ error: "Error fetching conversations" });
// //   }
// // });

// // // Route to mark messages as read
// // router.put("/messages/read", async (req, res) => {
// //   try {
// //     const { senderId, recepientId } = req.body;

// //     await Message.updateMany(
// //       {
// //         senderId,
// //         recepientId,
// //         read: false
// //       },
// //       {
// //         $set: { read: true }
// //       }
// //     );

// //     res.json({ message: "Messages marked as read" });
// //   } catch (error) {
// //     console.error("Error marking messages as read:", error);
// //     res.status(500).json({ error: "Error marking messages as read" });
// //   }
// // });

// // // Enhanced route to delete messages
// // router.delete("/messages", async (req, res) => {
// //   try {
// //     const { messageIds, userId } = req.body;

// //     if (!Array.isArray(messageIds) || messageIds.length === 0) {
// //       return res.status(400).json({ error: "Invalid message IDs" });
// //     }

// //     // Only delete messages if the user is either the sender or recipient
// //     const deletedMessages = await Message.deleteMany({
// //       _id: { $in: messageIds },
// //       $or: [{ senderId: userId }, { recepientId: userId }]
// //     });

// //     if (deletedMessages.deletedCount === 0) {
// //       return res.status(404).json({ error: "No messages found or unauthorized" });
// //     }

// //     res.json({
// //       message: "Messages deleted successfully",
// //       count: deletedMessages.deletedCount
// //     });
// //   } catch (error) {
// //     console.error("Error deleting messages:", error);
// //     res.status(500).json({ error: "Error deleting messages" });
// //   }
// // });

// // // Route to fetch user details
// // router.get("/user/:userId", async (req, res) => {
// //   try {
// //     const { userId } = req.params;
// //     const user = await User.findById(userId).select('-password');
    
// //     if (!user) {
// //       return res.status(404).json({ error: "User not found" });
// //     }
    
// //     res.json(user);
// //   } catch (error) {
// //     console.error("Error fetching user details:", error);
// //     res.status(500).json({ error: "Error fetching user details" });
// //   }
// // });

// // module.exports = router;












// const express = require("express");
// const multer = require("multer");
// const path = require("path");
// const router = express.Router();

// const User = require("../models/userModelDB");
// const Message = require("../models/message");
// const mongoose = require('mongoose');
// // Configure multer for handling file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "files/");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, uniqueSuffix + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });


// // router.get("/lol", (req, res) => {
// //   res.status(200).json({ message: "done" });
// // });

// // Serve static files from the "files" directory
// router.use("/files", express.static(path.join(__dirname, "files")));

// // Route to fetch users excluding the logged-in user
// router.get("/users/:userId", (req, res) => {
//   const loggedInUserId = req.params.userId;

//   User.find({ _id: { $ne: loggedInUserId } })
//     .then((users) => res.status(200).json(users))
//     .catch((err) => {
//       console.error("Error retrieving users", err);
//       res.status(500).json({ message: "Error retrieving users" });
//     });
// });

// // Enhanced message sending route with image support
// router.post("/messages", upload.single("imageFile"), async (req, res) => {
//   try {
//     const { senderId, recepientId, messageType, message } = req.body;

//     console.log(req.body);

//     const newMessage = new Message({
//       senderId,
//       recepientId,
//       messageType,
//       message: messageType === 'text' ? message : '',
//       imageUrl: messageType === 'image' && req.file 
//         ? `${req.protocol}://${req.get("host")}/files/${req.file.filename}`
//         : null,
//       timeStamp: new Date()
//     });

//     await newMessage.save();

//     // Populate sender information
//     const populatedMessage = await Message.findById(newMessage._id)
//     //   .populate('senderId', 'name profilePic')
//     //   .populate('recepientId', 'name profilePic');


//     .populate('senderId', 'name profilePic', 'userInfoCollections')
//     .populate('recepientId', 'name profilePic', 'userInfoCollections');


//     res.status(200).json(populatedMessage);
//   } catch (error) {
//     console.error("Error sending message:", error);
//     res.status(500).json({ error: "Error sending message" });
//   }
// });


// router.get('/messages/:senderId/:recipientId', async (req, res) => {
//   // console.log("hit the endpoint!")
//   const { senderId, recipientId } = req.params;
//   try {
//     const messages = await Message.find({
//       $or: [
//         { senderId, recepientId: recipientId },
//         { senderId: recipientId, recepientId: senderId },
//       ],
//     }).sort({ timeStamp: 1 });
//     res.json(messages);
//   } catch (err) {
//     res.status(500).json({ error: 'Error fetching messages' });
//   }
// });


// // // Route to fetch messages between users
// // router.get("/messages/:senderId/:recepientId", async (req, res) => {
// //   try {
// //     const { senderId, recepientId } = req.params;

// //     const messages = await Message.find({
// //       $or: [
// //         { senderId, recepientId },
// //         { senderId: recepientId, recepientId: senderId }
// //       ]
// //     })
// //     .sort({ timeStamp: 1 })
// //     .populate('senderId', 'name profilePic')
// //     .populate('recepientId', 'name profilePic');

// //     res.json(messages);
// //   } catch (error) {
// //     console.error("Error fetching messages:", error);
// //     res.status(500).json({ error: "Error fetching messages" });
// //   }
// // });

// // Route to get recent conversations
// router.get("/conversations/:userId", async (req, res) => {
//   try {
//     const userId = req.params.userId;

//     const messages = await Message.find({
//       $or: [{ senderId: userId }, { recepientId: userId }]
//     })
//     .sort({ timeStamp: -1 })
//     .populate('senderId', 'name profilePic')
//     .populate('recepientId', 'name profilePic');

//     // Group messages by conversation
//     const conversations = {};
//     messages.forEach(message => {
//       const otherUserId = message.senderId._id.toString() === userId 
//         ? message.recepientId._id.toString() 
//         : message.senderId._id.toString();

//       if (!conversations[otherUserId]) {
//         conversations[otherUserId] = {
//           user: message.senderId._id.toString() === userId 
//             ? message.recepientId 
//             : message.senderId,
//           lastMessage: message
//         };
//       }
//     });

//     res.json(Object.values(conversations));
//   } catch (error) {
//     console.error("Error fetching conversations:", error);
//     res.status(500).json({ error: "Error fetching conversations" });
//   }
// });

// // Route to delete messages
// router.delete("/messages", async (req, res) => {
//   try {
//     const { messageIds } = req.body;

//     if (!Array.isArray(messageIds) || messageIds.length === 0) {
//       return res.status(400).json({ error: "Invalid message IDs" });
//     }

//     const deletedMessages = await Message.deleteMany({
//       _id: { $in: messageIds }
//     });

//     res.json({
//       message: "Messages deleted successfully",
//       count: deletedMessages.deletedCount
//     });
//   } catch (error) {
//     console.error("Error deleting messages:", error);
//     res.status(500).json({ error: "Error deleting messages" });
//   }
// });

// // Route to fetch user details
// router.get("/user/:userId", async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const user = await User.findById(userId);
    
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }
    
//     res.json(user);
//   } catch (error) {
//     console.error("Error fetching user details:", error);
//     res.status(500).json({ error: "Error fetching user details" });
//   }
// });

// module.exports = router;

const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();


const User = require("../models/userModelDB");
const Message = require("../models/message");
const mongoose = require('mongoose');

// Configure multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "files/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });


// router.get("/lol", (req, res) => {
//   res.status(200).json({ message: "done" });
// });

// Serve static files from the "files" directory
// router.use("/files", express.static(path.join(__dirname, "files")));

// Debug middleware
router.use((req, res, next) => {
  // console.log('Message Route Hit:', req.method, req.originalUrl);
  next();
});

// Route to fetch users excluding the logged-in user
router.get("/users/:userId", (req, res) => {
  const loggedInUserId = req.params.userId;

  User.find({ _id: { $ne: loggedInUserId } })
    .then((users) => res.status(200).json(users))
    .catch((err) => {
      console.error("Error retrieving users", err);
      res.status(500).json({ message: "Error retrieving users" });
    });
});

// Enhanced message sending route with image support
// router.post("/", upload.single("imageFile"), async (req, res) => {
//   try {
//     const { senderId, recepientId, messageType, message } = req.body;

//     console.log(req.body);

//     const newMessage = new Message({
//       senderId,
//       recepientId,
//       messageType,
//       message: messageType === 'text' ? message : '',
//       imageUrl: messageType === 'image' && req.file 
//         ? `${req.protocol}://${req.get("host")}/files/${req.file.filename}`
//         : null,
//       timeStamp: new Date()
//     });

//     await newMessage.save();

//     // Populate sender information
//     const populatedMessage = await Message.findById(newMessage._id)
//     //   .populate('senderId', 'name profilePic')
//     //   .populate('recepientId', 'name profilePic');


//     .populate('senderId', 'name profilePic', 'userInfoCollections')
//     .populate('recepientId', 'name profilePic', 'userInfoCollections');


//     res.status(200).json(populatedMessage);
//   } catch (error) {
//     console.error("Error sending message:", error);
//     res.status(500).json({ error: "Error sending message" });
//   }
// });
router.post('/', upload.none(), async (req, res) => {
  const { senderId, recepientId, messageType, message, base64Image } = req.body;
  console.log('Sending message:', { senderId, recepientId, messageType, message });

  try {
    const newMessage = new Message({
      senderId,
      recepientId,
      messageType,
      message: messageType === 'text' ? message : '',
      imageUrl: messageType === 'image' ? base64Image : null,
      timeStamp: new Date()
    });

    await newMessage.save();

    const populatedMessage = await Message.findById(newMessage._id)
      .populate('senderId', 'name profileImage')
      .populate('recepientId', 'name profileImage');

    res.status(200).json(populatedMessage);
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Error sending message', details: error.message });
  }
});

router.get('/:senderId/:recipientId', async (req, res) => {
  const { senderId, recipientId } = req.params;
  console.log('Fetching messages:', { senderId, recipientId });
  
  try {
    const messages = await Message.find({
      $or: [
        { senderId, recepientId: recipientId },
        { senderId: recipientId, recepientId: senderId }
      ]
    }).sort({ timeStamp: 1 });
    
    console.log(`Found ${messages.length} messages`);
    res.json(messages);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Error fetching messages' });
  }
});


// // Route to fetch messages between users
// router.get("/messages/:senderId/:recepientId", async (req, res) => {
//   try {
//     const { senderId, recepientId } = req.params;

//     const messages = await Message.find({
//       $or: [
//         { senderId, recepientId },
//         { senderId: recepientId, recepientId: senderId }
//       ]
//     })
//     .sort({ timeStamp: 1 })
//     .populate('senderId', 'name profilePic')
//     .populate('recepientId', 'name profilePic');

//     res.json(messages);
//   } catch (error) {
//     console.error("Error fetching messages:", error);
//     res.status(500).json({ error: "Error fetching messages" });
//   }
// });

// Route to get recent conversations
router.get("/conversations/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const messages = await Message.find({
      $or: [{ senderId: userId }, { recepientId: userId }]
    })
    .sort({ timeStamp: -1 })
    .populate('senderId', 'name profilePic')
    .populate('recepientId', 'name profilePic');

    // Group messages by conversation
    const conversations = {};
    messages.forEach(message => {
      const otherUserId = message.senderId._id.toString() === userId 
        ? message.recepientId._id.toString() 
        : message.senderId._id.toString();

      if (!conversations[otherUserId]) {
        conversations[otherUserId] = {
          user: message.senderId._id.toString() === userId 
            ? message.recepientId 
            : message.senderId,
          lastMessage: message
        };
      }
    });

    res.json(Object.values(conversations));
  } catch (error) {
    console.error("Error fetching conversations:", error);
    res.status(500).json({ error: "Error fetching conversations" });
  }
});

// Fetch a single message by ID
router.get('/:id', async (req, res) => {
  try {
    const messageId = req.params.id;
    const message = await Message.findById(messageId);
    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }
    res.json(message);
  } catch (error) {
    console.error('Error fetching message:', error);
    res.status(500).json({ error: 'Error fetching messages' });
  }
});

// Route to delete messages
// router.delete("/", async (req, res) => {
//   try {
//     const { messageIds } = req.body;

//     if (!Array.isArray(messageIds) || messageIds.length === 0) {
//       return res.status(400).json({ error: "Invalid message IDs" });
//     }

//     const deletedMessages = await Message.deleteMany({
//       _id: { $in: messageIds }
//     });

//     res.json({
//       message: "Messages deleted successfully",
//       count: deletedMessages.deletedCount
//     });
//   } catch (error) {
//     console.error("Error deleting messages:", error);
//     res.status(500).json({ error: "Error deleting messages" });
//   }
// });

// router.delete("/", async (req, res) => {
//   try {
//     console.log("Received request to delete messages:", req.body); // Log request body

//     const { messageIds } = req.body;
//     if (!Array.isArray(messageIds) || messageIds.length === 0) {
//       console.log("Invalid message IDs received");
//       return res.status(400).json({ error: "Invalid message IDs" });
//     }

//     console.log("Attempting to delete messages with IDs:", messageIds);

//     const deletedMessages = await Message.deleteMany({
//       _id: { $in: messageIds.map(id => mongoose.Types.ObjectId(id)) },
//     });
    

//     console.log("Deletion result:", deletedMessages);

//     if (deletedMessages.deletedCount === 0) {
//       return res.status(404).json({ error: "No messages found to delete" });
//     }

//     res.json({
//       message: "Messages deleted successfully",
//       count: deletedMessages.deletedCount,
//     });
//   } catch (error) {
//     console.error("Error deleting messages:", error);
//     res.status(500).json({ error: "Error deleting messages" });
//   }
// });

router.delete("/", async (req, res) => {
  try {
    console.log("Received request to delete messages:", req.query); // Log query parameters

    const messageIds = req.query.messageIds; // Directly access the array

    if (!Array.isArray(messageIds) || messageIds.length === 0) {
      console.log("Invalid message IDs received");
      return res.status(400).json({ error: "Invalid message IDs" });
    }

    console.log("Attempting to delete messages with IDs:", messageIds);

    const deletedMessages = await Message.deleteMany({
      _id: { $in: messageIds.map(id => new mongoose.Types.ObjectId(id)) }, // Correct usage
    });

    console.log("Deletion result:", deletedMessages);

    if (deletedMessages.deletedCount === 0) {
      return res.status(404).json({ error: "No messages found to delete" });
    }

    res.json({
      message: "Messages deleted successfully",
      count: deletedMessages.deletedCount,
    });
  } catch (error) {
    console.error("Error deleting messages:", error);
    res.status(500).json({ error: "Error deleting messages" });
  }
});



// Route to fetch user details
// router.get("/users/:userId", async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const user = await User.findById(userId);
    
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }
    
//     res.json(user);
//   } catch (error) {
//     console.error("Error fetching user details:", error);
//     res.status(500).json({ error: "Error fetching user details" });
//   }
// });

router.get('/messages/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id); // Find user by ID
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    // res.json(user); // Return the user object
    res.json({
      name: user.name || 'Unknown User',
      profileImage: user.profileImage || 'https://via.placeholder.com/50',
    });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Error fetching user data' });
  }
});


module.exports = router;