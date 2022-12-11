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

export default function BoxConteiner({
  display,
  width,
  height,
  margin,
  children,
}: IBoxSection) {
  const { darkmode } = useContext(Context);

  return (
    <Box
      display={display}
      width={width}
      margin ={margin}
      height={height}
      darkmode={darkmode ? darkTheme : lightTheme}
      elevation={7}
    >
      {children}
    </Box>
  );
}
