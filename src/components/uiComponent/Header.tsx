import Image from "next/image";
import UserAvatar from "./UserAvatar";
import Link from "next/link";

function Header() {
  return (
    <div className="h-[72px] bg-main_blue grid grid-cols-2 items-center px-16">
      <div className="flex gap-4">
        <Image
          src={"/assets/logo.png"}
          alt="logo"
          width={200}
          quality={100}
          height={200}
          className="max-w-[154px] max-h-[44px] object-contain"
        />
        <div className="flex-1 h-10 relative">
          <input
            type="text"
            placeholder="search something here"
            className="rounded-full w-full h-10 pl-10 outline-none"
          />
          <Image
            src={"/assets/searchLogo.png"}
            alt="search logo"
            width={100}
            height={100}
            className="absolute top-0 bottom-0 my-auto left-3 h-[20px] w-[20px]"
          />
          <Link
            href={"/search"}
            className="absolute h-[20px] w-[20px] right-5 top-0 bottom-0 my-auto "
          >
            <Image
              src={"/assets/filterLogo.png"}
              alt="filter logo"
              width={100}
              height={100}
              className="h-[20px] w-[20px]"
            />
          </Link>
        </div>
      </div>
      <div className="relative flex justify-end gap-4">
        <Image
          src={"/assets/SettingsLogo.png"}
          alt="setting logo"
          width={100}
          height={100}
          className="h-[40px] w-[40px]"
        />
        <UserAvatar />
      </div>
    </div>
  );
}

export default Header;
