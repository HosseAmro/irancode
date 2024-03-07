import React from "react";
import CardProduct from "@/components/CardProduct/CardProduct";
import { FaAngleLeft } from "react-icons/fa6";

export default function Products() {
  return (
    <>
      <FaAngleLeft className="absolute text-blue-500  top-5 left-3" size={20} />
      <h1 className="absolute text-blue-500 top-5 right-3">
        تاریخچه استعلام ها
      </h1>
      <div className="mt-16">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </>
  );
}
