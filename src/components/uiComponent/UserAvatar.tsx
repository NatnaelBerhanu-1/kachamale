import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
function UserAvatar() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback className="animate-pulse"></AvatarFallback>
    </Avatar>
  );
}

export default UserAvatar;
