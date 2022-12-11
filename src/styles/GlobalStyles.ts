import { createGlobalStyle, css } from "styled-components";

import "styled-components";

const GlobalStyle = createGlobalStyle`
  ${css`
    #root {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      width: 100vw;
      min-height: 100vh;
    }

    * {
      padding: 0;
      margin: 0;
      font-family: "Roboto", sans-serif;
      box-sizing: border-box;
      ::-webkit-scrollbar {
        width: 10px;
      }

      ::-webkit-scrollbar-track {
        margin: 10px;

        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb {
        background: #1976d2;
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #3a80c6;
      }
    }

    body {
      background: ${(props) => props.theme.background};
      color: ${(props) => props.theme.text};
      transition-property: color, background;
      transition-duration: 0.2s;
      transition-timing-function: linear;
    }
    form {
      display: contents;
    }
  `}
`;

export default GlobalStyle;
