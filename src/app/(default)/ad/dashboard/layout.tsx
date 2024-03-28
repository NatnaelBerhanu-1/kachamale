import DashboardSideMenuListBox from "@/components/uiComponent/DashboardSideMenuListBox";
import { Separator } from "@/components/ui/separator";
import {
  dashboardSidebarMainMenuData,
  dashboardSidebarPrefData,
} from "@/lib/dashboardSidebarData";

async function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1 min-h-screen px-7 py-8 flex flex-col gap-5 bg-white dark:bg-transparent border-r-2">
        <p className="uppercase text-gray_text text-sm tracking-wider px-4">
          main menu
        </p>
        <div className="flex flex-col gap-3">
          {dashboardSidebarMainMenuData.map((data) => (
            <DashboardSideMenuListBox
              label={data.label}
              src={data.src}
              link={data.link}
              key={data.id}
            />
          ))}
        </div>

        <Separator />

        <p className="uppercase text-gray_text text-sm tracking-wider px-4">
          preference
        </p>
        <div className="flex flex-col gap-3">
          {dashboardSidebarPrefData.map((data) => (
            <DashboardSideMenuListBox
              label={data.label}
              src={data.src}
              link={data.link}
              key={data.id}
            />
          ))}
        </div>
      </div>
      <div className="col-span-3">{children}</div>
    </div>
  );
}

export default layout;
