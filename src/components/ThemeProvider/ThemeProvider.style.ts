import styled from "styled-components";
import { WindowColor } from "../../type";

type Props = {
  theme: "light" | "dark";
  windowColor: WindowColor;
};

export const ThemeContainer = styled.div<Props>`
  & * {
    color: ${(props) =>
      props.theme === "light"
        ? props.windowColor.light
        : props.windowColor.dark};
  }
`;
