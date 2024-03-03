import BodyTypeFilterFormComp from "@/components/uiComponent/BodyTypeFilterFormComp";
import CapacityFilterFormComp from "@/components/uiComponent/CapacityFilterFormComp";
import CarListCard from "@/components/uiComponent/CarListCard";
import SliderFilterComp from "@/components/uiComponent/SliderFilterComp";
import TypeFilterFormComp from "@/components/uiComponent/TypeFilterFormComp";
import { fakeCarsList } from "@/lib/fakeCarsList";
import React, { Suspense } from "react";

function page() {
  return (
    <div className="grid grid-cols-10">
      <div className="col-span-2 w-full min-h-screen bg-white py-10 px-5 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h4 className="text-gray_text text-xs tracking-wider">TYPE</h4>
          <Suspense fallback={<h1>loading...</h1>}>
            <TypeFilterFormComp />
          </Suspense>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-gray_text text-xs tracking-wider">CAPACITY</h4>
          <Suspense fallback={<h1>loading...</h1>}>
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
          <Suspense fallback={<h1>loading..</h1>}>
            <BodyTypeFilterFormComp />
          </Suspense>
        </div>
      </div>

      <div className="col-span-8 grid gap-5 m-10 mb-0">
        <div className="grid grid-cols-4 gap-4">
          {fakeCarsList.map((data, idx: number) => (
            <CarListCard data={data} key={idx} />
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4">
          {fakeCarsList.map((data, idx: number) => (
            <CarListCard data={data} key={idx} />
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4">
          {fakeCarsList.map((data, idx: number) => (
            <CarListCard data={data} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
