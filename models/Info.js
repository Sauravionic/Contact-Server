import mongoose from "mongoose";
const InfoSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: false,
    },
    email:{
        type: String,
        required: true,
        unique: false,
    },
    phoneNo:{
        type: String,
        required: true,
        unique: false,
    },
    description: {
        type: String,
        required: true,
        unique: false,
    },
    message: {
        type: String,
        required: true,
        unique: false,
    },
    category: {
        type: String,
        default: "Friend",
        required: false,
        unique: false,
    }
  }, { timestamps: true});
  
  export default mongoose.model("Info", InfoSchema)