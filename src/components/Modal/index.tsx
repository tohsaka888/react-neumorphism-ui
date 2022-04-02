import React, { useContext, useEffect, useState } from "react";
import { BgColorContext } from "../../context/BgColorContext";
import { ModalContext } from "../../context/ModalContext";
import { NeumorphismContainer } from "../../styles/common.styles";
import { ModalMain } from "./modal.styles";
import ModalAnimation from "./spring/ModalAnimation";
import { BsX } from "react-icons/bs";
import Button from "../Button";

type Props = {
  visible: boolean;
  width: number;
  height: number;
  children: React.ReactNode;
  onClose: () => void;
};

function Modal({ children, ...props }: Props) {
  const bgColor = useContext(BgColorContext);
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    setVisible(props.visible);
  }, [props.visible]);
  return (
    <ModalContext.Provider value={{ ...props, visible }}>
      <ModalAnimation>
        <NeumorphismContainer
          width={props.width + "px"}
          height={props.height + "px"}
          borderRadius="10px"
          bgColor={bgColor as string}
          style={{ backdropFilter: "blur(50px)", opacity: 0.7 }}
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
            }}
          >
            <BsX size={40} />
          </Button>
        </NeumorphismContainer>
      </ModalAnimation>
    </ModalContext.Provider>
  );
}

export default Modal;
