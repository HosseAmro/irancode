"use client";

import { usePathname, useRouter } from "next/navigation";
import { FaAngleLeft } from "react-icons/fa6";
import React from "react";

export default function Header() {
  const router = useRouter();
  const path = usePathname();
  let classGoBack = "hidden";
  let title = "";

  function handeler() {
    router.back();
  }

  if (path === "/details") {
    classGoBack = "text-blue-500";
    title = "جزئیات محصول";
  } else if (path === "/products") {
    classGoBack = "text-blue-500";
    title = "تاریخچه استعلام ها";
  } else if (path === "/") {
    classGoBack = "text-white";
  }

  return (
    <>
      <h1 className="absolute text-blue-500 top-5 right-3">{title}</h1>
      <FaAngleLeft
        onClick={handeler}
        className={`absolute top-5 left-3 cursor-pointer ${classGoBack}`}
        size={24}
      />
    </>
  );
}
