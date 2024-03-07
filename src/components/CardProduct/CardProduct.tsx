import React from "react";
import { FaBarcode } from "react-icons/fa6";
import { FaCalendarDay } from "react-icons/fa";
export default function CardProduct() {
  return (
    <div className="border-solid border-[#c7c7c7] border-2 rounded-md w-[90%] my-3 m-auto">
      <div className="text-black text-xl mt-4 mr-4">
        بیسکوئیت چند قله بدون شکر جمانه
      </div>
      <div className="flex gap-12 mr-4 my-4">
        <div className="flex gap-2 text-[#727272]">
          <FaBarcode />
          2330002672607
        </div>
        <div className="flex gap-2 text-[#727272]">
          <FaCalendarDay />
          1402/11/10
        </div>
        <div className="text-[#719ce0] bg-[#eff4fc] rounded-xl py-1 px-4">
          جزئیات
        </div>
      </div>
    </div>
  );
}
