import Camera from "@/components/Camera/Camera";
import Form from "@/components/Form/Form";
import { FaAngleLeft } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <FaAngleLeft className="absolute text-white top-5 left-3" size={20} />
      <main className="flex flex-col h-full w-full bg-[#37281d] text-white">
        <Camera />
        <Form />
      </main>
    </>
  );
}
