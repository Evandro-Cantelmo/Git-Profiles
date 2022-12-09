import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

type BoxSection = {
  width: string;
  height: string;
  darkMode: any;
  display?: string;
};

export const Box = styled(Paper)<BoxSection>(
  ({ width, darkMode, height, display }) => ({
    display: display,
    width: width,
    height: height,
    color: darkMode.text,
    background: darkMode.cardBack,
    borderRadius: "10px",
  })
);
