import Image from "next/image";
import React from "react";

function Rating({
  ratingValue,
  reviewValue,
}: {
  ratingValue: number;
  reviewValue: number;
}) {
  const GiveRating = () => {
    return (
      <div className="flex items-center">
        <span>
          {ratingValue >= 1 ? (
            <Image
              src={"/assets/fullStar.png"}
              alt="full star"
              quality={100}
              width={50}
              height={50}
              className="w-[16px] h-[16px]"
            />
          ) : ratingValue >= 0.5 ? (
            <Image
              src={"/assets/halfStar.png"}
              alt="half star"
              width={50}
              height={50}
              className="w-[16px] h-[16px]"
            />
          ) : (
            <Image
              src={"/assets/cleanStar.png"}
              alt="null star"
              width={50}
              height={50}
              className="w-[16px] h-[16px]"
            />
          )}
        </span>
        <span>
          {ratingValue >= 2 ? (
            <Image
              src={"/assets/fullStar.png"}
              alt="full star"
              width={50}
              height={50}
              className="w-[16px] h-[16px]"
            />
          ) : ratingValue >= 1.5 ? (
            <Image
              src={"/assets/halfStar.png"}
              alt="half star"
              width={50}
              height={50}
              className="w-[16px] h-[16px]"
            />
          ) : (
            <Image
              src={"/assets/cleanStar.png"}
              alt="null star"
              width={50}
              height={50}
              className="w-[16px] h-[16px]"
            />
          )}
        </span>
        <span>
          {ratingValue >= 3 ? (
            <Image
              src={"/assets/fullStar.png"}
              alt="full star"
              width={50}
              height={50}
              className="w-[16px] h-[16px]"
            />
          ) : ratingValue >= 2.5 ? (
            <Image
              src={"/assets/halfStar.png"}
              alt="half star"
              width={50}
              height={50}
              className="w-[16px] h-[16px]"
            />
          ) : (
            <Image
              src={"/assets/cleanStar.png"}
              alt="null star"
              width={50}
              height={50}
              className="w-[16px] h-[16px]"
            />
          )}
        </span>
        <span>
          {ratingValue >= 4 ? (
            <Image
              src={"/assets/fullStar.png"}
              alt="full star"
              width={50}
              height={50}
              className="w-[16px] h-[16px]"
            />
          ) : ratingValue >= 3.5 ? (
            <Image
              src={"/assets/halfStar.png"}
              alt="half star"
              width={50}
              height={50}
              className="w-[16px] h-[16px]"
            />
          ) : (
            <Image
              src={"/assets/cleanStar.png"}
              alt="null star"
              width={50}
              height={50}
              className="w-[16px] h-[16px]"
            />
          )}
        </span>
        <span>
          {ratingValue >= 5 ? (
            <Image
              src={"/assets/fullStar.png"}
              alt="full star"
              width={50}
              height={50}
              className="w-[16px] h-[16px]"
            />
          ) : ratingValue >= 4.5 ? (
            <Image
              src={"/assets/halfStar.png"}
              alt="half star"
              width={50}
              height={50}
              className="w-[16px] h-[16px]"
            />
          ) : (
            <Image
              src={"/assets/cleanStar.png"}
              alt="null star"
              width={50}
              height={50}
              className="w-[16px] h-[16px]"
            />
          )}
        </span>
      </div>
    );
  };
  return (
    <div className="flex gap-1 font-semibold">
      {ratingValue}
      <GiveRating />
      {reviewValue + " reviews "}
    </div>
  );
}

export default Rating;
