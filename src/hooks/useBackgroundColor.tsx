import { useCallback, useEffect, useState } from "react";

function useBackgroundColor(bgColor?: string): string {
  const [windowBgColor, setWndowBgColor] = useState<string>("#fff");
  const rgbToHex = useCallback((rgb: string[]): string => {
    function componentToHex(c: string) {
      const hex = Number(c).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }
    const hexArr = rgb.map((item) => componentToHex(item));
    return "#" + hexArr.join("");
  }, []);
  useEffect(() => {
    const el = document.querySelector("body") as HTMLElement;
    if (el && bgColor) {
      el.style.background = bgColor;
    }
    if (el) {
      let bodyBgColor = el.style.background;
      if (bodyBgColor.includes("rgb")) {
        const rgb = bodyBgColor.match(/\d+(\.\d+)?/g)?.slice(0, 3);
        setWndowBgColor(rgbToHex(rgb as string[]));
      } else {
        setWndowBgColor(bodyBgColor);
      }
    }
  }, [bgColor, rgbToHex]);
  return windowBgColor;
}

export default useBackgroundColor;
