import Image from "next/image";
import { Button } from "../ui/button";

export const Card: any = () => {
  return (
    <div className="w-full max-w-[650px] min-h-[320px] bg-[url('/assets/AdBg.png')] bg-cover bg-main_blue rounded-md relative">
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
