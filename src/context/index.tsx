"use client";

import createContext from "./create-context";
import { schemaBarcodeType } from "@/zod";

export type InitState = {
  language: "farsi" | "english";
  session: string | null;
  allBarcode: string[];
  lastBarcodeDetails: schemaBarcodeType | null;
  allBarcodeDetails:Record<string,schemaBarcodeType>
};

const initState: InitState = {
  language: "farsi",
  session: null,
  allBarcode: [],
  lastBarcodeDetails: null,
  allBarcodeDetails :{}
};

export const { useContext, Provider } = createContext<InitState>(initState);
