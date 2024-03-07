"use client";
import React from "react";
import { Chart } from "react-google-charts";

const data = [
  [
    "Year",
    "Sale",
    { role: "style" },
    {
      sourceColumn: 0,
      role: "annotation",
      type: "string",
      calc: "stringify",
    },
  ],
  ["2000", 1000, "#00A8E1", "20M"],
  ["2021", 2000, "#00A8E1", "30M"],
  ["2022", 3000, "color: #00A8E1", "60M"],
];

const options = {
  bar: { groupWidth: "55%" },
  legend: { position: "bottom" },
};

function BarChart() {
  return (
    <div className="flex relative">
      <Chart
        chartType="BarChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default BarChart;
