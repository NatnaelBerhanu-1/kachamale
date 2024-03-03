"use client";
import { Slider } from "@/components/ui/slider";
import React from "react";

function SliderFilterComp() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e);
  };
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={"w-full text-main_blue"}
      color="red"
      //@ts-ignore
      onValueChange={handleChange}
    />
  );
}

export default SliderFilterComp;
