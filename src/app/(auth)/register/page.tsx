import RegisterForm from "@/components/uiComponent/RegisterForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Register - Start With ETCarWoW",
};

function page() {
  return (
    <div>
      <RegisterForm />
    </div>
  );
}

export default page;
