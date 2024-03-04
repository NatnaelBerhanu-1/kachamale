import Image from "next/image";
import React from "react";
import { clsx } from "clsx";

type Props = {
  item: {
    img: string;
    name: string;
    type: string;
    date: string;
    price: string;
  };
};

function RecentCarCard(props: Props) {
  const { item } = props;
  return (
    <div className="h-fit px-2 py-6 flex gap-5 items-center">
      <Image
        src={item.img}
        alt={item.name}
        width={100}
        height={100}
        className="w-full h-[30px] max-w-[100px] object-cover"
      />
      <div className="flex flex-1 justify-between">
        <span className="flex flex-col">
          <b className="capitalize">{item.name}</b>
          <small className="text-gray_text capitalize">{item.type}</small>
        </span>
        <span className="text-end">
          <small className="text-gray_text flex flex-col">{item.date}</small>
          <b>${item.price}</b>
        </span>
      </div>
    </div>
  );
}

export default RecentCarCard;
