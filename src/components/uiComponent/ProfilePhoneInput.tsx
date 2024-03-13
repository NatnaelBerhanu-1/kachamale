"use client";
import { Pen } from "lucide-react";
import { Button } from "../ui/button";

function ProfilePhoneInput() {
  return (
    <form action={"#"} className="mt-2 flex w-full items-center gap-5">
      <input
        type="tel"
        className="outline-none bg-none border-b border-black/40 text-sm py-1 indent-3 flex-1"
        placeholder="+251 (925) 106-658"
      />
      <Button
        className="bg-transparent p-0 hover:bg-transparent"
        variant={"ghost"}
        size={"sm"}
        title="Edit"
      >
        <Pen className="size-5" />
      </Button>
    </form>
  );
}

export default ProfilePhoneInput;
