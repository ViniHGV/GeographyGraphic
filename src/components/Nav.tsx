"use client";
import React from "react";

type IDataNav = {
  name: string;
  url: string;
};

const dataNav: IDataNav[] = [
  { name: "Publication", url: "" },
  { name: "Citation", url: "" },
  { name: "Download Data", url: "" },
];

export const Nav = () => {
  return (
    <div className="flex gap-12 font-medium">
      {dataNav.map((data) => (
        <a href={data.url}>{data.name}</a>
      ))}
    </div>
  );
};
