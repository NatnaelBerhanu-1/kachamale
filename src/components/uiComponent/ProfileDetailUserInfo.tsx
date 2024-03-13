import React from "react";
import { Button } from "../ui/button";

function ProfileDetailUserInfo() {
  return (
    <div className="flex flex-col gap-3 text-sm">
      <span className="flex gap-1">
        <b>Username:</b>
        <p>@r_darik</p>
      </span>

      <span className="flex gap-1">
        <b>email:</b>
        <p>r.m.darik@gmail.com</p>
      </span>

      <span className="flex gap-1">
        <b>Contact:</b>
        <p>+251 (925) 106-658</p>
      </span>

      <span className="flex gap-1">
        <b>Language:</b>
        <p>English</p>
      </span>

      <span className="flex gap-1">
        <b>Country:</b>
        <p>Ethiopia</p>
      </span>

      <Button className="mx-auto w-fit bg-main_blue hover:bg-hover_blue mt-3">
        EDIT
      </Button>
    </div>
  );
}

export default ProfileDetailUserInfo;
