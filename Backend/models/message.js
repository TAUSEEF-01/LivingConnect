// const mongoose = require("mongoose");

// const messageSchema = new mongoose.Schema({
//   senderId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//   },
//   recepientId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//   },
//   messageType: {
//     type: String,
//     enum: ["text", "image"],
//   },
//   message: String,
//   imageUrl: String,
//   timeStamp: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Message = mongoose.model('Message',messageSchema);

// module.exports = Message;







const mongoose = require("mongoose");
const User = require('./userModelDB');  // Adjust the path accordingly

const messageSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userInfoCollections",
    required: true
  },
  recepientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userInfoCollections",
    required: true
  },
  messageType: {
    type: String,
    enum: ["text", "image"],
    required: true
  },
  // message: String,
  // imageUrl: String,
  message: { type: String },
  imageUrl: { type: String },
  timeStamp: {
    type: Date,
    default: Date.now
  },
  read: {
    type: Boolean,
    default: false
  }
});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;