"use client";
import React from "react";
import Brazil from "@svg-maps/Brazil";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";

export const MapBrasil = () => {
  return <SVGMap map={Brazil} />;
};
