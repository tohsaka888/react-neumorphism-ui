import React, { CSSProperties, useContext } from "react";
import { BgColorContext } from "../../context/BgColorContext";
import { ButtonContainer } from "./button.styles";

type Props = {
  children?: React.ReactNode;
  style?: CSSProperties;
  size?: "small" | "default" | "large";
} & React.HTMLAttributes<HTMLDivElement>;

const sizes = {
  default: {
    width: "70px",
    height: "20px",
  },
  small: {
    width: "50px",
    height: "20px",
  },
  large: {
    width: "100px",
    height: "30px",
  },
};

function Button({ children, size = "default", ...props }: Props) {
  const bgColor = useContext(BgColorContext) || "fff";
  return (
    <ButtonContainer
      width={sizes[size].width}
      height={sizes[size].height}
      borderRadius="60px"
      bgColor={bgColor}
      {...props}
    >
      {children}
    </ButtonContainer>
  );
}

export default Button;
