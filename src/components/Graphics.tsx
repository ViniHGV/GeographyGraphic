"use client";
import React from "react";
import Chart from "react-apexcharts";
import { IGraphics } from "../../types/types";
import { type } from "os";
import { DataBase } from "../../data/data";

export const Graphics = ({ typeChart, data }: IGraphics) => {
  const test = {
    options: {
      chart: {
        id: "basic-bar",
      },
      colors: ["#000"],
      xaxis: {
        categories: data.filter((item) => item.state === "SP"),
      },
    },
    series: [
      {
        name: "series-1",
        data: [10, 20, 30],
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
