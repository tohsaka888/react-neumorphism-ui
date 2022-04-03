import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Modal from "./components/Modal";
import ThemeProvider from "./components/ThemeProvider/Index";

function App() {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <ThemeProvider bgColor="#3b2323">
      <div className="App">
        <Button
          size="default"
          onClick={() => {
            setVisible(true);
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
          <div style={{ fontSize: "2rem" }}>Modal</div>
        </Modal>
      </div>
    </ThemeProvider>
  );
}

export default App;
