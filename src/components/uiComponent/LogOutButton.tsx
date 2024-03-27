"use client";
import { signUserOut } from "@/actions/logoutUser";
import { LogOut } from "lucide-react";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function LogOutButton() {
  const [value, setValue] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    if (value) {
      localStorage.removeItem("et_uid");
      push("/signin");
    }
  }, [value]);

  const handleLogoutClick = () => {
    const signOutRes = signUserOut();
    setValue(signOutRes);
  };
  return (
    <button className="flex items-center gap-1" onClick={handleLogoutClick}>
      <LogOut className="size-4" /> Log out
    </button>
  );
}

export default LogOutButton;
