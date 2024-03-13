import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import FormHeader from "./FormHeader";

function RegisterForm() {
  return (
    <section className="bg-white min-h-screen flex flex-col items-center justify-center relative">
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
        <form action="#" className="mt-8 flex flex-col gap-5">
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
              placeholder="Enter your name"
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

            <input
              type="tel"
              id="phoneNumber"
              name="phone_number"
              placeholder="Enter your Phone number"
              className="mt-1 rounded-lg border-gray-200 bg-white text-sm text-gray-700 font-medium shadow-sm border py-2 indent-4 w-full outline-none"
            />
          </div>

          {/* <div className="flex flex-col">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password*
            </label>

            <input
              type="password"
              id="Password"
              name="password"
              placeholder="Create a password"
              className="mt-1 rounded-lg border-gray-200 bg-white text-sm text-gray-700 font-medium shadow-sm border py-2 indent-4 w-full outline-none"
            />
            <small className="text-gray_text">
              Must be at least 8 characters.
            </small>
          </div> */}

          <div className="col-span-6">
            <label htmlFor="rememberMe" className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="remember_me"
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
            <Button className="bg-main_blue hover:bg-hover_blue">
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

{
  /* <div className="max-w-xl lg:max-w-3xl">
            <div className="w-full">
              <FormHeader
                title="Create an account"
                description="Welcome back! Please enter your details."
              />
            </div>
            <form action="#" className="mt-8 flex flex-col gap-5">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Name*
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="mt-1 rounded-lg border-gray-200 bg-white text-sm text-gray-700 font-medium shadow-sm border py-2 indent-4 w-full outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-600"
                >
                  Phone Number*
                </label>

                <input
                  type="tel"
                  id="phoneNumber"
                  name="phone_number"
                  placeholder="Enter your Phone number"
                  className="mt-1 rounded-lg border-gray-200 bg-white text-sm text-gray-700 font-medium shadow-sm border py-2 indent-4 w-full outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600"
                >
                  Password*
                </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  placeholder="Create a password"
                  className="mt-1 rounded-lg border-gray-200 bg-white text-sm text-gray-700 font-medium shadow-sm border py-2 indent-4 w-full outline-none"
                />
                <small className="text-gray_text">
                  Must be at least 8 characters.
                </small>
              </div>

              <div className="flex flex-col mt-5 gap-3">
                <Button className="bg-[#1366D9] hover:bg-[#1366d9d4]">
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
          </div> */
}
