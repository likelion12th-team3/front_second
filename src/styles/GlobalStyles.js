import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
export const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size:10px;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "SUITE-Regular";
    background-color: black;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  a {
    text-decoration: none;
  }
`;
