"use client";

import Camera from "@/components/Camera/Camera";
import Form from "@/components/Form/Form";

export default function Home() {
  return (
    <main className="flex flex-col h-full w-full bg-[#37281d] text-white">
      <Camera />
      <Form />
    </main>
  );
}
