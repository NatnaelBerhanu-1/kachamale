"use server";
import connectDB from "@/lib/config";
import UserModel from "@/model/userRegistrationModel";
import { generateFromEmail } from "unique-username-generator";

// register controller
export const registerUser = async (currentValue: any, formData: FormData) => {
  const { full_name, phoneNumber, privacy_checkbox } =
    Object.fromEntries(formData);

  if (!full_name || !phoneNumber || !privacy_checkbox) {
    return { error: "All fields are required." };
  }

  try {
    await connectDB();

    const existUser = await UserModel.findOne({ phoneNumber }).lean();
    if (existUser) {
      return { error: "Phone Number Already Registered." };
    }
    const name:string = full_name.toString()
    const nameForUserName = name.split(" ")[1];
    const generatedUsername = generateFromEmail(
      nameForUserName.toString().toLowerCase(),
      4
    );
    const userName = "@" + generatedUsername;

    //check if the username is token
    const newUser = new UserModel({
      fullName: full_name,
      phoneNumber,
      userName
    });
    const savedUser = await newUser.save();
    if (savedUser) {
      return { success: true };
    }
  } catch (error: any) {
    console.log(error);
  }
};
