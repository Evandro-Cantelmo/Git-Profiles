import React, { createContext, useState } from "react";
import { IContextData } from "../interfaces/contextData.interface";
import { IContextProvider } from "../interfaces/contextProvider.interface";

const Context = createContext({} as IContextData);

/**
 * @export
 * @component
 * @name ContextProvider
 *
 * @description
 * Context Provider
 */

function ContextProvider({ children }: IContextProvider) {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <Context.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
