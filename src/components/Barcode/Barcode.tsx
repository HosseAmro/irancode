"use client";

import { SimilarObjectsRemover } from "@/utils/SimilarObjectsRemover";
import { SimilarStringRemover } from "@/utils/SimilarStringRemover";
import React, { useEffect, useRef } from "react";
import Scanner from "../Scanner/Scanner";
import Quagga from "@ericblade/quagga2";
import { useContext } from "@/context";

export default function Barcode() {
  const scannerRef = useRef<HTMLDivElement>(null);
  const { state, overWrite } = useContext();

  function addResult(result: string) {
    const oldAllBarcode = [...state.camera.results, result];
    const newAllBarcode = SimilarStringRemover(oldAllBarcode);
    overWrite({
      value: { results: newAllBarcode },
      scope: "camera",
    });
    console.log(state);
    console.log(newAllBarcode);
  }

  function setCameras(cameras: MediaDeviceInfo[]) {
    const oldAllCameras = [...state.camera.cameras, ...cameras];
    const newAllCameras = SimilarObjectsRemover(oldAllCameras);
    overWrite({
      value: { cameras: newAllCameras },
      scope: "camera",
    });
  }

  function setCameraError(err: any[]) {
    let oldCameraError = [...err];
    if (state.camera.cameraError) {
      oldCameraError = [...err, ...state.camera.cameraError];
    }
    const newCameraError = SimilarStringRemover(oldCameraError);
    overWrite({
      value: { cameraError: newCameraError },
      scope: "camera",
    });
  }

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

  useEffect(() => {
    const enableCamera = async () => {
      await Quagga.CameraAccess.request(null, {});
    };
    const disableCamera = async () => {
      await Quagga.CameraAccess.release();
    };
    const enumerateCameras = async () => {
      const cameras = await Quagga.CameraAccess.enumerateVideoDevices();
      console.log("Cameras Detected: ", cameras);
      return cameras;
    };

    enableCamera()
      .then(disableCamera)
      .then(enumerateCameras)
      .then((cameras) => setCameras(cameras))
      .then(() => Quagga.CameraAccess.disableTorch())
      .catch((err) => setCameraError(err));

    return () => {
      disableCamera();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={scannerRef} className="bg-yellow-300 w-full h-full  rounded-2xl">
      <canvas
        className="bg-red-300 hidden drawingBuffer rounded-xl"
        width="350"
        height="200"
      ></canvas>
      {state.camera.scanning ? (
        <Scanner addResult={addResult} scannerRef={scannerRef} />
      ) : null}
    </div>
  );
}
