import connectDB from "@/lib/config";
import UserModel from "@/model/userRegistrationModel";

export const findUserByPhone = async ({ phoneNumber }: { phoneNumber: string }) => {
  try {
    await connectDB();
    const user = await UserModel.find({ phoneNumber });
    if (user) {
      return { success: true };
    } else {
      return { error: true };
    }
  } catch (error) {
    console.log(error);
  }
};
