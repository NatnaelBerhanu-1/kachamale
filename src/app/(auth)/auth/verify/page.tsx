import Image from "next/image";
import React from "react";
import Link from "next/link";
import FormHeader from "@/components/uiComponent/FormHeader";
import { Button } from "@/components/ui/button";
import OtpInput from "@/components/uiComponent/OtpInput";

function SigninForm() {
  return (
    <section className="bg-white min-h-screen flex flex-col items-center justify-center relative">
      <Image
        src={"/assets/authTrasparentSvg.png"}
        alt="car svg"
        width={500}
        height={1000}
        className="absolute top-4 right-4 max-w-[300px] z-0"
      />
      <Image
        src={"/assets/authTrasparentSvg1.png"}
        alt="car svg"
        width={500}
        height={1000}
        className="absolute bottom-4 left-4 max-w-[300px] z-0"
      />
      <div className="max-w-[400px] w-full shadow-md flex flex-col gap-5 mx-auto p-10 rounded-lg z-10 bg-white">
        <FormHeader
          title="Log in to your account"
          description="Welcome back! Please enter your details."
          hide={true}
        />
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold text-zinc-600">
            Verify your account 💬
          </h1>
          <p className="text-gray_text">
            We sent a verification code to your mobile. Enter the code from the
            mobile in the field below.
          </p>
          <p className="font-medium tracking-wide">******1234</p>
          <div>
            <OtpInput />
          </div>
          <span className="flex items-center">
            <p>Didn{"'"}t get the sms?</p>
            <Button
              size={"sm"}
              variant={"ghost"}
              className="bg-transparent text-main_blue hover:text-hover_blue hover:bg-transparent pl-1"
            >
              Resend
            </Button>
          </span>
        </div>
      </div>
    </section>
  );
}

export default SigninForm;
