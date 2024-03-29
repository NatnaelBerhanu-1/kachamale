import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      default: "NE",
    },
    profile: {
      type: String,
      default:
        "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
    },
    userName: {
      type: String,
      unique: true,
      default: "NE",
    },
    role: {
      type: String,
      enum: ["SELLER", "ADMIN"],
      default: "SELLER",
    },
    email: {
      type: String,
      required: true,
      default: "NE",
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models?.User || mongoose.model("User", userSchema);
