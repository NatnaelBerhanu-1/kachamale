"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState } from "react";

function TypeFilterFormComp() {
  const searchParam = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParam);
  const [checkedParams, setCheckedParams] = useState(
    searchParam.get("type")?.split(",")
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      if (searchParam.has("type")) {
        const existPrams = searchParam.get("type")?.split(",");
        const existQuery = existPrams?.find((p) => p == e.target.value);
        if (existQuery) {
          return;
        }
        existPrams?.push(e.target.value.toString());
        const stringFromParam = existPrams?.toString().split(",").join(",");
        params.set("type", stringFromParam!);
        replace(`${pathname}?${params}`);
      } else {
        params.set("type", e.target.value);
        replace(`${pathname}?${params}`);
      }
    } else {
      const existPrams = searchParam.get("type")?.split(",");
      //@ts-ignore
      if (existPrams?.length < 2) {
        params.delete("type");
        replace(`${pathname}?${params}`);
        return;
      }
      const existQuery = existPrams?.filter((p) => p != e.target.value);
      const stringFromParam = existQuery?.toString().split(",").join(",");
      params.set("type", stringFromParam!);
      replace(`${pathname}?${params}`);
    }
  };
  return (
    <form className="flex flex-col gap-4">
      <label htmlFor="sport" className="flex cursor-pointer items-start gap-3">
        <div className="flex items-center">
          &#8203;
          <input
            type="checkbox"
            value={"sport"}
            name="sport"
            checked={checkedParams?.includes("sport")}
            className="size-4 appearance-none ring-1 rounded-md checked:bg-[url('/assets/checkBox.png')] bg-cover checked:ring-0"
            id="sport"
            onChange={handleChange}
          />
        </div>

        <div className="flex">
          <strong className="font-semibold text-gray-600">Sport</strong>
          <p className="pl-[2px] font-medium text-gray_text">(12)</p>
        </div>
      </label>

      <label htmlFor="suv" className="flex cursor-pointer items-start gap-3">
        <div className="flex items-center">
          &#8203;
          <input
            type="checkbox"
            value={"suv"}
            name="suv"
            checked={checkedParams?.includes("suv")}
            className="size-4 appearance-none ring-1 rounded-md checked:bg-[url('/assets/checkBox.png')] bg-cover checked:ring-0"
            id="suv"
            onChange={handleChange}
          />
        </div>

        <div className="flex">
          <strong className="font-semibold text-gray-600">SUV</strong>
          <p className="pl-[2px] font-medium text-gray_text">(14)</p>
        </div>
      </label>

      <label htmlFor="mvp" className="flex cursor-pointer items-start gap-3">
        <div className="flex items-center">
          &#8203;
          <input
            type="checkbox"
            value={"mvp"}
            checked={checkedParams?.includes("mvp")}
            name="mvp"
            className="size-4 appearance-none ring-1 rounded-md checked:bg-[url('/assets/checkBox.png')] bg-cover checked:ring-0"
            id="mvp"
            onChange={handleChange}
          />
        </div>

        <div className="flex">
          <strong className="font-semibold text-gray-600">MVP</strong>
          <p className="pl-[2px] font-medium text-gray_text">(8)</p>
        </div>
      </label>

      <label htmlFor="sedan" className="flex cursor-pointer items-start gap-3">
        <div className="flex items-center">
          &#8203;
          <input
            type="checkbox"
            value={"sedan"}
            checked={checkedParams?.includes("sedan")}
            name="sedan"
            className="size-4 appearance-none ring-1 rounded-md checked:bg-[url('/assets/checkBox.png')] bg-cover checked:ring-0"
            id="sedan"
            onChange={handleChange}
          />
        </div>

        <div className="flex">
          <strong className="font-semibold text-gray-600">Sedan</strong>
          <p className="pl-[2px] font-medium text-gray_text">(16)</p>
        </div>
      </label>

      <label htmlFor="coupe" className="flex cursor-pointer items-start gap-3">
        <div className="flex items-center">
          &#8203;
          <input
            type="checkbox"
            value={"coupe"}
            name="coupe"
            checked={checkedParams?.includes("coupe")}
            className="size-4 appearance-none ring-1 rounded-md checked:bg-[url('/assets/checkBox.png')] bg-cover checked:ring-0"
            id="coupe"
            onChange={handleChange}
          />
        </div>

        <div className="flex">
          <strong className="font-semibold text-gray-600">Coupe</strong>
          <p className="pl-[2px] font-medium text-gray_text">(21)</p>
        </div>
      </label>

      <label
        htmlFor="hatchback"
        className="flex cursor-pointer items-start gap-3"
      >
        <div className="flex items-center">
          &#8203;
          <input
            type="checkbox"
            value={"hatchback"}
            name="hatchback"
            checked={checkedParams?.includes("hatchpack")}
            className="size-4 appearance-none ring-1 rounded-md checked:bg-[url('/assets/checkBox.png')] bg-cover checked:ring-0"
            id="hatchback"
            onChange={handleChange}
          />
        </div>

        <div className="flex">
          <strong className="font-semibold text-gray-600">Hatchback</strong>
          <p className="pl-[2px] font-medium text-gray_text">(13)</p>
        </div>
      </label>
    </form>
  );
}

export default TypeFilterFormComp;