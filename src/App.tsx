import React, { useState } from "react";
import "./App.css";
import useBackgroundColor from "./hooks/useBackgroundColor";
import { BgColorContext } from "./context/BgColorContext";
import Button from "./components/Button";
import Modal from "./components/Modal";

function App() {
  useBackgroundColor("#814747");
  const bgColor = useBackgroundColor();
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <BgColorContext.Provider value={bgColor}>
      <div className="App">
        <Button
          style={{ color: "#ffffff" }}
          size="default"
          onClick={() => {
            setVisible(true);
          }}
        >
          Button
        </Button>
        <Modal
          width={1000}
          height={500}
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
        >
          Modal
        </Modal>
      </div>
    </BgColorContext.Provider>
  );
}

export default App;
