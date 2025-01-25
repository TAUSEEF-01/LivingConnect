const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();

const User = require("../models/userModelDB");
const Message = require("../models/message");
const mongoose = require("mongoose");

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

// router.get("/messagehistory/conversations/:userId", async (req, res) => {
//   const userId = req.params.userId;
//   // const userId = req.query.userId;

//   console.log("Received Id of the user:", userId);

//   // Validate the userId
//   if (!mongoose.Types.ObjectId.isValid(userId)) {
//     return res.status(400).json({ error: "Invalid userId" });
//   }

//   try {
//     // Find all messages where the user is either the sender or the recipient
//     const messages = await Message.find({
//       $or: [
//         { senderId: userId },
//         { recepientId: userId }
//       ]
//     })
//     console.log("Messages:", messages);
//       // .populate("senderId", "name email") // Populate sender details
//       // .populate("recepientId", "name email"); // Populate recipient details
//       // .sort({ timeStamp: 1 }); // Sort messages by timestamp in ascending order

//     res.status(200).json(messages);
//   } catch (err) {
//     console.error("Error retrieving conversations", err);
//     res.status(500).json({ message: "Error retrieving conversations" });
//   }
// });

router.get("/messagehistory/conversations/:userId", async (req, res) => {
  const userId = req.params.userId;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: "Invalid userId" });
  }

  console.log("Fetching messages for userId:", userId);

  try {
    const recentMessages = await Message.aggregate([
      {
        $match: {
          $or: [
            { senderId: new mongoose.Types.ObjectId(userId) },
            { recipientId: new mongoose.Types.ObjectId(userId) },
          ],
        },
      },
      {
        $sort: { timeStamp: -1 }, // Sort messages by timestamp in descending order
      },
      {
        $group: {
          _id: {
            pair: {
              $cond: [
                { $lt: ["$senderId", "$recipientId"] },
                { sender: "$senderId", recipient: "$recipientId" },
                { sender: "$recipientId", recipient: "$senderId" },
              ],
            },
          },
          latestMessage: { $first: "$$ROOT" }, // Take the first (latest) message in each group
        },
      },
      {
        $replaceRoot: { newRoot: "$latestMessage" }, // Flatten the result
      },
    ]);

    // Collect all unique user IDs for sender and recipient
    const userIds = [
      ...new Set(
        recentMessages.flatMap((message) => [
          message.senderId,
          message.recipientId,
        ])
      ),
    ];

    // Fetch user details for all involved users in one go
    const users = await User.find(
      { _id: { $in: userIds } },
      "name profileImage"
    ).lean();
    const userMap = users.reduce((acc, user) => {
      acc[user._id] = user;
      return acc;
    }, {});

    // Enrich messages with sender and recipient details
    const enrichedMessages = recentMessages.map((message) => ({
      ...message,
      sender: userMap[message.senderId],
      recipient: userMap[message.recipientId],
    }));

    res.status(200).json(enrichedMessages);
  } catch (error) {
    console.error("Error fetching recent messages:", error);
    res.status(500).json({ error: "Error retrieving recent messages" });
  }
});

//this one works correctly
// router.get("/messagehistory/conversations/:userId", async (req, res) => {
//   const userId = req.params.userId;

//   if (!mongoose.Types.ObjectId.isValid(userId)) {
//     return res.status(400).json({ error: "Invalid userId" });
//   }

//   console.log("Fetching messages for userId:", userId);

//   try {
//     const recentMessages = await Message.aggregate([
//       {
//         $match: {
//           $or: [
//             { senderId: new mongoose.Types.ObjectId(userId) },
//             { recipientId: new mongoose.Types.ObjectId(userId) },
//           ],
//         },
//       },
//       {
//         $sort: { timeStamp: -1 }, // Sort messages by timestamp in descending order
//       },
//       {
//         $group: {
//           _id: {
//             pair: {
//               $cond: [
//                 { $lt: ["$senderId", "$recipientId"] },
//                 { sender: "$recipientId", recipient: "$senderId" },
//                 { sender: "$senderId", recipient: "$recipientId" },

//               ],
//             },
//           },
//           latestMessage: { $first: "$$ROOT" }, // Take the first (latest) message in each group
//         },
//       },
//       {
//         $replaceRoot: { newRoot: "$latestMessage" }, // Flatten the result
//       },
//     ]);

//     const enrichedMessages = await Promise.all(
//       recentMessages.map(async (message) => {
//         const sender = await User.findById(message.senderId, "name profileImage").lean();
//         const recipient = await User.findById(message.recipientId, "name profileImage").lean();

//         return {
//           ...message,
//           sender,
//           recipient,
//         };
//       })
//     );

//     res.status(200).json(enrichedMessages);
//   } catch (error) {
//     console.error("Error fetching recent messages:", error);
//     res.status(500).json({ error: "Error retrieving recent messages" });
//   }
// });

// router.get("/messagehistory/conversations/:userId", async (req, res) => {
//   const userId = req.params.userId;

//   if (!mongoose.Types.ObjectId.isValid(userId)) {
//     return res.status(400).json({ error: "Invalid userId" });
//   }

//   try {
//     const recentMessages = await Message.aggregate([
//       {
//         $match: {
//           $or: [
//             { senderId: new mongoose.Types.ObjectId(userId) },
//             { recipientId: new mongoose.Types.ObjectId(userId) }
//           ]
//         }
//       },
//       {
//         $sort: { timeStamp: -1 }
//       },
//       {
//         $group: {
//           _id: {
//             $cond: {
//               if: { $eq: ["$senderId", new mongoose.Types.ObjectId(userId)] },
//               then: "$recipientId",
//               else: "$senderId"
//             }
//           },
//           latestMessage: { $first: "$$ROOT" }
//         }
//       },
//       {
//         $lookup: {
//           from: "User",
//           localField: "_id",
//           foreignField: "_id",
//           as: "otherUser"
//         }
//       },
//       {
//         $unwind: "$otherUser"
//       },
//       {
//         $project: {
//           _id: "$latestMessage._id",
//           senderId: "$latestMessage.senderId",
//           recipientId: "$latestMessage.recipientId",
//           message: "$latestMessage.message",
//           messageType: "$latestMessage.messageType",
//           timeStamp: "$latestMessage.timeStamp",
//           otherUser: {
//             _id: "$otherUser._id",
//             name: "$otherUser.name",
//             profileImage: "$otherUser.profileImage"
//           },
//           lastMessage: {
//             $cond: {
//               if: { $eq: ["$latestMessage.messageType", "text"] },
//               then: "$latestMessage.message",
//               else: "[Image]"
//             }
//           }
//         }
//       }
//     ]);

//     res.status(200).json(recentMessages);
//   } catch (error) {
//     console.error("Error fetching recent messages:", error);
//     res.status(500).json({ error: "Error retrieving recent messages" });
//   }
// });

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
router.post("/", upload.none(), async (req, res) => {
  const { senderId, recepientId, messageType, message, base64Image } = req.body;
  console.log("Sending message:", {
    senderId,
    recepientId,
    messageType,
    message,
  });

  try {
    const newMessage = new Message({
      senderId,
      recepientId,
      messageType,
      message: messageType === "text" ? message : "",
      imageUrl: messageType === "image" ? base64Image : null,
      timeStamp: new Date(),
    });

    await newMessage.save();

    const populatedMessage = await Message.findById(newMessage._id)
      .populate("senderId", "name profileImage")
      .populate("recepientId", "name profileImage");

    res.status(200).json(populatedMessage);
  } catch (error) {
    console.error("Error sending message:", error);
    res
      .status(500)
      .json({ error: "Error sending message", details: error.message });
  }
});

router.get("/:senderId/:recipientId", async (req, res) => {
  const { senderId, recipientId } = req.params;
  console.log("Fetching messages:", { senderId, recipientId });

  try {
    const messages = await Message.find({
      $or: [
        { senderId, recepientId: recipientId },
        { senderId: recipientId, recepientId: senderId },
      ],
    }).sort({ timeStamp: 1 });

    console.log(`Found ${messages.length} messages`);
    res.json(messages);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Error fetching messages" });
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
// router.get("/conversations/:userId", async (req, res) => {
//   try {
//     const userId = req.params.userId;

//     const messages = await Message.find({
//       $or: [{ senderId: userId }, { recepientId: userId }],
//     })
//       .sort({ timeStamp: -1 })
//       .populate("senderId", "name profilePic")
//       .populate("recepientId", "name profilePic");

//     // Group messages by conversation
//     const conversations = {};
//     messages.forEach((message) => {
//       const otherUserId =
//         message.senderId._id.toString() === userId
//           ? message.recepientId._id.toString()
//           : message.senderId._id.toString();

//       if (!conversations[otherUserId]) {
//         conversations[otherUserId] = {
//           user:
//             message.senderId._id.toString() === userId
//               ? message.recepientId
//               : message.senderId,
//           lastMessage: message,
//         };
//       }
//     });

//     res.json(Object.values(conversations));
//   } catch (error) {
//     console.error("Error fetching conversations:", error);
//     res.status(500).json({ error: "Error fetching conversations" });
//   }
// });

// Fetch a single message by ID
router.get("/:id", async (req, res) => {
  try {
    const messageId = req.params.id;
    const message = await Message.findById(messageId);
    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }
    res.json(message);
  } catch (error) {
    console.error("Error fetching message:", error);
    res.status(500).json({ error: "Error fetching messages" });
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
      _id: { $in: messageIds.map((id) => new mongoose.Types.ObjectId(id)) }, // Correct usage
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

router.get("/messages/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id); // Find user by ID
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    // res.json(user); // Return the user object
    res.json({
      name: user.name || "Unknown User",
      profileImage: user.profileImage || "http://via.placeholder.com/50",
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Error fetching user data" });
  }
});

// Fetch user conversations

// router.get("/conversations/:userId", async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     try {
//       const userId = req.params.userId;

//       // Check if userId is a valid MongoDB ObjectId
//       if (!mongoose.Types.ObjectId.isValid(userId)) {
//         return res.status(400).json({ error: "Invalid userId" });
//       }

//       // Fetch messages (continue existing logic here)...
//     } catch (error) {
//       console.error("Error fetching conversations:", error);
//       res
//         .status(500)
//         .json({ error: "Error fetching messages", details: error.message });
//     }
//     // Fetch all messages where the user is either the sender or recipient
//     const messages = await Message.find({
//       $or: [{ senderId: userId }, { recepientId: userId }],
//     })
//       .sort({ timeStamp: -1 })
//       .populate("senderId", "name profileImage")
//       .populate("recepientId", "name profileImage");
//       console.log(messages);
//     // Create a map of conversations grouped by the other user
//     const conversations = {};
//     messages.forEach((message) => {
//       const otherUserId =
//         message.senderId._id.toString() === userId
//           ? message.recepientId._id.toString()
//           : message.senderId._id.toString();

//       if (!conversations[otherUserId]) {
//         conversations[otherUserId] = {
//           user:
//             message.senderId._id.toString() === userId
//               ? message.recepientId
//               : message.senderId,
//           messages: [],
//         };
//       }

//       conversations[otherUserId].messages.push(message);
//     });

//     const result = Object.values(conversations).map((conversation) => ({
//       user: conversation.user,
//       messages: conversation.messages.reverse(),
//     }));

//     res.json(result);
//   } catch (error) {
//     console.error("Error fetching conversations:", error); // Log full error
//     res
//       .status(500)
//       .json({ error: "Error fetching messages", details: error.message });
//   }
// });

module.exports = router;
