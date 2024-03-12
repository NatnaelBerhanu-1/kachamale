import CarCreateForm from "@/components/uiComponent/CarCreateForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Car",
};

function page() {
  return (
    <div className="max-w-[1400px] mx-auto p-5">
      <CarCreateForm />
    </div>
  );
}

export default page;
