import React, { useContext, useState } from "react";
import { animated, useSpring } from "react-spring";
import { CSSProperties } from "styled-components";
import { ModalContext } from "../../../context/ModalContext";

type Props = {
  children: React.ReactNode;
};

function ModalAnimation({ children }: Props) {
  const modalProps = useContext(ModalContext);
  const styles = useSpring<CSSProperties>({
    from: {
      opacity: 0,
      transform: "scale(1.1)",
    },
    to: async (next, cancel) => {
      if (modalProps?.visible) {
        await next({
          transform: "scale(1.3)",
          config: {
            duration: 100,
          },
        });
      }
      await next({
        opacity: modalProps?.visible ? 1 : 0,
        transform: modalProps?.visible ? "scale(1)" : "scale(0)",
      });
    },
  });

  return (
    <animated.div
      style={{
        ...styles,
        width: modalProps?.width,
        height: modalProps?.height,
        position: "absolute",
        top: "50%",
        left: "50%",
        marginTop: `${-((modalProps?.height as number) / 2)}px`,
        marginLeft: `${-((modalProps?.width as number) / 2)}px`,
      }}
    >
      {children}
    </animated.div>
  );
}

export default ModalAnimation;
