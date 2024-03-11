import Image from "next/image";
import React from "react";
import FormHeader from "./FormHeader";
import { Button } from "../ui/button";
import Link from "next/link";

function SigninForm() {
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
                description="Welcome back! Please enter your details."
                title="Log in to your account"
              />
            </div>
            <form action="#" className="mt-8 flex flex-col gap-5">
              <div className="flex flex-col">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-600"
                >
                  Phone number
                </label>

                <input
                  type="text"
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
                  Password
                </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  placeholder="Enter your password"
                  className="mt-1 rounded-lg border-gray-200 bg-white text-sm text-gray-700 font-medium shadow-sm border py-2 indent-4 w-full outline-none"
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
                  Sign Up
                </Link>
              </span>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}

export default SigninForm;
