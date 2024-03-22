"use server";
import connectDB from "@/lib/config";
import userRegistrationModel from "@/model/userRegistrationModel";
// register controller

export const registerUser = async (currentValue: any, formData: FormData) => {
  const { full_name, phone_number, country_code, privacy_checkbox } =
    Object.fromEntries(formData);

  if (!full_name || !phone_number || !country_code || !privacy_checkbox) {
    return { error: "All fields are required." };
  }
  try {
    await connectDB();
    const newUser = new userRegistrationModel({
      fullName: full_name,
      phoneNumber: country_code + "-" + phone_number,
    });
    const savedUser = await newUser.save();
    if (savedUser) {
      return { success: true, savedUser };
    }
  } catch (error: any) {
    console.log(error);
    throw new Error("Error registering user", error);
  }
};
