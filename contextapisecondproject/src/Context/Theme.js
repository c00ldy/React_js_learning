import { createContext, useContext } from "react";
import React from "react";

export const Themecontext = createContext({
  thememode: "light",
  darktheme: () => {},
  lighttheme: () => {},
});


export const Themeprovide  = Themecontext.Provider;

export default function useTheme(){
    return useContext(Themecontext)
}