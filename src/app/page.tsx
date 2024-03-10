"use client";
import Camera from "@/components/Camera/Camera";
import { useRouter } from "next/navigation";
import Form from "@/components/Form/Form";
import { Sing } from "@/api/apiSign";

export default function Home() {
  const router = useRouter();
  Sing().then((boolean) => {
    if (boolean) {
      router.push("/");
    } else {
      // TODO Create NotFind
      router.push("/notfind");
    }
  });
  return (
    <main className="flex flex-col h-full w-full bg-[#37281d] text-white">
      <Camera />
      <Form />
    </main>
  );
}
