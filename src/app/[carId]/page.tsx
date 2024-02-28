import { fakeCarsList } from "@/lib/fakeCarsList";
import React from "react";
import { CarListType } from "../../lib/interfaces";

export default function page({ params }: { params: { carId: string } }) {
  const { carId } = params;
  const data = fakeCarsList.filter((c: CarListType) => c.id === carId);
  return <div></div>;
}
