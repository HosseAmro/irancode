"use client";

import React, { useEffect, useState } from "react";
import { useContext } from "@/context";

export default function ButtonLanguage() {
  const { state, overWrite } = useContext();

  let farsi = "";
  let english = "";
  if (state.language === "farsi") {
    farsi = " text-white bg-blue-700";
    english = " text-[#7a7a7a] bg-[#f2f2f2]";
  } else if (state.language === "english") {
    farsi = " text-[#7a7a7a] bg-[#f2f2f2]";
    english = " text-white bg-blue-700";
  }

  function handelerfarsi() {
    const test = overWrite({ value: { language: "farsi" } });
  }
  function handelerenglish() {
    const test = overWrite({ value: { language: "english" } });
  }
  
  return (
    <div className="flex justify-around max-mb1:flex-col max-mb1:items-center">
      <button
        onClick={handelerfarsi}
        className={`h-12 w-[40%] rounded-lg max-mb1:w-[90%] max-mb1:mb-4 ${farsi}`}
      >
        فارسی
      </button>
      <button
        onClick={handelerenglish}
        className={`h-12 w-[40%] rounded-lg max-mb1:w-[90%] ${english}`}
      >
        انگلیسی
      </button>
    </div>
  );
}
