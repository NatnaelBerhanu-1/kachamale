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

  const Card: any = () => {
    return (
      <div className="w-full max-w-[650px] h-[320px] bg-[url('/assets/AdBg.png')] bg-cover border bg-main_blue rounded-md my-5 relative">
        <div className="flex flex-col justify-start pt-5 gap-4 max-w-[300px] ml-4 h-full z-20">
          <h2 className="max-w-[300px] w-full font-semibold text-3xl text-white">
            You Can Buy the best SUV Cars.
          </h2>
          <p className="max-w-[300px] w-full text-white">
            Ease of your car purchase safely and reliably. Of course at a low
            price.
          </p>
          <Button className="w-fit">Buy Now</Button>
        </div>
        <Image
          src={"/assets/Car.png"}
          alt="car"
          width={500}
          height={1000}
          className="max-w-[350px] absolute right-2 bottom-2 z-0"
        />
      </div>
    );
  };
  return (
    <div>
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
