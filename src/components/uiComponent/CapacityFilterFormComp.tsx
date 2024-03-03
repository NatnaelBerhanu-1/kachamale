"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState } from "react";

function CapacityFilterFormComp() {
  const searchParam = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParam);
  const [checkedParams, setCheckedParams] = useState(
    searchParam.get("capacity")?.split(",")
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      if (searchParam.has("capacity")) {
        const existPrams = searchParam.get("capacity")?.split(",");
        const existQuery = existPrams?.find((p) => p == e.target.value);
        if (existQuery) {
          return;
        }
        existPrams?.push(e.target.value.toString());
        const stringFromParam = existPrams?.toString().split(",").join(",");
        params.set("capacity", stringFromParam!);
        replace(`${pathname}?${params}`);
      } else {
        params.set("capacity", e.target.value);
        replace(`${pathname}?${params}`);
      }
    } else {
      const existPrams = searchParam.get("capacity")?.split(",");
      //@ts-ignore
      if (existPrams?.length < 2) {
        params.delete("capacity");
        replace(`${pathname}?${params}`);
        return;
      }
      const existQuery = existPrams?.filter((p) => p != e.target.value);
      const stringFromParam = existQuery?.toString().split(",").join(",");
      params.set("capacity", stringFromParam!);
      replace(`${pathname}?${params}`);
    }
  };
  return (
    <form className="flex flex-col gap-4">
      <label
        htmlFor="2person"
        className="flex cursor-pointer items-start gap-3"
      >
        <div className="flex items-center">
          &#8203;
          <input
            type="checkbox"
            value={2}
            name="2person"
            checked={checkedParams?.includes("2")}
            className="size-4 appearance-none ring-1 rounded-md checked:bg-[url('/assets/checkBox.png')] bg-cover checked:ring-0"
            id="2person"
            onChange={handleChange}
          />
        </div>

        <div className="flex">
          <strong className="font-semibold text-gray-600">2 Person</strong>
          <p className="pl-[2px] font-medium text-gray_text">(10)</p>
        </div>
      </label>

      <label
        htmlFor="4person"
        className="flex cursor-pointer items-start gap-3"
      >
        <div className="flex items-center">
          &#8203;
          <input
            type="checkbox"
            value={4}
            checked={checkedParams?.includes("4")}
            name="4person"
            className="size-4 appearance-none ring-1 rounded-md checked:bg-[url('/assets/checkBox.png')] bg-cover checked:ring-0"
            id="4person"
            onChange={handleChange}
          />
        </div>

        <div className="flex">
          <strong className="font-semibold text-gray-600">4 Person</strong>
          <p className="pl-[2px] font-medium text-gray_text">(14)</p>
        </div>
      </label>

      <label
        htmlFor="6person"
        className="flex cursor-pointer items-start gap-3"
      >
        <div className="flex items-center">
          &#8203;
          <input
            type="checkbox"
            value={6}
            name="6person"
            checked={checkedParams?.includes("6")}
            className="size-4 appearance-none ring-1 rounded-md checked:bg-[url('/assets/checkBox.png')] bg-cover checked:ring-0"
            id="6person"
            onChange={handleChange}
          />
        </div>

        <div className="flex">
          <strong className="font-semibold text-gray-600">6 Person</strong>
          <p className="pl-[2px] font-medium text-gray_text">(8)</p>
        </div>
      </label>

      <label
        htmlFor="8person"
        className="flex cursor-pointer items-start gap-3"
      >
        <div className="flex items-center">
          &#8203;
          <input
            type="checkbox"
            value={8}
            name="8person"
            checked={checkedParams?.includes("8")}
            className="size-4 appearance-none ring-1 rounded-md checked:bg-[url('/assets/checkBox.png')] bg-cover checked:ring-0"
            id="8person"
            onChange={handleChange}
          />
        </div>

        <div className="flex">
          <strong className="font-semibold text-gray-600">8 Person</strong>
          <p className="pl-[2px] font-medium text-gray_text">(16)</p>
        </div>
      </label>
    </form>
  );
}

export default CapacityFilterFormComp;