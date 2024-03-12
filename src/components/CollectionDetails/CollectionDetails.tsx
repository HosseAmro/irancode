"use client";

import CardDetails from "../CardDetails/CardDetails";
import { useContext } from "@/context";
import React from "react";
import { ZodTypeAny, objectInputType } from "zod";

type CollectionDetailsType = {
  title: string;
  details: {
    dbName: string[];
    showName: string[];
  };
  full?: boolean;
  allObj: objectInputType<{}, ZodTypeAny, "passthrough">[];
};
export default function CollectionDetails({
  title,
  details,
  allObj,
  full,
}: CollectionDetailsType) {
  const { state } = useContext();
  let titleClass = "";

  if (state.language === "english") {
    titleClass = "text-end";
  }
  const AllCardDetails = details.dbName.map((str, i) => {
    let value = "";
    allObj.forEach((obj) => {
      if (Object.keys(obj)[0] === str) {
        value = Object.values(obj)[0] as string;
      }
    });
    return (
      <>
        <CardDetails
          key={`${i}`}
          name={details.showName[i]}
          value={value}
          full={full}
        />
      </>
    );
  });

  return (
    <div className="w-[90%] my-3 m-auto">
      <div className={`font-semibold pr-4 py-4  ${titleClass}`}>{title}</div>
      <div className="bg-[#d6dee7] rounded-2xl">{AllCardDetails}</div>
    </div>
  );
}
