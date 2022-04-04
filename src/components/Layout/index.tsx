import React, { useContext } from "react";
import { BgColorContext } from "../../context/BgColorContext";
import { NeumorphismContainer } from "../../styles/common.styles";
import { HeaderContainer } from "./layout.styles";

const Header = ({ children }: { children?: React.ReactNode }) => {
  const bgColor = useContext(BgColorContext);
  return <HeaderContainer>{children}</HeaderContainer>;
};

const Sider = () => {
  return <div></div>;
};

const Content = () => {
  return <div></div>;
};

function Layout() {
  return <div>index</div>;
}

export default Layout;
export { Header, Sider, Content };
