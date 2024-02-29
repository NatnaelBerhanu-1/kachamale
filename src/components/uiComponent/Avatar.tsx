"use client";
import Image from "next/image";

function AvatarPage({
  avatar,
  fullName,
}: {
  avatar?: string;
  fullName: string;
}) {
  return (
    <div className="relative w-14 h-14">
      {avatar ? (
        <Image
          src={avatar}
          alt=""
          className="object-cover w-full h-full rounded-full ring-red-500"
          width={500}
          height={500}
        />
      ) : (
        <div className="bg-red-500 text-white font-semibold h-full w-full rounded-full text-2xl flex justify-center items-center">
          {fullName.split("")[0]}
        </div>
      )}
      <div className="w-3 h-3 rounded-full bg-slate-300 absolute bottom-0 right-0 ring-1 ring-white"></div>
    </div>
  );
}

export default AvatarPage;
