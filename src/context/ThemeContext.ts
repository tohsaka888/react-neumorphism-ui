import { createContext } from "react";
import { WindowColor } from "../type";

type ThemeConfig = {
  theme: string;
  windowColor: WindowColor;
};

const ThemeContext = createContext<ThemeConfig | null>(null);

export default ThemeContext;
