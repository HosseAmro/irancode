"use client";

import React, { useCallback, useLayoutEffect } from "react";
import { getMedian } from "@/utils/GetMedian";
import Quagga, {
  QuaggaJSCodeReader,
  QuaggaJSResultObject,
} from "@ericblade/quagga2";

const defaultConstraints = {
  width: 400,
  height: 100,
};

const defaultLocatorSettings = {
  patchSize: "medium",
  halfSample: true,
  willReadFrequently: true,
};

const defaultDecoders: QuaggaJSCodeReader[] = ["ean_reader"];

type ScannerProps = {
  scannerRef: React.RefObject<HTMLDivElement>;
  addResult: (result: string) => void;
  cameraId?: string;
  facingMode?: string;
  constraints?: {
    width: number;
    height: number;
  };
  locator?: {
    patchSize: string;
    halfSample: boolean;
    willReadFrequently: boolean;
  };
  decoders?: QuaggaJSCodeReader[];
  locate?: boolean;
};

export default function Scanner({
  addResult,
  scannerRef,
  cameraId,
  facingMode,
  constraints = defaultConstraints,
  locator = defaultLocatorSettings,
  decoders = defaultDecoders,
  locate = true,
}: ScannerProps) {
  const errorCheck = useCallback(
    (result: QuaggaJSResultObject) => {
      if (!addResult) {
        return;
      }
      const err = getMedian(result.codeResult.decodedCodes);
      if (err < 0.25) {
        if (result.codeResult.code === null) return;
        addResult(result.codeResult.code);
      }
    },
    [addResult]
  );

  const handleProcessed = () => {};
  // const handleProcessed = (result: QuaggaJSResultObject) => {
  //   const drawingCtx = Quagga.canvas.ctx.overlay;
  //   const drawingCanvas = Quagga.canvas.dom.overlay;
  //   drawingCtx.font = "24px Arial";
  //   drawingCtx.fillStyle = "green";

  //   if (result) {
  //     if (result.boxes) {
  //       drawingCtx.clearRect(
  //         0,
  //         0,
  //         parseInt(drawingCanvas.getAttribute("width") as string),
  //         parseInt(drawingCanvas.getAttribute("height") as string)
  //       );
  //       result.boxes
  //         .filter((box) => box !== result.box)
  //         .forEach((box) => {
  //           Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
  //             color: "purple",
  //             lineWidth: 2,
  //           });
  //         });
  //     }
  //     if (result.box) {
  //       Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
  //         color: "blue",
  //         lineWidth: 2,
  //       });
  //     }
  //     if (result.codeResult && result.codeResult.code) {
  //       drawingCtx.font = "24px Arial";
  //       drawingCtx.fillText(result.codeResult.code, 10, 20);
  //     }
  //   }
  // };

  useLayoutEffect(() => {
    let ignoreStart = false;
    const init = async () => {
      await new Promise((resolve) => setTimeout(resolve, 10));
      if (ignoreStart) {
        return;
      }
      if (scannerRef.current !== null) {
        await Quagga.init(
          {
            inputStream: {
              type: "LiveStream",
              constraints: {
                ...constraints,
                ...(cameraId && { deviceId: cameraId }),
                ...(!cameraId && { facingMode }),
              },
              target: scannerRef.current,
              willReadFrequently: true,
            },
            locator,
            decoder: { readers: decoders },
            locate,
          },
          async (err) => {
            Quagga.onProcessed(handleProcessed);

            if (err) {
              return console.error("Error starting Quagga:", err);
            }
            if (scannerRef && scannerRef.current) {
              await Quagga.start();
            }
          }
        );
        Quagga.onDetected(errorCheck);
      }
    };
    init();

    return () => {
      ignoreStart = true;
      Quagga.stop();
      Quagga.offDetected(errorCheck);
      Quagga.offProcessed(handleProcessed);
    };
  }, [
    cameraId,
    addResult,
    scannerRef,
    errorCheck,
    constraints,
    locator,
    decoders,
    locate,
    facingMode,
  ]);

  return null;
}
