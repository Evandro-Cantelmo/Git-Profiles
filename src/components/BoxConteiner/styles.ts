import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

type BoxSection = {
  width: string;
  height: string;
  darkmode: any;
  display?: string;
  margin?: string
};

export const Box = styled(Paper)<BoxSection>(
  ({ width, darkmode, height, display, margin }) => ({
    display: display,
    width: width,
    height: height,
    color: darkmode.text,
    margin: margin,
    background: darkmode.cardBack,
    borderRadius: "10px",
  })
);
