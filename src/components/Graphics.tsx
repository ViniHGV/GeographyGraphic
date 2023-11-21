"use client";
import React from "react";
import Chart from "react-apexcharts";
import { IGraphics, TestType } from "../../types/types";

export const Graphics = ({
  typeChart,
  dataNumbers,
  dataDescriptions,
}: IGraphics) => {
  let test: TestType = {
    series: dataNumbers,
    labels: dataDescriptions,
  };

  typeChart != "pie"
    ? (test = {
        options: {
          chart: {
            id: "basic-bar",
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
      })
    : (test = {
        series: dataNumbers,
        labels: dataDescriptions,
      });
  return (
    <Chart
      style={{ chart: { background: "red" } }}
      options={typeChart != "pie" ? test.options : test}
      series={test.series}
      type={typeChart}
      width="100%"
      height={500}
    />
  );
};
