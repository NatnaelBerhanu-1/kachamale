"use server";
import connectDB from "@/lib/config";
import userRegistrationModel from "@/model/userRegistrationModel";

export const findUserByPhone = async ({
  phoneNumber,
}: {
  phoneNumber: string;
}) => {
  try {
    await connectDB();
    const existUser = await userRegistrationModel.find({ phoneNumber }).lean();
    if (existUser.length) {
      return { success: true };
    } else {
      return { error: true };
    }
  } catch (error) {
    console.log(error);
  }
};
