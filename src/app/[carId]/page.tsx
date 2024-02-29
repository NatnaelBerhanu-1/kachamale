import { fakeCarsList } from "@/lib/fakeCarsList";
import React from "react";
import { CarListType, ReviewType } from "../../lib/interfaces";
import Spinner from "@/components/uiComponent/Spinner";
import Rating from "@/components/uiComponent/Rating";
import DealType from "@/components/uiComponent/DealType";
import { Button } from "@/components/ui/button";
import DetailImage from "@/components/uiComponent/DetailImage";
import Image from "next/image";
import AvatarPage from "@/components/uiComponent/Avatar";
import { formatDistanceToNow } from "date-fns";
import NotFoundComp from "@/components/uiComponent/NotFoundComp";
import CarListCard from "@/components/uiComponent/CarListCard";

export default function page({ params }: { params: { carId: string } }) {
  const { carId } = params;
  const data = fakeCarsList.find(
    (c: CarListType) => c.id == carId
  ) as CarListType;

  return (
    <div className="flex flex-col gap-10 p-5 justify-center items-center">
      {data ? (
        <>
          {/*cars detail top part start*/}
          <div className="grid w-full grid-cols-8 gap-5">
            <div className=" p-2 grid grid-cols-2 min-h-28 col-span-6 gap-3">
              <div className="w-full h-fit rounded-md p-4 flex flex-col gap-6 bg-white">
                <div className="flex justify-between">
                  <span>
                    <h1 className="text-lg font-bold uppercase">{data.name}</h1>
                    <Rating
                      ratingValue={data.rating}
                      reviewValue={data.reviews.length}
                      hideRatingNumber={true}
                    />
                  </span>
                  <DealType dealType={data.dealType} />
                </div>
                <p className="leading-relaxed">{data.description}</p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3 justify-between">
                    <span className="flex justify-between">
                      <p className="text-gray_text">Type Car</p>
                      <p className="font-semibold text-[#596780]">
                        {data.type}
                      </p>
                    </span>
                    <span className="flex justify-between">
                      <p className="text-gray_text">Steering</p>
                      <p className="font-semibold text-[#596780]">
                        {data.steering}
                      </p>
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 justify-between">
                    <span className="flex justify-between">
                      <p className="text-gray_text">Capacity</p>
                      <p className="font-semibold text-[#596780]">
                        {data.capacity} Person
                      </p>
                    </span>
                    <span className="flex justify-between">
                      <p className="text-gray_text">Gasoline</p>
                      <p className="font-semibold text-[#596780]">
                        {data.gasoline}L
                      </p>
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center max-w-[500px]">
                  <span className="flex flex-col">
                    <b className="font-bold text-lg">$122,500</b>
                    <s className="font-bold text-gray_text">$150,000</s>
                  </span>
                  <Button className="bg-main_blue hover:bg-hover_blue px-10">
                    Buy
                  </Button>
                </div>
              </div>

              {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
              <div className="w-full flex justify-start rounded-md max-w-[550px]">
                <DetailImage
                  promoTitle={data.promoTitle}
                  promoDesc={data.promoDesc}
                  thumbnail={data.thumbnail}
                  images={data.images}
                />
              </div>

              <div className="col-span-2 flex flex-col gap-4 bg-white rounded-lg p-5">
                <div className="flex gap-3 items-center">
                  <h1 className="font-semibold text-lg">Reviews</h1>{" "}
                  <span className="text-semibold text-white flex justify-center items-center text-lg bg-main_blue px-3 rounded-lg">
                    {data.reviews.length}
                  </span>{" "}
                </div>

                {data.reviews.length > 0 ? (
                  <div className="flex flex-col gap-5 my-5">
                    {data.reviews.map((review: ReviewType, idx: number) => (
                      <div key={idx} className="flex gap-3">
                        <div>
                          <AvatarPage
                            avatar={review.avatar}
                            fullName={review.name}
                          />
                        </div>
                        <div className="flex flex-col gap-3">
                          <div className="w-full flex justify-between">
                            <div className="w-fit flex flex-col gap-1 justify-center">
                              <h1 className="font-bold">{review.name}</h1>
                              <p className="text-gray_text text-sm">
                                {review.position}
                              </p>
                            </div>
                            <div className="w-fit flex flex-col gap-2 justify-center">
                              <p className="text-sm text-gray_text text-end">
                                21 july 2022
                              </p>
                              <Rating
                                ratingValue={review.rating}
                                reviewValue={20}
                                hideRatingNumber={true}
                                hideReview={true}
                              />
                            </div>
                          </div>
                          <p className="text-sm text-gray_text">
                            Lorem is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry{"'"}s standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <NotFoundComp text="No review has been given yet." />
                )}
              </div>
            </div>
            {/*cars detail top left part finish*/}
            {/*cars detail top right(owner) part start*/}
            <div className="col-span-2 rounded-lg flex flex-col gap-8">
              <div className="rounded-lg bg-white p-5 shadow-sm flex flex-col items-center gap-5">
                <div className="flex gap-5 items-center justify-center">
                  <div className="">
                    <AvatarPage
                      fullName={data.owner.fullName}
                      avatar={data.owner.avatar}
                    />
                  </div>
                  <span className="flex flex-col justify-around gap-1">
                    <h1 className="font-semibold text-xl text-slate-700">
                      {data.owner.fullName}
                    </h1>
                    <p className="text-gray_text text-sm">
                      Typically replies within a few hours
                    </p>
                    <p className="text-gray_text text-sm">
                      Last Seen{" "}
                      {formatDistanceToNow(new Date(data.owner.lastSeenAt), {
                        addSuffix: true,
                      })}{" "}
                    </p>
                  </span>
                </div>
                <div className="flex flex-col gap-3 w-full px-5">
                  <Button className="bg-main_blue hover:bg-hover_blue rounded-lg">
                    Show contact
                  </Button>
                  <Button className="ring-1 ring-main_blue bg-transparent text-main_blue hover:ring-0 hover:bg-main_blue hover:text-white rounded-lg">
                    Start Chat
                  </Button>
                </div>
              </div>
              <div className="rounded-lg bg-white shadow-sm flex justify-between gap-3 p-2">
                <Button className="ring-1 ring-main_blue bg-transparent text-main_blue rounded-lg w-fit hover:bg-main_blue hover:ring-0 hover:text-white">
                  Mark unavailable
                </Button>
                <Button className="ring-1 ring-main_blue bg-transparent text-main_blue rounded-lg w-fit hover:bg-main_blue hover:ring-0 hover:text-white">
                  Report Abuse
                </Button>
              </div>
              <div className="rounded-lg bg-white shadow-sm mx-auto">
                <Image
                  src={"/assets/detailPromoImage.png"}
                  alt="promotion image"
                  width={300}
                  height={300}
                  className="w-full max-h-[250px]"
                />
              </div>
            </div>
            {/*cars detail top right(owner) part finish*/}
          </div>
          {/* similar car start*/}
          <div className="w-full flex flex-col gap-5">
            <h1 className="text-main_blue font-semibold pl-5">Similar cars</h1>
            <div className="grid grid-cols-4 gap-4">
              {fakeCarsList.map((data, idx: number) => (
                <CarListCard data={data} key={idx} />
              ))}
              {fakeCarsList.map((data, idx: number) => (
                <CarListCard data={data} key={idx} />
              ))}
            </div>
          </div>
          {/* similar car start*/}
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
