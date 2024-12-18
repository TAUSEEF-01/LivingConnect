const mongoose = require("mongoose");

async function connectMongoDB(url) {
  mongoose
    // .connect("mongodb://localhost:27017/UserInfo")
    // mongoose.connect("mongodb+srv://thebest:oDgT53RnQtXgolkb@cluster0.ab0nk.mongodb.net/LoginSignup?retryWrites=true&w=majority&appName=Cluster0")
    .connect(url)
    .then(() => {
      console.log("MongoDB Connected Succesfully!");
    })
    .catch((err) => {
      console.error("Failed to Connect:", err.message);
    });
}

module.exports = {
  connectMongoDB,
};
