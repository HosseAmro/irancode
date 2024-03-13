"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { schemaForm, SchemaFormType } from "@/zod";
import { useRouter } from "next/navigation";
import { apiBarcode } from "@/api/apiBarcode";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useContext } from "@/context";

export default function Input() {
  const [failAxios, setFailAxios] = useState(false);
  const { state, overWrite } = useContext();
  const router = useRouter();
  let border = "focus:border-blue-400";

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SchemaFormType>({
    resolver: zodResolver(schemaForm),
  });
  if (errors.barcode) {
    border = "focus:border-red-400";
  }
  if (failAxios) {
    errors.barcode = {
      type: "value",
      message: "عدد وارد شده معتبر نیست",
    };
  }

  async function onSubmit({ barcode }: SchemaFormType) {
    const res = await apiBarcode(barcode, state, overWrite);
    if (res.ok) {
      setFailAxios(false);
      reset();
      router.push(`/details?barcode=${res.barcode}`);
    } else {
      setFailAxios(true);
    }
  }

  return (
    <form className="px-3" onSubmit={handleSubmit(onSubmit)}>
      <label className="text-gray-800" htmlFor="barcode">
        کد ۱۳ رقمی
      </label>
      <div className="mb-14 mt-3">
        <input
          {...register("barcode")}
          className={`bg-[rgb(247,247,247)] focus:border-solid rounded-xl w-full h-[3rem] pr-2 max-mb0:placeholder:text-transparent ${border}`}
          placeholder="کد مورد نظر را وارد کنید."
          inputMode="numeric"
          type="number"
        />
        {errors.barcode?.message && (
          <div className="text-red-800 pr-3">{errors.barcode.message}</div>
        )}
      </div>
      <button
        className="text-white bg-blue-900 text-xl h-[3rem] w-full m-auto rounded-lg mb-1 disabled:bg-gray-600 "
        type="submit"
        disabled={isSubmitting}
      >
        جستجو
      </button>
    </form>
  );
}
