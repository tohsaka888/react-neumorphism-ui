import { useEffect, useState } from "react";

function useLuminance(bgColor?: string): number {
  const [luminance, setLuminance] = useState(0);
  useEffect(() => {
    const bodyBgColor = document.querySelector("body")?.style.backgroundColor;
    const rgb = bodyBgColor?.match(/\d+(\.\d+)?/g)?.slice(0, 3) as string[];
    setLuminance(+rgb[0] * 0.212656 + +rgb[1] * 0.715158 + +rgb[2] * 0.072186);
    console.log(+rgb[0] * 0.212656 + +rgb[1] * 0.715158 + +rgb[2] * 0.072186);
    console.log(bgColor);
  }, [bgColor]);
  return luminance;
}

export default useLuminance;
