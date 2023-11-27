import React from "react";

export const Footer = () => {
  return (
    <div className="flex border-t border-[#C8C8C8] justify-between mt-16 px-5 flex-col text-center gap-4 lg:gap-0 lg:flex-row lg:px-36 py-8">
      <p className="font-medium">
        © 2023 ViniHGV. Todos os direitos reservados
      </p>
      <a href="#options" className="text-[#7F7F7F]">
        Show Selected Your Options
      </a>
    </div>
  );
};
