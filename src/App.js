import "./App.css";
import styled from "styled-components";
import React from "react";

function App() {
  return <AppContainer></AppContainer>;
}

const AppContainer = styled.div`
  width: 376px;
  height: 100vh;
  overflow: scroll;
  margin: 0 auto;
  background-color: white;
`;

export default App;
