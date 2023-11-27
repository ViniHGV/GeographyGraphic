"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/Logo.png";
import { Nav } from "./Nav";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const hendleMenuOpen = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };
  return (
    <div className="px-2 lg:px-36 fixed w-full top-0 bg-white z-20 py-2 flex items-center justify-between border-b-[1px] border-[#C8C8C8]">
      <Image alt="" className="w-16" src={logo} />
      <div
        onClick={hendleMenuOpen}
        className="lg:hidden w-7 h-7 flex flex-col gap-2 "
      >
        <div
          className={`h-[1.5px] bg-black relative transition-all ${
            menuOpen ? "rotate-45 top-1" : ""
          }`}
        />
        <div
          className={`h-[1.5px] bg-black ${menuOpen ? "hidden" : "block"}`}
        />
        <div
          className={`h-[1.5px] bg-black relative transition-all ${
            menuOpen ? "-rotate-45 bottom-1" : ""
          }`}
        />
      </div>
      <Nav menuOpen={menuOpen} handleMenuOpen={() => setMenuOpen(false)} />
    </div>
  );
};
