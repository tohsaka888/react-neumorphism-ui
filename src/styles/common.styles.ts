import styled from "styled-components";

type NeumorphismProps = {
  bgColor: string;
  width: string;
  height: string;
  borderRadius: string;
};

export const calcBoxShadow = (
  width: string,
  height: string,
  bgColor: string
): string => {
  const hex_color_string = bgColor.replace("#", "");
  const height_number = height.match(/\d+(\.\d+)?/g) || "0";
  const height_unit = height.match(/[^\d.]/g) || [];
  const shadow_height = +height_number[0] / 10 + height_unit.join("");
  const shadow_area = +height_number[0] / 5 + height_unit.join("");
  const shallow_shadow_color =
    "#" + (parseInt(hex_color_string, 16) - parseInt("80808", 16)).toString(16);
  const deep_shadow_color =
    "#" + (parseInt(hex_color_string, 16) + parseInt("80808", 16)).toString(16);
  return `${shadow_height} ${shadow_height} ${shadow_area} ${shallow_shadow_color}, -${shadow_height} -${shadow_height} ${shadow_area} ${deep_shadow_color}`;
};

export const NeumorphismContainer = styled.div<NeumorphismProps>`
  background-color: ${(props) => props.bgColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  box-shadow: ${(props) =>
    calcBoxShadow(props.width, props.height, props.bgColor)};
`;
