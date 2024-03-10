"use client";
import createContext from "./create-context";
export type InitState = {
  language: "farsi" | "english";
  session: string;
  getInquiry: {};
};

const initState: InitState = {
  language: "farsi",
  session: "",
  getInquiry: {},
};

export const { useContext, Provider } = createContext<InitState>(initState);
