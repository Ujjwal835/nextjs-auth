import { verify } from "crypto";
import mongoose from "mongoose";
import { type } from "os";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please Provide a User Name"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please Provide a Email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Provide a Provide"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  VerifyTokenExpiry: Date,
});
const User = mongoose.models.users || mongoose.model("users", UserSchema);

export default User;
