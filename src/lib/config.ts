"use server";
import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URI!);
    console.log("mongodb connected");
  } catch (error: any) {
    console.log(error);
    throw new Error("Error occurred in mongodb", error);
  }
};

export default connectDB;
