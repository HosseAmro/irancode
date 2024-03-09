import { TiFlashOutline } from "react-icons/ti";
import { TbPhoto } from "react-icons/tb";
import React from "react";

export default function Camera() {
  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <div className="w-[70%] max-[350px]:w-[80%] max-[270px]:w-[90%] max-[270px]:mt-3 max-[190px]:w-[95%] aspect-[1.8/1] rounded-[1rem] bg-[#564940] border-2 border-white border-dashed"></div>
      </div>
      <div className="w-[55%] max-[400px]:w-[70%] max-[300px]:w-[80%] min-w-[10rem] mx-auto my-6">
        <p className="bg-[#564940] py-2 rounded-xl max-[190px]:hidden text-center">
          بارکد را کادر مستطیل قرار دهید.
        </p>
      </div>
      <div className="flex justify-between px-6 max-[300px]:px-2  py-4">
        <div className="bg-[#564940] max-[300px]:w-10 max-[300px]:h-10 w-12 h-12 rounded-2xl flex justify-center items-center">
          <TbPhoto size={30} />
        </div>
        <div className="bg-[#564940] max-[300px]:w-10 max-[300px]:h-10 w-12 h-12 rounded-2xl flex justify-center items-center">
          <TiFlashOutline size={30} />
        </div>
      </div>
    </>
  );
}
