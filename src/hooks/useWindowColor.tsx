import React, { useEffect, useState } from "react";
import { WindowColor } from "../type";

const defaultTheme: WindowColor = {
  light: "#fffff",
  dark: "#000000",
};

function useWindowColor(themeColor?: WindowColor) {
  const [windowColor, setWindowColor] = useState<WindowColor>(defaultTheme);
  useEffect(() => {
    if (themeColor) {
      setWindowColor(themeColor);
    }
  }, [themeColor]);
  return windowColor;
}

export default useWindowColor;
