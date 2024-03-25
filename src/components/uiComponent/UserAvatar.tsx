import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import Link from "next/link";
import { verifyToken } from "@/actions/verifyToken";
async function UserAvatar() {
  const user = await verifyToken();
  return (
    <>
      {user ? (
        <Avatar title={user.fullName + "profile"} className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="animate-pulse"></AvatarFallback>
        </Avatar>
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
