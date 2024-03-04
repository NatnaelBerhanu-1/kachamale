"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  link: string;
  label: string;
  src: string;
};

function DashboardSideMenuListBox({ link, label, src }: Props) {
  const pathname = usePathname();
  return (
    <Link
      href={link}
      className={`flex w-full justify-start items-center gap-3 rounded-lg duration-200 text-start py-2 px-3 hover:bg-main_blue text-gray_text hover:text-white ${
        pathname == link && "bg-main_blue text-white"
      }`}
    >
      <Image src={src} width={50} height={50} className="w-6 h-6" alt="label" />
      <p className="text-lg font-semibold capitalize">{label}</p>
    </Link>
  );
}

export default DashboardSideMenuListBox;
