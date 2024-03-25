"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import FormHeader from "./FormHeader";
import { Button } from "../ui/button";
import Link from "next/link";
import { app } from "@/lib/firebase";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { redirect } from "next/navigation";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { toast } from "react-toastify";
import Spinner from "./Spinner";
import { findUserByPhone } from "@/actions/findUserByPhone";
import { getUserAndSaveToCookie } from "@/actions/getUserAndSaveToCookie";

function SigninForm() {
  const auth = getAuth(app);
  const [recaptchaResponse, setRecaptchaResponse] = useState<boolean>(false);
  const [saveUserId, setSaveUserId] = useState<boolean>(false);
  const [uid, setUid] = useState<any>("");

  useEffect(() => {
    //@ts-ignore
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "normal",
        callback: (response: any) => {
          setRecaptchaResponse(response);
        },
        "expired-callback": () => {},
      }
    );
  }, [auth]);

  useEffect(() => {
    if (saveUserId && uid) {
      localStorage.setItem("et_uid", uid.toString());
    }
  }, [saveUserId, uid]);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCodeId, setVerificationCodeId] = useState<any>("");
  const [otpId, setOtpId] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phone = "+" + phoneNumber;
    setIsLoading(true);

    const res = (await findUserByPhone({ phoneNumber })) as {
      success?: boolean;
      error?: boolean;
    };
    if (res.success) {
      try {
        const confirmation: any = await signInWithPhoneNumber(
          auth,
          phone,
          //@ts-ignore
          window.recaptchaVerifier
        );
        setVerificationCodeId(confirmation);
        setOtpId(true);
        toast.success(
          "Please Enter the number that has been sent to your mobile."
        );
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
    if (res.error) {
      toast.warn(
        "This phone is not registered. please register and come again"
      );
      redirect("/register");
    }
  };

  const handleChange = async (e: any) => {
    if (e.length == 6) {
      try {
        setIsLoading2(true);
        const list = await verificationCodeId.confirm(e);
        const user = (await getUserAndSaveToCookie({
          phoneNumber: list.user.phoneNumber,
        })) as { uid: string };
        setSaveUserId(true);
        setUid(user.uid);
        setIsLoading2(false);
      } catch (error) {
        setIsLoading2(false);
        console.log(error);
      }
    }
  };

  return (
    <>
      {!otpId ? (
        <section className="bg-white min-h-screen flex flex-col items-center justify-center relative">
          {isLoading && recaptchaResponse && <Spinner />}
          {isLoading2 && <Spinner />}
          {!recaptchaResponse && <div id="recaptcha-container"></div>}
          <Image
            src={"/assets/authTrasparentSvg.png"}
            alt="car svg"
            width={500}
            height={1000}
            className="absolute top-4 right-4 max-w-[350px] z-0"
          />
          <Image
            src={"/assets/authTrasparentSvg1.png"}
            alt="car svg"
            width={500}
            height={1000}
            className="absolute bottom-4 left-4 max-w-[350px] z-0"
          />
          <div className="max-w-[400px] w-full shadow-md mx-auto p-10 rounded-lg z-10">
            <FormHeader
              title="Log in to your account"
              description="Welcome back! Please enter your details."
            />
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-5 w-full"
            >
              <div className="flex flex-col">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-600"
                >
                  Phone number
                </label>
                <PhoneInput
                  country={"us"}
                  value={phoneNumber}
                  onChange={(phone: string) => setPhoneNumber(phone)}
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="rememberMe" className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="remember_me"
                    className="size-4 rounded-md border-gray-200 bg-white shadow-sm"
                  />

                  <span className="block text-sm font-medium text-gray-600">
                    Remember me
                  </span>
                </label>
              </div>

              <div className="flex flex-col mt-5 gap-3">
                <Button className="bg-main_blue hover:bg-hover_blue">
                  Sign in
                </Button>
                <Button className="bg-transparent text-black hover:bg-black/5 border flex gap-1">
                  <Image
                    src={"/assets/googleIcon.png"}
                    alt="google icon"
                    width={50}
                    height={50}
                    className="h-4 w-4 object-contain"
                  />
                  <p>Sign in with Google</p>
                </Button>
              </div>
              <span className="text-sm flex gap-1 justify-center items-center">
                <p className="text-gray_text">Don’t have an account?</p>{" "}
                <Link
                  href={"/register"}
                  className="font-semibold text-main_blue hover:underline"
                >
                  Sign up
                </Link>
              </span>
            </form>
          </div>
        </section>
      ) : (
        <section className="bg-white min-h-screen flex flex-col items-center justify-center relative">
          <Image
            src={"/assets/authSVG1.png"}
            alt="car svg"
            width={500}
            height={1000}
            className="absolute top-4 right-4 max-w-[350px] z-0"
          />
          <Image
            src={"/assets/authSVG2.png"}
            alt="car svg"
            width={500}
            height={1000}
            className="absolute bottom-4 left-4 max-w-[350px] z-0"
          />
          <div className="max-w-[400px] w-full shadow-md flex flex-col gap-5 mx-auto p-10 rounded-lg z-10 bg-white">
            <FormHeader
              title="Log in to your account"
              description="Welcome back! Please enter your details."
              hide={true}
            />
            <div className="flex flex-col gap-3">
              <span className="flex items-center gap-1">
                <h1 className="text-2xl font-bold text-zinc-600 ">
                  Verify your account
                </h1>
              </span>

              <p className="text-gray_text">
                We sent a verification code to your mobile. Enter the code from
                the mobile in the field below.
              </p>
              <p className="font-medium tracking-wide">******1234</p>
              <div>
                <InputOTP onChange={handleChange} maxLength={6}>
                  <InputOTPGroup className="flex gap-2">
                    <InputOTPSlot
                      index={0}
                      className="border border-black/50 rounded-lg"
                    />
                    <InputOTPSlot
                      index={1}
                      className="border border-black/50 rounded-lg"
                    />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup className="flex gap-2">
                    <InputOTPSlot
                      index={2}
                      className="border border-black/50 rounded-lg"
                    />
                    <InputOTPSlot
                      index={3}
                      className="border border-black/50 rounded-lg"
                    />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup className="flex gap-2">
                    <InputOTPSlot
                      index={4}
                      className="border border-black/50 rounded-lg"
                    />
                    <InputOTPSlot
                      index={5}
                      className="border border-black/50 rounded-lg"
                    />
                  </InputOTPGroup>
                </InputOTP>
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
      )}
    </>
  );
}

export default SigninForm;
