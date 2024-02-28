import { ArrowRight, ArrowUp, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Rating from "./Rating";
import { Button } from "../ui/button";
import { CarListType } from "@/lib/interfaces";
import Link from "next/link";

interface PropsType {
  data: CarListType;
}

function CarListCard(props: PropsType) {
  const { data } = props;
  return (
    <Link href={`/${data.id}`} className="max-w-[330px] shadow-sm w-full mx-auto min-h-[360px] h-full bg-white rounded-lg p-2 flex flex-col justify-between">
      <div className="flex justify-between p-2 items-center">
        <span>
          <h1 className="text-lg font-bold uppercase">{data.abbreviateName}</h1>
          <p className="text-sm font-semibold text-gray_text capitalize">
            {data.type}
          </p>
        </span>
        <span
          className={`rounded-full px-3 h-fit font-bold text-xs ${
            data?.dealType.toLowerCase() == "great"
              ? "bg-great_deal_bg text-great_deal_text"
              : data?.dealType.toLowerCase() == "good"
              ? "bg-good_deal_bg text-good_deal_text"
              : data?.dealType.toLowerCase() == "fair"
              ? "bg-fair_deal_bg text-fair_deal_text"
              : ""
          }`}
        >
          {data?.dealType.toLowerCase() == "great" ? (
            <span className="flex items-center gap-1 capitalize">
              <ArrowUp className="w-4" /> Great Deal
            </span>
          ) : data?.dealType.toLowerCase() == "good" ? (
            <span className="flex items-center gap-1 capitalize">
              <ArrowUpRight className="w-4" /> Good Deal
            </span>
          ) : (
            <span className="flex items-center gap-1 capitalize">
              <ArrowRight className="w-4" /> Fair Deal
            </span>
          )}
        </span>
      </div>
      <div className="relative max-h-[130px]">
        <Image
          src={data.thumbnail}
          alt="car"
          width={500}
          height={1000}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 w-full h-10 bg-gradient-to-t from-white to-transparent"></div>
      </div>
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
      <div>
        <Rating reviewValue={data.reviews.length} ratingValue={data.rating} />
      </div>
      <div className="flex justify-between items-center">
        <span className="font-bold text-lg tracking-wide">
          ${data.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}
        </span>
        <Button className="bg-main_blue hover:bg-hover_blue">Buy Now</Button>
      </div>
    </Link>
  );
}

export default CarListCard;
