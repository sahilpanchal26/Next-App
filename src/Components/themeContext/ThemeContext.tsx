"use client";

import { ReactNode, createContext, useState } from "react";

type ThemeProviderProps = {
    children : ReactNode
}

export type ThemeContextValue = {
    mode : string
    toggle : () => void
}

export const ThemeContext = createContext<ThemeContextValue>({
    mode: "dark",
    toggle: () => {},
  });

export const ThemeProvider = ({ children } : ThemeProviderProps) => {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const contextValue : ThemeContextValue = {
    mode,
    toggle,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};