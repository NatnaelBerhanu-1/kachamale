"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState } from "react";

function BodyTypeFilterFormComp() {
  const searchParam = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParam);
  const [checkedParams, setCheckedParams] = useState(
    searchParam.get("bodyType")?.split(",")
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      if (searchParam.has("bodyType")) {
        const existPrams = searchParam.get("bodyType")?.split(",");
        const existQuery = existPrams?.find((p) => p == e.target.value);
        if (existQuery) {
          return;
        }
        existPrams?.push(e.target.value.toString());
        const stringFromParam = existPrams?.toString().split(",").join(",");
        params.set("bodyType", stringFromParam!);
        replace(`${pathname}?${params}`);
      } else {
        params.set("bodyType", e.target.value);
        replace(`${pathname}?${params}`);
      }
    } else {
      const existPrams = searchParam.get("bodyType")?.split(",");
      //@ts-ignore
      if (existPrams?.length < 2) {
        params.delete("bodyType");
        replace(`${pathname}?${params}`);
        return;
      }
      const existQuery = existPrams?.filter((p) => p != e.target.value);
      const stringFromParam = existQuery?.toString().split(",").join(",");
      params.set("bodyType", stringFromParam!);
      replace(`${pathname}?${params}`);
    }
  };
  return (
    <form className="flex flex-col gap-4">
      <label htmlFor="cargo" className="flex cursor-pointer items-start gap-3">
        <div className="flex items-center">
          &#8203;
          <input
            type="checkbox"
            value={"cargo"}
            checked={checkedParams?.includes("cargo")}
            name="cargo"
            className="size-4 appearance-none ring-1 rounded-md checked:bg-[url('/assets/checkBox.png')] bg-cover checked:ring-0"
            id="cargo"
            onChange={handleChange}
          />
        </div>

        <div className="flex">
          <strong className="font-semibold text-gray-600">Cargo Van</strong>
          <p className="pl-[2px] font-medium text-gray_text">(110)</p>
        </div>
      </label>

      <label
        htmlFor="coupe_body"
        className="flex cursor-pointer items-start gap-3"
      >
        <div className="flex items-center">
          &#8203;
          <input
            type="checkbox"
            value={"coupe_body"}
            checked={checkedParams?.includes("coupe_body")}
            name="coupe_body"
            className="size-4 appearance-none ring-1 rounded-md checked:bg-[url('/assets/checkBox.png')] bg-cover checked:ring-0"
            id="coupe_body"
            onChange={handleChange}
          />
        </div>

        <div className="flex">
          <strong className="font-semibold text-gray-600">Coupe</strong>
          <p className="pl-[2px] font-medium text-gray_text">(12)</p>
        </div>
      </label>

      <label
        htmlFor="hatchpack_body"
        className="flex cursor-pointer items-start gap-3"
      >
        <div className="flex items-center">
          &#8203;
          <input
            type="checkbox"
            value={"hatchpack_body"}
            checked={checkedParams?.includes("hatchpack_body")}
            name="hatchpack_body"
            className="size-4 appearance-none ring-1 rounded-md checked:bg-[url('/assets/checkBox.png')] bg-cover checked:ring-0"
            id="hatchpack_body"
            onChange={handleChange}
          />
        </div>

        <div className="flex">
          <strong className="font-semibold text-gray-600">Hatchpack</strong>
          <p className="pl-[2px] font-medium text-gray_text">(16)</p>
        </div>
      </label>

      <label
        htmlFor="sedan_body"
        className="flex cursor-pointer items-start gap-3"
      >
        <div className="flex items-center">
          &#8203;
          <input
            type="checkbox"
            value={"sedan_body"}
            checked={checkedParams?.includes("sedan_body")}
            name="sedan_body"
            className="size-4 appearance-none ring-1 rounded-md checked:bg-[url('/assets/checkBox.png')] bg-cover checked:ring-0"
            id="sedan_body"
            onChange={handleChange}
          />
        </div>

        <div className="flex">
          <strong className="font-semibold text-gray-600">Sedan</strong>
          <p className="pl-[2px] font-medium text-gray_text">(20)</p>
        </div>
      </label>

      <label
        htmlFor="passenger"
        className="flex cursor-pointer items-start gap-3"
      >
        <div className="flex items-center">
          &#8203;
          <input
            type="checkbox"
            value={"passenger"}
            checked={checkedParams?.includes("passenger")}
            name="passenger"
            className="size-4 appearance-none ring-1 rounded-md checked:bg-[url('/assets/checkBox.png')] bg-cover checked:ring-0"
            id="passenger"
            onChange={handleChange}
          />
        </div>

        <div className="flex">
          <strong className="font-semibold text-gray-600">Passenger Van</strong>
          <p className="pl-[2px] font-medium text-gray_text">(15)</p>
        </div>
      </label>
    </form>
  );
}

export default BodyTypeFilterFormComp;