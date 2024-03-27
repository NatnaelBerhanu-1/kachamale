"use server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export const verifyToken = async () => {
  const tokenString: any = cookies().get("Et_car_Token")?.value || "";

  if (tokenString) {
    const decoded: any = jwt.verify(
      tokenString,
      process.env.ACCESS_TOKEN_KEY!
    );
    if (decoded) {
      return decoded;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
