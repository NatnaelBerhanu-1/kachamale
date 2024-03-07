"use client";
import { Chart } from "react-google-charts";

export const data = [
  ["Name", "Sale"],
  ["Sport Car", 17439],
  ["SUV", 9417],
  ["Coupe", 18197],
  ["Hatchback", 12510],
  ["MVP", 14406], // CSS-style declaration
];

export const options = {
  pieHole: 0.6,
  pieSliceText: "none",
  tooltip: { showColorCode: true },
  colors: ["#A6CEF2", "#0D3559", "#175D9C", "#2185DE", "#63A9E8"],
  is3D: false,
};

function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="300px"
      data={data}
      options={options}
    />
  );
}

export default PieChart;
