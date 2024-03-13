import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import ProfileActivityCard from "@/components/uiComponent/ProfileActivityCard";
import ProfileDetailUserInfo from "@/components/uiComponent/ProfileDetailUserInfo";
import ProfilePhoneInput from "@/components/uiComponent/ProfilePhoneInput";
import ProfilePostedCarCard from "@/components/uiComponent/ProfilePostedCarCard";
import ProfileStatusCard from "@/components/uiComponent/ProfileStatusCard";
import { fakeCarsList } from "@/lib/fakeCarsList";
import { CarListType } from "@/lib/interfaces";
import { data } from "../../../components/uiComponent/Map";
import { Button } from "@/components/ui/button";

function page() {
  return (
    <div className="p-10 flex flex-col gap-10">
      <div className="max-w-[1350px] mx-auto grid grid-cols-11 gap-12 w-full">
        <div className="col-span-3 bg-white p-4 rounded-lg shadow-md h-fit w-full flex flex-col gap-5">
          <div className="flex flex-col justify-center items-center my-3 gap-2">
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h2 className="text-zinc-600 font-medium capitalize text-xl">
              Darik Adem
            </h2>
          </div>
          <div className="flex justify-around items-center">
            <ProfileStatusCard
              header="123"
              desc="Reported Sales"
              link="/assets/profileCheckIcon.png"
            />
            <ProfileStatusCard
              header="567"
              desc="Car Posted"
              link="/assets/profileStarIcon.png"
            />
          </div>

          <div className="flex flex-col gap-3 px-5 text-zinc-600">
            <div className="flex flex-col gap-2">
              <h2 className="font-medium capitalize text-lg">Details</h2>
              <Separator />
            </div>

            <ProfileDetailUserInfo />
          </div>
        </div>

        <div className="col-span-8 w-full flex flex-col gap-5">
          <div className="px-5 py-7 bg-white shadow-md rounded-lg w-full h-fit">
            <h1 className="text-xl font-medium">Login ID</h1>
            <p className="text-gray_text text-sm">
              Keep your account secure with authentication via phone.
            </p>
            <div className="mt-3">
              <ProfilePhoneInput />
            </div>
          </div>
          <div className="p-5 bg-white shadow-md rounded-lg w-full flex flex-col gap-5 h-full">
            <h1 className="text-xl font-medium">My Activity Timeline</h1>
            <div>
              <ProfileActivityCard
                color="purple-600"
                mainTitle="Post a new car"
                title="Nissan GT-R"
                desc="Sport Car"
                isPaymentInvoice={true}
                invoiceDesc="Invoices have been paid to the company"
                invoiceName="Invoices.pdf"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 max-w-[1350px] mx-auto">
        <div className="w-full flex items-center justify-between px-2">
          <p className="text-gray_text font-semibold">Posted Cars</p>
          <Button
            variant="ghost"
            className="hover:bg-transparent text-main_blue hover:bg-hover_blue"
          >
            View All
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-4 ">
          {fakeCarsList.map((car: CarListType, idx: number) => (
            <ProfilePostedCarCard data={car} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
