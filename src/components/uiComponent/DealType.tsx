import { ArrowRight, ArrowUp, ArrowUpRight } from "lucide-react";
import React from "react";

function DealType({dealType}:{dealType: string}) {
  return (
    <span
      className={`rounded-full px-3 h-fit font-bold text-xs ${
        dealType.toLowerCase() == "great"
          ? "bg-great_deal_bg text-great_deal_text"
          : dealType.toLowerCase() == "good"
          ? "bg-good_deal_bg text-good_deal_text"
          : dealType.toLowerCase() == "fair"
          ? "bg-fair_deal_bg text-fair_deal_text"
          : ""
      }`}
    >
      {dealType.toLowerCase() == "great" ? (
        <span className="flex items-center gap-1 capitalize">
          <ArrowUp className="w-4" /> Great Deal
        </span>
      ) : dealType.toLowerCase() == "good" ? (
        <span className="flex items-center gap-1 capitalize">
          <ArrowUpRight className="w-4" /> Good Deal
        </span>
      ) : (
        <span className="flex items-center gap-1 capitalize">
          <ArrowRight className="w-4" /> Fair Deal
        </span>
      )}
    </span>
  );
}

export default DealType;
