"use client";
import createContext from "./create-context";
export type InitState = {
  language: "farsi" | "english";
  getInquiry: {};
};

const initState: InitState = {
  language: "farsi",
  getInquiry: {},
};

export const { useContext, Provider } = createContext<InitState>(initState);
