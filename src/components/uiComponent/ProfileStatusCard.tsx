import Image from "next/image";
import React from "react";

function ProfileStatusCard({
  link,
  header,
  desc,
}: {
  link: string;
  desc: string;
  header: string;
}) {
  return (
    <div className="text-zinc-600 gap-2 flex items-center">
      <Image
        className="w-[2.5rem] h-[2.5rem]"
        width={50}
        height={50}
        alt="check icon"
        src={link}
      />
      <span className="flex flex-col justify-between">
        <b className="capitalize">{header}</b>
        <p className="text-xs font-medium">{desc}</p>
      </span>
    </div>
  );
}

export default ProfileStatusCard;
