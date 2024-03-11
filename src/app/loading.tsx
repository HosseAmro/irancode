import React from "react";

type LoadingProps = {
  title: string;
};

export default function Loading({ title }: LoadingProps) {
  return (
    <div className="bg-white text-black min-h-screen flex justify-center items-center text-center font-semibold ">
      {title}
    </div>
  );
}
