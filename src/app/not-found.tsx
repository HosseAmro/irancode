import React from "react";

type NotFoundProps = {
  title?: string;
};

export default function NotFound({ title }: NotFoundProps) {
  let text = "صفحه مورد در دسترس نیست";
  if (title) {
    text = title;
  }

  return (
    <div className="bg-white text-black min-h-screen flex justify-center items-center text-center font-semibold ">
      {text}
    </div>
  );
}
