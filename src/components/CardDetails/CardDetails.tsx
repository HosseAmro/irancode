"use client";

import { useContext } from "@/context";
import React from "react";

type CardDetailsProps = {
  name: string;
  value: string;
  full?: boolean;
};

export default function CardDetails({ name, value, full }: CardDetailsProps) {
  const { state } = useContext();
  let direction = "max-mb1:flex-col";

  if (state.language === "english") {
    direction = "text-end max-mb1:flex-col-reverse";
  }

  if (full) {
    return (
      <div
        className={`flex px-4 py-4 border-0 border-b-4 border-solid text-black border-white flex-col max-mb1:gap-6  ${direction}`}
      >
        {value}
      </div>
    );
  }

  return (
    <div
      className={`flex px-4 py-4 border-0 border-b-4 border-solid border-white max-mb1:gap-6 ${direction}`}
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
