import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
  
    fullName: {
      type: String,
      required: true,
    },
      email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
      maxlength:10,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,

    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
