import React from "react";
import { Button } from "../ui/button";
import ImageUploadForm from "./ImageUploadForm";

function CarCreateForm() {
  const Step = ({
    step,
    title,
    description,
  }: {
    step?: number;
    title: string;
    description: string;
  }) => {
    return (
      <div className="flex justify-between items-end">
        <span className="flex flex-col">
          <h1 className="text-xl font-semibold">{title}</h1>
          <p className="text-gray_text">{description}</p>
        </span>
        {step && <small className="text-gray_text">Step {step} of 4</small>}
      </div>
    );
  };
  return (
    <div className="grid grid-cols-7 w-full gap-3">
      <div className="col-span-5">
        <form action="" className="grid gap-7">
          <div className="bg-white shadow-md p-8 flex flex-col gap-7 rounded-lg">
            <Step
              step={1}
              title="Car Information"
              description="Please enter the car information."
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
              <div className="flex flex-col gap-2">
                <label className="text-black font-medium" htmlFor="car_name">
                  Car Name
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 bg-slate-100 outline-none text-sm border border-transparent focus:border-slate-100 focus:bg-white duration-200 font-medium"
                  placeholder="Car Name"
                  type="text"
                  id="car_name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-black font-medium" htmlFor="model">
                  Model
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 bg-slate-100 outline-none text-sm border border-transparent focus:border-slate-100 focus:bg-white duration-200 font-medium"
                  placeholder="Model"
                  type="text"
                  id="model"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  className="text-black font-medium"
                  htmlFor="selling_price"
                >
                  Selling Price
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 bg-slate-100 outline-none text-sm border border-transparent focus:border-slate-100 focus:bg-white duration-200 font-medium"
                  placeholder="Selling Price"
                  type="number"
                  id="selling_price"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="text-black font-medium"
                  htmlFor="discount_amount"
                >
                  Discount Amount
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 bg-slate-100 outline-none text-sm border border-transparent focus:border-slate-100 focus:bg-white duration-200 font-medium"
                  placeholder="Discount Amount"
                  type="number"
                  id="discount_amount"
                />
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md p-8 flex flex-col gap-7 rounded-lg">
            <Step
              step={2}
              title="Car Detail"
              description="Please select your rental date"
            />

            <div className="flex gap-2 items-center">
              <span className="pt-1">
                <input
                  type="radio"
                  id="discount"
                  name="discount"
                  className="scale-125 border pt-2"
                />
              </span>
              <label
                htmlFor="discount"
                className="cursor-pointer text-black font-medium"
              >
                Discount
              </label>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
              <div className="flex flex-col gap-2">
                <label className="text-black font-medium" htmlFor="car_type">
                  Car Type
                </label>

                <select
                  name="car_type"
                  id="car_type"
                  className="w-full text-gray_text rounded-lg border-gray-200 p-3 bg-slate-100 outline-none text-sm border border-transparent focus:border-slate-100 focus:bg-white duration-200 font-medium"
                >
                  <option value="">select your car type</option>
                  <option value="sedan" className="font-medium text-black">
                    Sedan
                  </option>
                  <option value="suv" className="font-medium text-black">
                    SUV
                  </option>
                  <option value="sport" className="font-medium text-black">
                    Sport
                  </option>
                  <option value="coupe" className="font-medium text-black">
                    Coupe
                  </option>
                  <option value="mvp" className="font-medium text-black">
                    MVP
                  </option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-black font-medium" htmlFor="capacity">
                  Capacity
                </label>
                <select
                  name="capacity"
                  id="capacity"
                  className="w-full text-gray_text rounded-lg border-gray-200 p-3 bg-slate-100 outline-none text-sm border border-transparent focus:border-slate-100 focus:bg-white duration-200 font-medium"
                >
                  <option value="">select your car capacity</option>
                  <option value={2} className="font-medium text-black">
                    2 Person
                  </option>
                  <option value={4} className="font-medium text-black">
                    4 Person
                  </option>
                  <option value={6} className="font-medium text-black">
                    6 Person
                  </option>
                  <option value={8} className="font-medium text-black">
                    8 Person
                  </option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-black font-medium" htmlFor="steering">
                  Steering
                </label>
                <select
                  name="steering"
                  id="steering"
                  className="w-full text-gray_text rounded-lg border-gray-200 p-3 bg-slate-100 outline-none text-sm border border-transparent focus:border-slate-100 focus:bg-white duration-200 font-medium"
                >
                  <option value="">select your car steering</option>
                  <option value={"auto"} className="font-medium text-black">
                    Automatic
                  </option>
                  <option value={"manual"} className="font-medium text-black">
                    Manual
                  </option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-black font-medium" htmlFor="steering">
                  Gasoline
                </label>
                <select
                  name="gasoline"
                  id="gasoline"
                  className="w-full text-gray_text rounded-lg border-gray-200 p-3 bg-slate-100 outline-none text-sm border border-transparent focus:border-slate-100 focus:bg-white duration-200 font-medium"
                >
                  <option value="">Select your car Gasoline type</option>
                  <option value={"regular"} className="font-medium text-black">
                    Regular
                  </option>
                  <option value={"midgrade"} className="font-medium text-black">
                    Premium 95(Midgrade)
                  </option>
                  <option value={"premium"} className="font-medium text-black">
                    Premium 98
                  </option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-black font-medium" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="w-full rounded-lg border-gray-200 p-3 bg-slate-100 outline-none text-sm border border-transparent focus:border-slate-100 focus:bg-white duration-200 font-medium"
                rows={10}
                placeholder="Enter Car Description"
              ></textarea>
            </div>

            <div className="flex gap-2">
              <Button className="bg-main_blue px-8 hover:bg-hover_blue">
                Publish
              </Button>
              <Button className="bg-black px-8">Save</Button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-span-2 bg-white shadow-md rounded-lg h-fit min-h-[200px] flex flex-col gap-7 p-4">
        <Step
          title="Car Images"
          description="Please enter the car images below."
        />

        <ImageUploadForm />
      </div>
    </div>
  );
}

export default CarCreateForm;
