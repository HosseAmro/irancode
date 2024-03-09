import { FaCalendarDay } from "react-icons/fa";
import { FaBarcode } from "react-icons/fa6";
import Link from "next/link";
import React from "react";

export default function CardProduct() {
  return (
    <div className="border-solid border-[#c7c7c7] border-2 rounded-md w-[90%] my-3 m-auto">
      <div className="text-black text-xl mt-4 mr-4">
        بیسکوئیت چند قله بدون شکر جمانه
      </div>
      <div className="flex gap-12 mr-4 my-4 max-mb2:flex-col max-mb2:gap-2 max-mb2:mt-10">
        <div className=" flex gap-2 text-[#727272] max-mb1:flex-col">
          <FaBarcode />
          2330002672607
        </div>
        <div className="flex gap-2 text-[#727272] max-mb1:flex-col">
          <FaCalendarDay />
          1402/11/10
        </div>
        <Link href="./details">
          <div className="text-[#719ce0] bg-[#eff4fc] rounded-xl py-1 px-4 max-mb2:w-[22%] text-center">
            جزئیات
          </div>
        </Link>
      </div>
    </div>
  );
}
