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

      padding: 27.5px;
    }

    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    body {
      background: ${(props) => props.theme.background};
      color: ${(props) => props.theme.text};
      transition: background ease 1s;
    }
  `}
`;

export default GlobalStyle;
