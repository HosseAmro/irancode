"use client";

import { TiFlashOutline } from "react-icons/ti";
import { TbPhoto } from "react-icons/tb";
import Barcode from "../Barcode/Barcode";
import Quagga from "@ericblade/quagga2";
import { useContext } from "@/context";
import React from "react";

export default function Camera() {
  const { state, overWrite } = useContext();

  function onTorchClick() {
    const torch = !state.camera.torchOn;
    overWrite({
      value: { torchOn: torch },
      scope: "camera",
    });
    if (torch) {
      Quagga.CameraAccess.enableTorch();
    } else {
      Quagga.CameraAccess.disableTorch();
    }
  }

  return (
    <div className="basis-[70%] flex flex-col justify-between gap-8">
      <div className="flex justify-center items-center mt-14 ">
        <div className="w-[70%] max-[350px]:w-[80%] max-[270px]:w-[90%] max-[270px]:mt-3 max-[190px]:w-[95%] aspect-[1.8/1] bg-[#564940]">
          <Barcode />
        </div>
      </div>
      <div className="w-[55%] max-[400px]:w-[70%] max-[300px]:w-[80%] min-w-[10rem] mx-auto ">
        <p className="bg-[#564940] py-2 rounded-xl max-[190px]:hidden text-center">
          بارکد را کادر مستطیل قرار دهید.
        </p>
      </div>
      <div className="flex justify-between px-6 max-[300px]:px-2  py-4">
        <div className="bg-[#564940] max-[300px]:w-10 max-[300px]:h-10 w-12 h-12 rounded-2xl flex justify-center items-center">
          <TbPhoto size={30} />
        </div>
        <div className="bg-[#564940] max-[300px]:w-10 max-[300px]:h-10 w-12 h-12 rounded-2xl flex justify-center items-center">
          <TiFlashOutline onClick={onTorchClick} size={30} />
        </div>
      </div>
    </div>
  );
}
