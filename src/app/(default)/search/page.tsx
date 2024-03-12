import BodyTypeFilterFormComp from "@/components/uiComponent/BodyTypeFilterFormComp";
import CapacityFilterFormComp from "@/components/uiComponent/CapacityFilterFormComp";
import CarListCard from "@/components/uiComponent/CarListCard";
import FilterListTop from "@/components/uiComponent/FilterListTop";
import SliderFilterComp from "@/components/uiComponent/SliderFilterComp";
import Spinner from "@/components/uiComponent/Spinner";
import TypeFilterFormComp from "@/components/uiComponent/TypeFilterFormComp";
import { fakeCarsList } from "@/lib/fakeCarsList";
import { Metadata } from "next";
import React, { Suspense } from "react";

type Props = {
  searchParams: { [key: string]: string | null | undefined };
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  return {
    title: searchParams.q ? `search: ${searchParams.q}` : "Search",
  };
}

function page() {
  return (
    <div className="grid grid-cols-10 max-w-[1500px] px-10 mx-auto">
      <div className="col-span-2 w-full min-h-screen bg-white py-10 px-5 flex flex-col gap-8 shadow-md">
        <div className="flex flex-col gap-4">
          <h4 className="text-gray_text text-xs tracking-wider">TYPE</h4>
          <Suspense fallback={<Spinner />}>
            <TypeFilterFormComp />
          </Suspense>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-gray_text text-xs tracking-wider">CAPACITY</h4>
          <Suspense fallback={<Spinner />}>
            <CapacityFilterFormComp />
          </Suspense>
        </div>

        <div className="flex flex-col gap-1">
          <h4 className="text-gray_text text-xs tracking-wider mb-4">PRICE</h4>
          {/* <SliderFilterComp /> */}
          <h4 className="tracking-wider text-slate-800 text-base font-medium">
            <SliderFilterComp />
            Max. $100.00
          </h4>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-gray_text text-xs tracking-wider">BODY STYLE</h4>
          <Suspense fallback={<Spinner />}>
            <BodyTypeFilterFormComp />
          </Suspense>
        </div>
      </div>

      <div className="col-span-8 grid gap-5 m-10 mb-0">
        <Suspense fallback={<Spinner />}>
          <FilterListTop />
        </Suspense>
        <div className="grid grid-cols-3 gap-4">
          {fakeCarsList.slice(0, 3).map((data, idx: number) => (
            <CarListCard data={data} key={idx} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {fakeCarsList.slice(1, 4).map((data, idx: number) => (
            <CarListCard data={data} key={idx} />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4">
          {fakeCarsList.slice(0, 3).map((data, idx: number) => (
            <CarListCard data={data} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
