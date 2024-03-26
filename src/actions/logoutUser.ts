"use server";
import { cookies } from "next/headers";

export const signUserOut = () => {
  const existToken = cookies().get("Et_car_Token");
  if (existToken) {
    cookies().delete("Et_car_Token");
    return true;
  } else {
    return true;
  }
};
