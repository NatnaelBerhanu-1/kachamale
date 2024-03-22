import mongoose from "mongoose";
console.log(process.env.MONGOOSE_URI)
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URI!);

    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("connected successfully");
    });
    connection.on("error", (err: any) => {
      console.log(
        "mongodb connection error. please make sure monogdb is running." + err
      );
      process.exit();
    });
  } catch (error: any) {
    console.log(error);
    throw new Error("Error occurred in mongodb", error);
  }
};

export default connectDB;
