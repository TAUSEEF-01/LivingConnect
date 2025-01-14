// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/UserInfo")
// // mongoose.connect("mongodb+srv://thebest:oDgT53RnQtXgolkb@cluster0.ab0nk.mongodb.net/LoginSignup?retryWrites=true&w=majority&appName=Cluster0")
// .then(()=>{
//     console.log("MongoDB Connected Succesfully!");
// })
// .catch((err) => {
//     console.error("Failed to Connect:", err.message);
// });

// const UserDetailSchema = new mongoose.Schema(
//   {
//     // name: String,
//     // username: String,
//     // email: String,
//     // phone: String,

//     // name:{
//     //     type:String,
//     //     required:true,
//     // },
//     // username:{
//     //     type:String,
//     //     required:true,
//     //     unique:true
//     // },
//     email:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     password:{
//         type:String,
//         required:true
//     },
//     // phone:{
//     //     type:String,
//     //     required:true
//     // },
//   },
// //   {
// //     collection: "UserInfo",
// //   }
// );

// const collection = new mongoose.model("userCollections", UserDetailSchema);

// module.exports=collection

// const mongoose=require('mongoose')

// mongoose.connect("mongodb://localhost:27017/UserInfo")
// // mongoose.connect("mongodb+srv://thebest:oDgT53RnQtXgolkb@cluster0.ab0nk.mongodb.net/LoginSignup?retryWrites=true&w=majority&appName=Cluster0")
// .then(()=>{
//     console.log("MongoDB Connected Successfully!");
// })
// .catch((err) => {
//     console.error("Failed to Connect:", err.message);
// });

// const LogInSchema=new mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     }
// })

// // const collection=new mongoose.model("userinfocollection",LogInSchema)
// // const collection = new mongoose.model("LogInCollection", LogInSchema);
// // const collection = new mongoose.model("userCollections", LogInSchema);

// module.exports=collection

const mongoose = require("mongoose");

const UserDetailSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: null, // Default value set to null
    },
    contactNumber: {
      type: String,
      default: null, // Default value set to null
    },
    profileImage: {
           type: String,
      default: null, // Default value set to null
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const collection = mongoose.model("userInfoCollections", UserDetailSchema);

module.exports = collection;
