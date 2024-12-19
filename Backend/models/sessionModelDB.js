// const mongoose = require("mongoose");

// const sessionSchema = new mongoose.Schema({
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     token: { type: String, required: true },
//     createdAt: { type: Date, default: Date.now, expires: "2h" } // Automatically delete after 2 hours
//   });
  

// const YourSessionModel = mongoose.model("Session", sessionSchema);
// module.exports = YourSessionModel;



const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  token: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now, expires: "2h" } // Expires in 2 hours
  createdAt: { type: Date, default: Date.now } // No expiration
});

const Session = mongoose.model("Session", sessionSchema);
module.exports = Session;
