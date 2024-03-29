import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import Link from "next/link";
import { verifyToken } from "@/actions/verifyToken";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import LogOutButton from "./LogOutButton";

async function UserAvatar() {
  const user = await verifyToken();
  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            {" "}
            <Avatar
              title={user?.fullName + " " + "profile"}
              className="cursor-pointer outline-none"
            >
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="animate-pulse"></AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="z-40">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={"/profile"}>Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/ad/add_car"}>Post Car</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/ad/dashboard"}>My Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="my-2 font-semibold bg-slate-100 flex items-center">
              <LogOutButton />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button
          asChild
          className="hover:ring-1 ring-white hover:bg-transparent bg-transparent font-medium"
        >
          <Link href={"/signin"}>Log in</Link>
        </Button>
      )}
    </>
  );
}

export default UserAvatar;
