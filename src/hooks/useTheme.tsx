import { useEffect, useState } from "react";
import { Theme } from "../type";
import useLuminance from "./useLuminance";

function useTheme(bgColor?: string): Theme {
  const [theme, setTheme] = useState<Theme>("light");
  const luminance = useLuminance(bgColor);
  useEffect(() => {
    if (luminance / 255 > 0.5) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, [luminance]);
  return theme;
}

export default useTheme;
