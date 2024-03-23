"use server";
import connectDB from "@/lib/config";
import UserModel from "@/model/userRegistrationModel";
// register controller

export const registerUser = async (currentValue: any, formData: FormData) => {
  const { full_name, phone_number, country_code, privacy_checkbox } =
    Object.fromEntries(formData);

  if (!full_name || !phone_number || !country_code || !privacy_checkbox) {
    return { error: "All fields are required." };
  }
  const phoneNumber = country_code + "+" + phone_number;
  try {
    await connectDB();

    const existUser = await UserModel.findOne({ phoneNumber }).lean();
    if (existUser) {
      return { error: "Phone Number Already Registered." };
    }

    const newUser = new UserModel({
      fullName: full_name,
      phoneNumber,
    });
    const savedUser = await newUser.save();
    if (savedUser) {
      return { success: true };
    }
  } catch (error: any) {
    console.log(error);
  }
};
