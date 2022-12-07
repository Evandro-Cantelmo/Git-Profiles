import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

type ButtonType = {
  width?: string;
  height?: string;
  borderRadius?: string;
  variant?: string;
  color?: string;
};
export const CustomButtonUi = styled(Button)<ButtonType>(
  ({ width, height, borderRadius }) => ({
    borderRadius: borderRadius,
    height: height,
    width: width,
  })
);
