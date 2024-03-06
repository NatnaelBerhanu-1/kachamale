import { Separator } from "@/components/ui/separator";
import BarChart from "@/components/uiComponent/BarChart";
import Map from "@/components/uiComponent/Map";
import PieChart from "@/components/uiComponent/PieChart";
import RecentCarCard from "@/components/uiComponent/RecentCarCard";
import { TopSalesDropDown } from "@/components/uiComponent/TopSalesDropDown";
import { recentCarList } from "@/lib/recentCarList";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin | Dashboard",
};

function page() {
  return (
    <div className="grid grid-cols-2 gap-5 p-5">
      <div className="rounded-lg p-5 dark:bg-transparent bg-white shadow-sm flex flex-col gap-2 h-fit">
        <div className="w-full flex justify-between items-center">
          <b className="text-lg">Recent Car Sales</b>
          <Link
            href={"/ad/dashboard/car_orders"}
            className="text-main_blue text-xs hover:underline"
          >
            View All
          </Link>
        </div>
        <div className="flex flex-col">
          {recentCarList.map((item, idx: number) => (
            <div key={idx} className="px-2">
              <RecentCarCard item={item} />
              <Separator />
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-lg p-5 flex flex-col dark:bg-transparent bg-white shadow-sm h-fit gap-2">
        <div className="w-full flex justify-between items-center">
          <b className="text-lg">Recent Car Sales</b>
          <TopSalesDropDown />
        </div>
        <PieChart />
      </div>
      <div className="rounded-lg p-5 dark:bg-transparent bg-white shadow-sm h-fit">
        <Map />
      </div>
      <div className="rounded-lg p-5 dark:bg-transparent bg-white shadow-sm h-fit flex flex-col gap-2">
        <div className="w-full flex justify-between items-center">
          <b className="text-lg">Recent Car Sales</b>
          <TopSalesDropDown />
        </div>
        <BarChart />
      </div>
    </div>
  );
}

export default page;
