import Image from "next/image";
import React from "react";
import { DetailCarousel } from "./DetailCarousel";

interface PropsInterface {
  promoTitle: string;
  promoDesc: string;
  thumbnail: string;
  images: string[];
}

function DetailImage({
  promoDesc,
  promoTitle,
  thumbnail,
  images,
}: PropsInterface) {
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="w-full max-w-[650px] max-h-[300px] bg-[url('/assets/AdBg.png')] flex flex-col bg-cover bg-main_blue rounded-md">
        <div className="flex flex-col justify-start pt-5 gap-4 max-w-[300px] ml-4 h-full z-20">
          <h2 className="max-w-[300px] w-full font-semibold text-3xl text-white">
            {promoTitle}
          </h2>
          <p className="max-w-[300px] w-full text-white">{promoDesc}</p>
        </div>
        <Image
          src={thumbnail}
          alt="car"
          width={500}
          height={1000}
          className="max-w-[350px] w-full mx-auto"
        />
      </div>
      <DetailCarousel images={images}/>
    </div>
  );
}

export default DetailImage;
