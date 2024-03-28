"use server";
import connectDB from "@/lib/config";
import UserModel from "@/model/userRegistrationModel";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { generateFromEmail } from "unique-username-generator";
interface userInfoType {
  _id: string;
  fullName: string;
  phoneNumber: string;
  isActive: boolean;
}

interface tokenParamType {
  id: string;
  fullName: string;
  phoneNumber: string;
}
const generateJwtAndSaveUserToCookie = (userInfo: tokenParamType) => {
  const accessToken = jwt.sign(userInfo, process.env.ACCESS_TOKEN_KEY!, {
    //Set the expiration
    expiresIn: 3600 * 24 * 60 * 60,
  });

  //add this token to cookie authentication header
  cookies().set({
    name: "Et_car_Token",
    value: accessToken,
    httpOnly: true,
  });

  return true;
};
export const signUserWithGoogle = async ({
  email,
  name,
  profile,
}: {
  email: string;
  name: string;
  profile: string;
}) => {
  try {
    await connectDB();
    const user = (await UserModel.findOne({ email }).lean()) as userInfoType;

    if (user) {
      const userInfo = {
        id: user._id,
        fullName: user.fullName,
        phoneNumber: user?.phoneNumber,
      };
      generateJwtAndSaveUserToCookie(userInfo);
      const id = user._id.toString();
      return { uid: id };
    }
    if (!user) {
      const nameForUserName = name.split(" ").join("_");
      const generatedUsername = generateFromEmail(
        nameForUserName.toString().toLowerCase(),
        4
      );
      const userName = "@" + generatedUsername;

      //check if the username is token
      const newUser = new UserModel({
        fullName: name,
        userName,
        email: email,
        isEmailVerified: true,
        profile: profile,
      });

      const savedUser = await newUser.save();
      const userInfo = {
        id: savedUser._id,
        fullName: savedUser.fullName,
        phoneNumber: savedUser?.phoneNumber,
      };
      generateJwtAndSaveUserToCookie(userInfo);
      const id = savedUser._id.toString();
      return { uid: id };
    }
  } catch (error) {
    console.log(error);
  }
};
