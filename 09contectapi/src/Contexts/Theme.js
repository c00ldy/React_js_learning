import { useContext, createContext } from "react";

export const ThemeContext = createContext({
  thememode: "Light",
  darktheme: () => {},
  lighttheme: () => {},
});

export const ThemeProvide = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
