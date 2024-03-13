import Image from "next/image";
import React from "react";
import Rating from "./Rating";
import { Button } from "../ui/button";
import { CarListType } from "@/lib/interfaces";
import Link from "next/link";
import DealType from "./DealType";

interface PropsType {
  data: CarListType;
}

function ProfilePostedCarCard(props: PropsType) {
  const { data } = props;
  return (
    <div className="max-w-[330px] shadow-sm w-full mx-auto min-h-[360px] h-full bg-white rounded-lg p-2 flex flex-col justify-between">
      <div className="flex justify-between p-2 items-center">
        <span>
          <h1 className="text-lg font-bold uppercase">{data.abbreviateName}</h1>
          <p className="text-sm font-semibold text-gray_text capitalize">
            {data.type}
          </p>
        </span>
        <DealType dealType={data.dealType} />
      </div>
      <Link href={`/si/${data.id}`} className="relative max-h-[130px]">
        <Image
          src={data.thumbnail}
          alt="car"
          width={500}
          height={1000}
          className="w-full h-full object-cover scale-95"
        />
        <div className="absolute bottom-0 w-full h-10 bg-gradient-to-t from-white to-transparent"></div>
      </Link>
      <div className="w-full justify-between flex">
        <span className="flex gap-1 items-center">
          <Image
            alt="fuel image"
            src={"/assets/gasStation.png"}
            width={100}
            height={100}
            className="w-6 object-cover"
          />
          <p className="uppercase text-sm font-semibold text-gray_text">
            {data.gasoline}L
          </p>
        </span>
        <span className="flex gap-1 items-center">
          <Image
            alt="fuel image"
            src={"/assets/geerLogo.png"}
            width={100}
            height={100}
            className="w-6 object-cover"
          />
          <p className="uppercase text-sm font-semibold text-gray_text">
            {data.steering}
          </p>
        </span>
        <span className="flex gap-1 items-center">
          <Image
            alt="fuel image"
            src={"/assets/people.png"}
            width={100}
            height={100}
            className="w-6 object-cover"
          />
          <p className="uppercase text-sm font-semibold text-gray_text">
            {data.capacity} People
          </p>
        </span>
      </div>
      <div className="">
        <Rating reviewValue={data.reviews.length} ratingValue={data.rating} />
      </div>
      <div className="flex justify-between items-center gap-10">
        <span className="font-bold text-lg tracking-wide">
          ${data.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}
        </span>
        {data.status === "onSale" ? (
          <Button className="bg-main_blue hover:bg-hover_blue flex-1">
            Mark as Sale
          </Button>
        ) : data.status === "pending" ? (
          <Button disabled>Pending Approval</Button>
        ) : data.status === "sold" ? (
          <Button className="bg-green-500 hover:bg-green-600 flex-1">
            Sold
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ProfilePostedCarCard;
