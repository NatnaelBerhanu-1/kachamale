"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
function Search() {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const param = new URLSearchParams(searchParams);
  const [q, setQ] = useState<string | number | undefined>(
    searchParams.get("q") || ""
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQ(e.target.value);
    if (e.target.value.length > 2) {
      param.set("q", e.target.value);
    } else {
      param.delete("q");
    }
    replace(`${pathname}?${param}`);
  };
  return (
    <input
      type="text"
      placeholder="search something here"
      className="rounded-full w-full h-10 pl-10 outline-none"
      value={q}
      onChange={handleChange}
    />
  );
}

export default Search;
