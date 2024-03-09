import CardDetails from "../CardDetails/CardDetails";
import React from "react";

export default function CollectionDetails() {
  return (
    <div className="w-[90%] my-3 m-auto">
      <div className="font-semibold pr-4 py-4">محصول</div>
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
