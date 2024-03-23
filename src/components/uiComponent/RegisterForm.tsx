"use client";
import { useFormState } from "react-dom";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import FormHeader from "./FormHeader";
import { countryCodes } from "@/lib/countryCode";
import { registerUser } from "@/actions/authActions";
import { toast } from "react-toastify";
import Spinner from "./Spinner";
import { redirect } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface CountryCodeType {
  country: string;
  code: string;
  iso: string;
}

function RegisterForm() {
  const [policyAgreement, setPolicyAgreement] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [countryCode, setCountryCode] = useState<string>("");
  const [formState, formAction] = useFormState<any, FormData>(registerUser, 0);
  const [pending, setPending] = useState<boolean>(false);

  useEffect(() => {
    if (formState?.success) {
      toast.success("Registration finished please Activate Your Account");
      setPending(false);
      redirect("/signin");
    } else if (formState?.error) {
      toast.error(formState?.error);
      setPending(false);
    }
  }, [formState]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target.name == "privacy_checkbox") {
      //@ts-ignore
      if (e.target.checked) {
        setPolicyAgreement(true);
      } else {
        setPolicyAgreement(false);
      }
    }

    if (e.target.name == "phone_number") {
      setPhoneNumber(e.target.value);
    }
    if (e.target.name == "full_name") {
      setFullName(e.target.value);
    }

    if (e.target.name == "country_code") {
      setCountryCode(e.target.value);
    }
  };
  return (
    <section className="bg-white min-h-screen flex flex-col items-center justify-center relative">
      {pending && (
        <div className="absolute z-20">
          <Spinner />
        </div>
      )}
      <Image
        src={"/assets/authSvg1.png"}
        alt="car svg"
        width={500}
        height={1000}
        className="absolute top-4 right-4 max-w-[350px] z-0 opacity-30"
      />
      <Image
        src={"/assets/authSvg2.png"}
        alt="car svg"
        width={500}
        height={1000}
        className="absolute bottom-4 left-4 max-w-[350px] z-0"
      />
      <div className="max-w-[400px] w-full shadow-md mx-auto p-10 rounded-lg z-10">
        <FormHeader
          title="Create an account"
          description="Welcome! Please create your profile."
        />
        <form action={formAction} className="mt-8 flex flex-col gap-5">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Full Name
            </label>

            <input
              type="text"
              id="name"
              name="full_name"
              required
              placeholder="Enter your name"
              onChange={handleChange}
              className="mt-1 rounded-lg border-gray-200 bg-white text-sm text-gray-700 font-medium shadow-sm border py-2 indent-4 w-full outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-600"
            >
              Phone Number
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
                name="privacy_checkbox"
                onChange={handleChange}
                className="size-4 rounded-md border-gray-200 bg-white shadow-sm"
              />

              <span className="text-sm font-medium text-gray-600 flex">
                I agree to
                <Link href={"#"} className="text-semibold text-main_blue px-1">
                  privacy policy
                </Link>{" "}
                and
                <Link href={"#"} className="text-semibold text-main_blue pl-1">
                  terms
                </Link>
              </span>
            </label>
          </div>

          <div className="flex flex-col mt-5 gap-3">
            <Button
              className="bg-main_blue hover:bg-hover_blue"
              disabled={
                Boolean(!phoneNumber) ||
                Boolean(!fullName) ||
                !policyAgreement ||
                !countryCode
              }
              onClick={() => setPending(true)}
            >
              Get Started
            </Button>
            <Button className="bg-transparent text-black hover:bg-black/5 border flex gap-1">
              <Image
                src={"/assets/googleIcon.png"}
                alt="google icon"
                width={50}
                height={50}
                className="h-4 w-4 object-contain"
              />
              <p>Sign up with Google</p>
            </Button>
          </div>
          <span className="text-sm flex gap-1 items-center justify-center">
            <p className="text-gray_text">Already have an account?</p>{" "}
            <Link
              href={"/signin"}
              className="font-semibold text-main_blue hover:underline"
            >
              Log in
            </Link>
          </span>
        </form>
      </div>
    </section>
  );
}

export default RegisterForm;
