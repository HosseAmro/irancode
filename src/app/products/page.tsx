"use client";

import CardProduct from "@/components/CardProduct/CardProduct";
import { useContext } from "@/context";
import React from "react";

export default function Products() {
  const { state } = useContext();

  const pro = state.allBarcode.map((barcode) => {
    const allObj = state.allBarcodeDetails[barcode].info.resultData;
    const dateNow = new Date().toString();
    let title = "";
    allObj.map((obj) => {
      if (Object.keys(obj)[0] === "FunctionalName") {
        title = Object.values(obj)[0] as string;
      }
    });
    return (
      <>
        <CardProduct
          key={barcode}
          barcode={barcode}
          date={dateNow}
          title={title}
        />
      </>
    );
  });

  return <div className="mt-16">{pro}</div>;
}
