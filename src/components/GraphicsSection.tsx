import React from "react";
import { Button } from "./ui/button";
import { Upload } from "lucide-react";

export const GraphicsSection = () => {
  return (
    <div className="pt-12 mt-16 px-36">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-5xl font-bold">Graphics the your Selections!</h2>
          <p className="font-medium text-[#7F7F7F] ">
            Hand-picked themes that you can copy and paste into your apps.
          </p>
        </div>
        <Button
          variant="ghost"
          className="border-b-2 border-black rounded-none font-bold rounded-t-sm"
        >
          Export With CSV Format <Upload className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};
