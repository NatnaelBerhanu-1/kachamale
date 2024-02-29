"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";

export function DetailCarousel({ images }: { images: string[] }) {
  const [api, setApi]: any = React.useState<CarouselApi>();
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
    <div className="max-w-[530px] mx-auto">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image: any, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Image
                  src={image}
                  alt={image}
                  width={1000}
                  height={1000}
                  className=""
                  quality={100}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="py-5 text-center text-sm text-muted-foreground flex gap-2 items-center justify-center relative w-fit mx-auto">
          <CarouselPrevious className="bg-transparent border-none scale-90" />
          {Array.from({ length: count }, (_, i) => (
            <div
              key={i}
              className={`${
                current == i + 1 ? "bg-main_blue w-4" : "bg-gray_text w-2"
              } h-[5px] rounded-full duration-300`}
            ></div>
          ))}
          <CarouselNext className="bg-transparent border-none scale-90" />
        </div>
      </Carousel>
    </div>
  );
}
