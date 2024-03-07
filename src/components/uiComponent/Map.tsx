"use client";
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "sale"],
  ["Germany", 5000],
  ["United States", 90000],
  ["Brazil", 45000],
  ["Canada", 2000],
  ["Ethiopia", 60000],
  ["RU", 73500],
];

function Map() {
  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={data}
    />
  );
}

export default Map;
