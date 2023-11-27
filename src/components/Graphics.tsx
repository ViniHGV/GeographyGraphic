"use client";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { IGraphics, TestType } from "../../types/types";

export const Graphics = ({
  typeChart,
  dataNumbers,
  dataDescriptions,
}: IGraphics) => {
  const [graphicHorizontal, setGraphicHorizontal] = useState(false);

  let test: TestType = {
    series: dataNumbers,
    labels: dataDescriptions,
  };

  useEffect(() => {
    if (window) {
      window.innerWidth <= 1024
        ? setGraphicHorizontal(true)
        : setGraphicHorizontal(false);
    }
  }, []);

  typeChart != "pie"
    ? (test = {
        options: {
          chart: {
            id: "basic-bar",
          },
          //Controle de direção de grafico Horizontal etc...
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: graphicHorizontal,
            },
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
