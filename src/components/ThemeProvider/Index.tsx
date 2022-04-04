import React from "react";
import { BgColorContext } from "../../context/BgColorContext";
import ThemeContext from "../../context/ThemeContext";
import useBackgroundColor from "../../hooks/useBackgroundColor";
import useTheme from "../../hooks/useTheme";
import useWindowColor from "../../hooks/useWindowColor";
import { ThemeContainer } from "./ThemeProvider.style";

type Props = {
  children: React.ReactNode;
  bgColor?: string;
};

function ThemeProvider({ children, ...props }: Props) {
  const bgColor = useBackgroundColor(props.bgColor || "rgb(224, 224, 224)");
  const theme = useTheme(bgColor);
  const windowColor = useWindowColor({ light: "#000000", dark: "#ffffff" });
  return (
    <BgColorContext.Provider value={bgColor}>
      <ThemeContext.Provider value={{ theme, windowColor }}>
        <ThemeContainer theme={theme} windowColor={windowColor}>
          {children}
        </ThemeContainer>
      </ThemeContext.Provider>
    </BgColorContext.Provider>
  );
}

export default ThemeProvider;
