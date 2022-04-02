import React from "react";

type Props = {
  visible: boolean;
  width: number;
  height: number;
}

export const ModalContext = React.createContext<Props | null>(null);