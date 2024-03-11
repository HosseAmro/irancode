"use client";

import { schemaBarcodeType } from "@/zod";
import createContext from "./create-context";

export type InitState = {
  language: "farsi" | "english";
  session: string | null;
  allBarcode: string[];
  lastBarcode: schemaBarcodeType | null;
};

const initState: InitState = {
  language: "farsi",
  session: null,
  allBarcode: [],
  lastBarcode: null,
};

export const { useContext, Provider } = createContext<InitState>(initState);
