import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import FormHeader from "./FormHeader";

function RegisterForm() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12 max-w-[1200px] mx-auto py-10">
        <section className="relative flex items-center justify-center lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            alt="company Logo"
            src="/assets/footerLogo.png"
            className="object-contain w-full max-w-[400px]"
            height={500}
            width={500}
            quality={100}
            priority
          />
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
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
          </div>
        </main>
      </div>
    </section>
  );
}

export default RegisterForm;
