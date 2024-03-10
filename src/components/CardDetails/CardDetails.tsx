"use client";

import { useContext } from "@/context";
import React from "react";

export default function CardDetails() {
  const { state } = useContext();
  let name = "";
  let value = "";
  let direction = "";

  if (state.language === "farsi") {
    name = "نام";
    value = "مقدار";
  } else {
    name = "name";
    value = "value";
    direction = "text-end";
  }
  return (
    <div
      className={`flex px-4 py-4 border-0 border-b-4 border-solid border-white max-mb1:flex-col max-mb1:gap-6  ${direction}`}
    >
      {state.language === "farsi" ? (
        <>
          <div className=" basis-1/3 text-[#7a7a7a]">{name}</div>
          <div className=" basis-2/3 text-black">{value}</div>
        </>
      ) : (
        <>
          <div className=" basis-2/3 text-black">{value}</div>
          <div className=" basis-1/3 text-[#7a7a7a]">{name}</div>
        </>
      )}
    </div>
  );
}
