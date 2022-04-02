import React, { useContext, useEffect, useState } from "react";
import { BgColorContext } from "../../context/BgColorContext";
import { ModalContext } from "../../context/ModalContext";
import { NeumorphismContainer } from "../../styles/common.styles";
import { ModalMain } from "./modal.styles";
import ModalAnimation from "./spring/ModalAnimation";
import { BsX } from "react-icons/bs";
import Button from "../Button";
import ReactDOM from "react-dom";

type Props = {
  visible: boolean;
  width: number;
  height: number;
  children: React.ReactNode;
  onClose: () => void;
};

const el = document.createElement("div");
document.body.appendChild(el);

function Modal({ children, ...props }: Props) {
  const bgColor = useContext(BgColorContext);
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    setVisible(props.visible);
  }, [props.visible]);
  return ReactDOM.createPortal(
    <ModalContext.Provider value={{ ...props, visible }}>
      <ModalAnimation>
        <NeumorphismContainer
          width={props.width + "px"}
          height={props.height + "px"}
          borderRadius="10px"
          bgColor={bgColor as string}
          style={{
            backdropFilter: "blur(50px)",
            zIndex: 90,
            position: "relative",
            backgroundColor: `${(bgColor as string) + 70}`,
          }}
        >
          <ModalMain>{children}</ModalMain>
          <Button
            size="small"
            onClick={props.onClose}
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              position: "absolute",
              right: 10,
              top: 10,
              zIndex: 100,
            }}
          >
            <BsX size={40} />
          </Button>
        </NeumorphismContainer>
      </ModalAnimation>
    </ModalContext.Provider>,
    el
  );
}

export default Modal;
