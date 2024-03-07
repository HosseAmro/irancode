import React from "react";

export default function Input() {
  return (
    <form className="flex flex-col px-3">
      <label className="mb-3 text-gray-800" htmlFor="text">
        کد ۱۳ رقمی
      </label>
      <input
        className="bg-[#f7f7f7] focus:border-blue-400 focus:border-solid rounded-xl w-full h-[3rem] pr-2 mb-14"
        placeholder="کد مورد نظر را وارد کنید."
        type="text"
        name="text"
        id="text"
      />
      <button
        className="text-white bg-blue-900 text-xl h-[3rem] w-full m-auto rounded-lg mb-10"
        type="submit"
      >
        جستجو
      </button>
    </form>
  );
}
