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

async function UserAvatar() {
  const user = await verifyToken();
  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            {" "}
            <Avatar
              title={user.fullName + " " + "profile"}
              className="cursor-pointer"
            >
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="animate-pulse"></AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="z-40">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem className="my-2 font-semibold bg-slate-100 flex items-center">
              <LogOut className="size-4" /> Log out
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
