"use client";
import React from "react";
import { dataNav } from "../../data/data";
import Link from "next/link";

type NavType = {
  menuOpen: boolean;
  handleMenuOpen: () => void;
};

export const Nav = ({ menuOpen, handleMenuOpen }: NavType) => {
  return (
    <div
      className={`flex gap-12 font-medium text-sm ${
        menuOpen
          ? "fixed flex-col right-0 top-20 bg-white px-6 pt-6 z-10 h-screen"
          : "hidden lg:flex relative h-auto"
      }`}
    >
      {dataNav.map((data, index) => (
        <Link onClick={handleMenuOpen} key={index} href={data.url}>
          {data.name}
        </Link>
      ))}
    </div>
  );
};
