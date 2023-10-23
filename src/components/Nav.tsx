"use client";
import React from "react";
import { dataNav } from "../../data/data";

export const Nav = () => {
  return (
    <div className="flex gap-12 font-medium">
      {dataNav.map((data, index) => (
        <a key={index} href={data.url}>
          {data.name}
        </a>
      ))}
    </div>
  );
};
