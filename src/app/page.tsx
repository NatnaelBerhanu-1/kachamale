import { Button } from "@/components/ui/button";
import CarListCard from "@/components/uiComponent/CarListCard";
import CarouselCard from "@/components/uiComponent/CarouselCard";
import { fakeCarsList } from "@/lib/fakeCarsList";

export default function Home() {
  return (
    <main className="max-w-[1300px] mx-auto w-full">
      {/*carousel start */}
      <div className="flex justify-center gap-4">
        <CarouselCard />
      </div>
      {/*carousel finish */}

      <div className="flex flex-col gap-8">
        {/*popular car list start */}
        <div>
          <div className="w-full flex items-center justify-between px-2">
            <p className="text-gray_text font-semibold">Popular Car</p>
            <Button
              variant="ghost"
              className="hover:bg-transparent text-main_blue hover:bg-hover_blue"
            >
              View All
            </Button>
          </div>
          {/*car card list start */}
          <div className="grid grid-cols-4 gap-4">
            {fakeCarsList.map((data, idx: number) => (
              <CarListCard data={data} key={idx} />
            ))}
          </div>
          {/*list card list finish */}
        </div>
        {/*popular car list finish */}
        {/*recommended car list start */}
        <div className="flex flex-col gap-2">
          <div className="w-full flex pl-2">
            <p className="text-main_blue font-semibold">Recommended Car</p>
          </div>
          {/*card list start */}
          <div className="grid grid-cols-4 gap-4">
            {fakeCarsList.map((data, idx: number) => (
              <CarListCard data={data} key={idx} />
            ))}
            {fakeCarsList.map((data, idx: number) => (
              <CarListCard data={data} key={idx} />
            ))}
          </div>
          {/*card list finish */}
          <Button className="bg-main_blue mx-auto my-10 hover:bg-hover_blue">
            Show More
          </Button>
        </div>
      </div>
    </main>
  );
}
