import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { myTheme } from "./components/Theme/Theme.styled";
import Card from "./components/functionalComponents/Card";

function App() {
  return (
    <div className="App">
      <Box>
        <Card />
      </Box>
    </div>
  );
}

export default App;

const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${myTheme.colors.globalBackground};
`;
