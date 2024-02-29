"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { Card } from "./singleCarouselCard";

function CarouselCard() {
  const plugin = React.useRef(Autoplay({ delay: 5000 }));
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

 
  return (
    <div className="mt-5">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.start}
        setApi={setApi}
      >
        <CarouselContent>
          <CarouselItem className="flex gap-4">
            <Card />
            <Card />
          </CarouselItem>
          <CarouselItem className="flex gap-4">
            <Card />
            <Card />
          </CarouselItem>
          <CarouselItem className="flex gap-4">
            <Card />
            <Card />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground flex gap-2 items-center justify-center">
        {Array.from({ length: count }, (_, i) => (
          <div
            key={i}
            className={`${
              current == i + 1 ? "bg-main_blue w-4" : "bg-gray_text w-2"
            } h-[5px] rounded-full duration-300`}
          ></div>
        ))}
        <div></div>
      </div>
    </div>
  );
}

export default CarouselCard;
