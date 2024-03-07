import React from "react";
import CollectionDetails from "@/components/CollectionDetails/CollectionDetails";
import { FaAngleLeft } from "react-icons/fa6";
export default function Details() {
  return (
    <>
      <FaAngleLeft className="absolute text-blue-500  top-5 left-3" size={20} />
      <h1 className="absolute text-blue-500 top-5 right-3">جزئیات محصول</h1>
      <div className="mt-16">
        <div className="flex justify-around ">
          <button className="text-white bg-blue-700 h-12 w-[40%] rounded-lg">
            فارسی
          </button>
          <button className="text-[#7a7a7a] bg-[#f2f2f2] h-12 w-[40%] rounded-lg">
            انگلیسی
          </button>
        </div>
        <CollectionDetails />
        <CollectionDetails />
        <CollectionDetails />
        <CollectionDetails />
      </div>
    </>
  );
}
