const mongoose = require("mongoose");

const UserDetailSchema = new mongoose.Schema(
  {
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }, 
    token: { 
      type: String
   }
  }, {
    timestamps: true
  },
);

const collection = new mongoose.model("userCollections", UserDetailSchema);

module.exports=collection