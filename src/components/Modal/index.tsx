import React, { useContext, useEffect, useRef, useState } from "react";
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
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setVisible(props.visible);
    if (props.visible) {
      const body = document.querySelector("body");
      if (body) {
        body.style.overflow = "hidden";
        document.onmouseup = (e) => {
          if (
            e.target !== modalRef.current &&
            !modalRef.current?.contains(e.target as Node)
          ) {
            props.onClose();
          }
        };
      }
    }
  }, [props, props.visible]);
  return ReactDOM.createPortal(
    <ModalContext.Provider value={{ ...props, visible }}>
      <ModalAnimation>
        <NeumorphismContainer
          width={props.width + "px"}
          height={props.height + "px"}
          borderRadius="10px"
          bgColor={bgColor as string}
          style={{
            position: "relative",
            backgroundColor: `${(bgColor as string) + 70}`,
            zIndex: 100,
            // color: theme === "dark" ? windowColor?.dark : windowColor?.light,
          }}
        >
          <ModalMain ref={modalRef}>{children}</ModalMain>
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
              color: "inherit",
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
