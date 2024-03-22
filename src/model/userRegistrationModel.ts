import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      unique: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    isOtpValidate: {
      type: Boolean,
      default: false,
    },
    agreedToPolicyAndTerms: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models?.User || mongoose.model("User", userSchema);
