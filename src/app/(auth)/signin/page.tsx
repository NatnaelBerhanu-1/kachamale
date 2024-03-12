import SigninForm from "@/components/uiComponent/SigninForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Log in",
};

function page() {
  return (
    <div className="px-3 rounded-lg">
      <SigninForm />
    </div>
  );
}

export default page;
