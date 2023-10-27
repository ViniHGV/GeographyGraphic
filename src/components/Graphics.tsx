"use client";
import React from "react";
import Chart from "react-apexcharts";
import { IGraphics } from "../../types/types";

export const Graphics = ({
  typeChart,
  dataNumbers,
  dataDescriptions,
}: IGraphics) => {
  const test = {
    options: {
      chart: {
        id: "basic-bar",
        //Para  Stacked
        // stacked: true,
        // toolbar: {
        //   show: true,
        // },
      },
      colors: ["#000"],
      xaxis: { categories: dataDescriptions },
    },
    series: [
      {
        name: `Total capacity`,
        data: dataNumbers,
      },
    ],
  };
  return (
    <Chart
      style={{ chart: { background: "red" } }}
      options={test.options}
      series={test.series}
      type={typeChart}
      width="100%"
      height={500}
    />
  );
};
