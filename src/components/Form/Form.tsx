import { LuHistory } from "react-icons/lu";
import Link from "next/link";
import Input from "./Input";
import React from "react";

export default function Form() {
  return (
    <div className="bg-white text-black rounded-t-[2rem]">
      <div className="flex justify-between p-6 max-[220px]:flex-col max-[220px]:items-center">
        <div className="text-blue-700 font-bold text-xl max-[220px]:pb-3">
          استعلام ایران کد
        </div>
        <Link href="./products">
          <LuHistory className="text-blue-700" size={30} />
        </Link>
      </div>
      <p className="text-start text-gray-800 p-3 mb-5">
        بارکد مورد نظر رااز طریق بارکدخوان بالا اسکن کنید یا در فیلد زیر کد ۱۳
        رقمی را وارد نمائید
      </p>
      <Input />
    </div>
  );
}
