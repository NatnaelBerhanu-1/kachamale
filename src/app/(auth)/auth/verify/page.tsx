import Image from "next/image";
import FormHeader from "@/components/uiComponent/FormHeader";
import { Button } from "@/components/ui/button";
import OtpInput from "@/components/uiComponent/OtpInput";

function SigninForm() {
  return (
    <section className="bg-white min-h-screen flex flex-col items-center justify-center relative">
      <Image
        src={"/assets/authSVG1.png"}
        alt="car svg"
        width={500}
        height={1000}
        className="absolute top-4 right-4 max-w-[300px] z-0"
      />
      <Image
        src={"/assets/authSVG2.png"}
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
          <span className="flex items-center gap-1">
            <h1 className="text-2xl font-bold text-zinc-600 ">
              Verify your account
            </h1>
            {/* svg showing warning so will come over it */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-message-circle-more"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              <path d="M8 12h.01" />
              <path d="M12 12h.01" />
              <path d="M16 12h.01" />
            </svg> */}
          </span>

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
