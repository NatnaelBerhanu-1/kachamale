"use server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
export const verifyToken = async () => {
  const cookieStore = cookies();
  const token: any = cookieStore.get("Et_car_Token");

  if (token.value) {
    const decoded = jwt.verify(token.value, process.env.ACCESS_TOKEN_KEY!);
    if (decoded) {
      return decoded;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
