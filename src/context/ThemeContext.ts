import { createContext } from "react";

type ThemeConfig = {
  theme: string;
};

const ThemeContext = createContext<ThemeConfig | null>(null);

export default ThemeContext;
