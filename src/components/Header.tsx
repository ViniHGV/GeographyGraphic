import React from "react";
import Image from "next/image";
import logo from "../../public/Logo.png";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <div className="px-36 py-2 flex items-center justify-between border-b-[1px] border-[#C8C8C8]">
      <Image alt="" className="w-16" src={logo} />
      <Nav />
    </div>
  );
};
