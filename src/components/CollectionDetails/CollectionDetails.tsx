"use client";

import { useContext } from "@/context";
import CardDetails from "../CardDetails/CardDetails";
import React from "react";

export default function CollectionDetails() {
  const { state } = useContext();
  let title = "";
  let titleClass = "";

  if (state.language === "farsi") {
    title = "محصول";
  } else {
    title = "Products";
    titleClass = "text-end";
  }

  return (
    <div className="w-[90%] my-3 m-auto">
      <div className={`font-semibold pr-4 py-4  ${titleClass}`}>{title}</div>
      <div className="bg-[#d6dee7] rounded-2xl">
        <CardDetails />
        <CardDetails />
        <CardDetails />
        <CardDetails />
        <CardDetails />
      </div>
    </div>
  );
}
