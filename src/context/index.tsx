"use client";

import createContext from "./create-context";
import { schemaBarcodeType } from "@/zod";

type Camera = {
  scanning: boolean;
  torchOn: boolean;
  results: string[];
  cameras: MediaDeviceInfo[];
  cameraId?: string;
  cameraError?: string[];
};

export type InitState = {
  language: "farsi" | "english";
  session: string | null;
  allBarcode: string[];
  allBarcodeDetails: Record<string, schemaBarcodeType>;
  camera: Camera;
};

const initState: InitState = {
  language: "farsi",
  session: null,
  allBarcode: [],
  allBarcodeDetails: {},
  camera: {
    scanning: true,
    torchOn: false,
    results: [],
    cameras: [],
  },
};

export const { useContext, Provider } = createContext<InitState>(initState);
