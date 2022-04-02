import React, { useState } from "react";
import "./App.css";
import useBackgroundColor from "./hooks/useBackgroundColor";
import { BgColorContext } from "./context/BgColorContext";
import Button from "./components/Button";
import Modal from "./components/Modal";
import useTheme from "./hooks/useTheme";

function App() {
  useBackgroundColor("#d08383");
  const bgColor = useBackgroundColor();
  const [visible, setVisible] = useState<boolean>(false);
  const theme = useTheme();
  return (
    <BgColorContext.Provider value={bgColor}>
      <div className="App">
        <Button
          style={{ color: "#ffffff" }}
          size="default"
          onClick={() => {
            setVisible(true);
            console.log(theme);
          }}
        >
          Button
        </Button>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "3rem",
            verticalAlign: "middle",
            marginTop: "200px",
            backgroundColor: "#ffffff",
            textAlign: "center",
            width: "500px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          This is a Paragraph!!!
        </div>
        <Modal
          width={1000}
          height={500}
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
        >
          <div style={{ color: "white", fontSize: "2rem" }}>Modal</div>
        </Modal>
      </div>
    </BgColorContext.Provider>
  );
}

export default App;
