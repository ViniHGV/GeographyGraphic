"use client";
import React from "react";
import Chart from "react-apexcharts";
import { IGraphics } from "../../types/types";
import { type } from "os";

export const Graphics = ({ typeChart, values, categories }: IGraphics) => {
  const test = {
    options: {
      chart: {
        id: "basic-bar",
      },
      colors: ["#000"],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 191],
      },
    ],
  };
  return (
    <Chart
      style={{ chart: { background: "red" } }}
      options={test.options}
      series={test.series}
      type={typeChart}
      width="500"
    />
  );
};
