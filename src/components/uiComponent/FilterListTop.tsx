"use client";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
function FilterListTop() {
  const [existArrayFilter, setExistArrayFilter] = useState<any[]>(['sedan', 'suv']);


  return (
    <div className="flex gap-20 w-full h-7 items-center">
      <h2 className="font-semibold text-sm text-gray_text">Searching For</h2>
      <div className="flex gap-3 flex-wrap">
        {existArrayFilter.map((item: string, idx: number) => (
          <span
            className="w-fit flex items-center justify-center px-3 border-2 rounded-full max-h-7 gap-2 border-dashed border-gray_text font-medium text-sm"
            key={idx}
          >
            <p className="h-full flex justify-center items-center">{item}</p>
            <Button
              variant={"ghost"}
              size={"sm"}
              className="hover:bg-transparent py-0 px-1"
            >
              <X className="text-red-800 w-5 h-5" />
            </Button>
          </span>
        ))}
      </div>
    </div>
  );
}

export default FilterListTop;

// const searchParams = useSearchParams();
//   const [paramsList, setParamsList] = useState<any[]>([]);
//   const [listToBeLoopThrough, setListToBeLoopThrough] = useState<any[]>([]);

//   console.log(listToBeLoopThrough);

//   searchParams.forEach((value: string) => {
//     if (!paramsList.includes(value)) {
//       setParamsList((prev: any) => [...prev, value]);
//     }
//   });

//   useEffect(() => {
//     searchParams.forEach((value: string) => {
//       if (!paramsList.includes(value)) {
//         setParamsList((prev: any) => [...prev, value]);
//       }
//     });

//     for (let value in paramsList) {
//       const paramsArray = paramsList[value].split(" ");
//       for (let x in paramsArray) {
//         if (!listToBeLoopThrough.includes(paramsArray[x])) {
//           setListToBeLoopThrough((prev: any) => [...prev, paramsArray[x]]);
//         } else {
//           setListToBeLoopThrough(
//             listToBeLoopThrough.filter((item: string) => item != paramsArray[x])
//           );
//         }
//       }
//     }
//   }, [searchParams]);