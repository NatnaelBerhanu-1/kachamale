import Image from "next/image";
import React from "react";

function FormHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Image
        src={"/assets/footerLogo.png"}
        alt="company logo"
        width={300}
        height={100}
        className="w-full object-contain h-8 max-w-[200px]"
      />
      <div className="text-center flex flex-col gap-3">
        <h1 className="text-3xl font-medium">{title}</h1>
        <p className="text-gray_text text-base">{description}</p>
      </div>
    </div>
  );
}

export default FormHeader;
