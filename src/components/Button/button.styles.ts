import styled from "styled-components";
import { NeumorphismContainer, calcBoxShadow } from "../../styles/common.styles";

const showActiveBgColor = (height: string, bgColor: string): string => {
  const color_string = bgColor.replace("#", "");
  const color_number_shallow = (
    parseInt(color_string, 16) - parseInt("50505", 16)
  ).toString(16);
  const color_number_deep = (
    parseInt(color_string, 16) + parseInt("40404", 16)
  ).toString(16);
  console.log(`linear-gradient(145deg, #${color_number_shallow}, #${color_number_deep})`)
  return `linear-gradient(145deg, #${color_number_shallow}, #${color_number_deep})`;
};

export const ButtonContainer = styled(NeumorphismContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  cursor: pointer;
  user-select: none;
  :active {
    transform: translateY(2px);
    background: ${({ height, bgColor }) =>
      showActiveBgColor(height, bgColor)};
    box-shadow: ${({ height, bgColor }) => calcBoxShadow(height, height, bgColor)};
  }
`;
