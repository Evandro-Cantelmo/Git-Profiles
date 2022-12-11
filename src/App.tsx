import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { Context } from "./context/Context";
import Principal from "./pages/principal";
import GlobalStyle from "./styles/GlobalStyles";
import { darkTheme, lightTheme } from "./styles/theme";
/**
 * @export
 * @component
 * @name App
 *
 *
 * @description
 * App
 */

function App() {
  const { darkmode } = useContext(Context);

  return (
    <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Principal />
    </ThemeProvider>
  );
}

export default App;
