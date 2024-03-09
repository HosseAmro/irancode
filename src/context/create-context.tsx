import React, {
  createContext as createContext_react,
  useContext as useContext_react,
  useState,
} from "react";

import { Objects } from "./objects";

export default function createContext<I>(initState: I): {
  Provider: ({ children }: { children: React.ReactNode }) => React.JSX.Element;

  useContext: () => {
    state: I;
    initState: I;
    setState: React.Dispatch<React.SetStateAction<I>>;
    overWrite: (payload: { value: any; scope?: string }) => any;
  };
} {
  type T = typeof initState;

  const stateContext = createContext_react(initState);
  const dispatcherContext = createContext_react<
    React.Dispatch<React.SetStateAction<I>>
  >(() => {});

  const Provider = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = useState(() => initState);

    return (
      <stateContext.Provider value={state}>
        <dispatcherContext.Provider value={setState}>
          {children}
        </dispatcherContext.Provider>
      </stateContext.Provider>
    );
  };

  const useContext = () => {
    const state = useContext_react(stateContext);
    const setState = useContext_react(dispatcherContext);
    const overWrite = ({
      value = {},
      scope = "",
    }: {
      value: any;
      scope?: string;
    }) =>
      setState((PS: any) => Objects.overwrite(PS, { ...value }, scope || ""));

    return { state, setState, initState, overWrite };
  };

  return { useContext, Provider };
}
