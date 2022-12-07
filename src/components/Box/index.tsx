import React, { useContext } from "react";
import { Box } from "./styles";
import { darkTheme, lightTheme } from "../../styles/theme";
import { Context } from "../../context/Context";
import { IBoxSection } from "../../interfaces/BoxSection.interface";

/**
 * @export
 * @component
 * @name BoxConteiner
 *
 *
 * @description
 * BoxConteiner
 */

export default function BoxConteiner({ width, height, children }: IBoxSection) {
  const { darkMode } = useContext(Context);

  return (
    <Box
      width={width}
      height={height}
      darkMode={darkMode ? darkTheme : lightTheme}
      elevation={7}
    >
      {children}
    </Box>
  );
}
