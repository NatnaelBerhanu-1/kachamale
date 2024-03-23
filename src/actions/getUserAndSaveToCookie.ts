"use server";
import connectDB from "@/lib/config";
import UserModel from "@/model/userRegistrationModel";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

interface userInfoType {
  _id: string;
  fullName: string;
  phoneNumber: string;
  isActive: boolean;
}

export const getUserAndSaveToCookie = async ({
  phoneNumber,
}: {
  phoneNumber: string;
}) => {
  try {
    await connectDB();
    //get the user by hes number
    const user = (await UserModel.findOne({
      phoneNumber,
    }).lean()) as userInfoType;
    //generate token that contains user id, name, phoneNumber
    const userInfo = {
      id: user._id,
      fullName: user.fullName,
      phoneNumber: user.phoneNumber,
    };
    const accessToken = jwt.sign(userInfo, process.env.ACCESS_TOKEN_KEY!, {
      //Set the expiration
      expiresIn: 3600 * 24 * 60 * 60
    });

    //add this token to cookie authentication header

    cookies().set({
      name: "Et_car_Token",
      value: accessToken,
      httpOnly: true,
    });
  } catch (error) {
    console.log(error);
  }
};
