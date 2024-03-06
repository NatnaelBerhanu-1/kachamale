"use client";
import React from "react";
import { Chart } from "react-google-charts";

const data = [
  [
    "Element",
    "Density",
    { role: "style" },
    {
      sourceColumn: 0,
      role: "annotation",
      type: "string",
      calc: "stringify",
    },
  ],
  ["Silver", 10.49, "#00A8E1", null],
  ["Gold", 19.3, "#00A8E1", null],
  ["Platinum", 21.45, "color: #00A8E1", null],
];

const options = {
  title: "Density of Precious Metals, in g/cm^3",
  width: 600,
  height: 400,
  bar: { groupWidth: "95%" },
  legend: { position: "none" },
};

function BarChart() {
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default BarChart;
