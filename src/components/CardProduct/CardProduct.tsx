"use client";

import { convertToShamsi } from "@/utils/ConvertToShamsi";
import { FaCalendarDay } from "react-icons/fa";
import { FaBarcode } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";

type CardProductProps = {
  title: string;
  barcode: string;
  date: string;
};

export default function CardProduct({
  title,
  barcode,
  date,
}: CardProductProps) {
  const router = useRouter();
  const newDate = convertToShamsi(date);
  function handeler() {
    console.log(barcode);
    router.push(`/details?barcode=${barcode}`);
  }

  return (
    <div className="border-solid border-[#c7c7c7] border-2 rounded-md w-[90%] my-3 m-auto">
      <div className="text-black text-xl mt-4 mr-4">{title}</div>
      <div className="flex gap-12 mr-4 my-4 max-mb2:flex-col max-mb2:gap-2 max-mb2:mt-10">
        <div className=" flex gap-2 text-[#727272] max-mb1:flex-col">
          <FaBarcode />
          {barcode}
        </div>
        <div className="flex gap-2 text-[#727272] max-mb1:flex-col">
          <FaCalendarDay />
          {newDate}
        </div>

        <div
          onClick={handeler}
          className="text-[#719ce0] bg-[#eff4fc] rounded-xl py-1 px-4 max-mb2:w-[22%] text-center cursor-pointer"
        >
          جزئیات
        </div>
      </div>
    </div>
  );
}
