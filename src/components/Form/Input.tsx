"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { schemaForm, SchemaFormType } from "@/zod";
import { useForm } from "react-hook-form";
import React from "react";

export default function Input() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SchemaFormType>({
    resolver: zodResolver(schemaForm),
  });
  let border = "focus:border-blue-400";
  if (errors.barcode) {
    border = "focus:border-red-400";
  }
  async function onSubmit({ barcode }: SchemaFormType) {
    await new Promise((res) => setTimeout(res, 1000));
    console.log("🚀 ~ onSubmit ~ barcode:", barcode, typeof barcode);
    reset();
  }

  return (
    <form className="px-3" onSubmit={handleSubmit(onSubmit)}>
      <label className="text-gray-800" htmlFor="text">
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
        className="text-white bg-blue-900 text-xl h-[3rem] w-full m-auto rounded-lg mb-1 disabled:bg-black"
        type="submit"
        disabled={isSubmitting}
      >
        جستجو
      </button>
    </form>
  );
}
