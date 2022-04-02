import React from "react";
import "./App.css";
import { NeumorphismContainer } from "./styles/common.styles";
import useBackgroundColor from "./hooks/useBackgroundColor";
import { BgColorContext } from "./context/BgColorContext";
import Button from "./components/Button";

function App() {
  useBackgroundColor("#bf7272");
  const bgColor = useBackgroundColor();
  return (
    <BgColorContext.Provider value={bgColor}>
      <div className="App">
        <NeumorphismContainer
          width="50vw"
          height="50vh"
          bgColor={bgColor}
          borderRadius="10px"
          style={{ margin: "200px", padding: "20px" }}
        >
          <Button style={{ color: "#2e2c2c" }} size="default">
            Button
          </Button>
        </NeumorphismContainer>
      </div>
    </BgColorContext.Provider>
  );
}

export default App;
