import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { darkTheme, ColorModeType } from "@la1ch3/ui";

export type ColorModeProviderProps = {
  mode?: ColorModeType;
  children: ReactNode;
};

export const ColorModeContext = createContext<
  [ColorModeType, (mode: string) => void]
>([
  "light",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {},
]);

export const useColorMode = () => {
  return useContext(ColorModeContext);
};

const storageKey = "colorMode";

export const ColorModeProvider = ({
  mode,
  children,
}: ColorModeProviderProps): JSX.Element => {
  const [currentMode, setMode] = useState<ColorModeType>(mode ?? "light");

  useEffect(() => {
    const root = window.document.documentElement;

    if (root.classList.contains(darkTheme)) {
      console.log("hello");
      setMode("dark");
    } else {
      setMode("light");
    }
  }, []);

  const setAndSaveMode = (mode) => {
    const root = window.document.documentElement;

    setMode(mode);

    window.localStorage.setItem(storageKey, mode);

    if (mode === "dark") {
      root.classList.add(darkTheme);
    } else {
      root.classList.remove(darkTheme);
    }
  };

  const state: [ColorModeType, (mode: string) => void] = [
    currentMode,
    setAndSaveMode,
  ];

  return (
    <ColorModeContext.Provider value={state}>
      {children}
    </ColorModeContext.Provider>
  );
};
