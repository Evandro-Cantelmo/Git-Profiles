import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

type ButtonType = {
  width?: string;
  height?: string;
  borderradius?: string;
  variant?: string;
  color?: string;
};
export const CustomButtonUi = styled(Button)<ButtonType>(
  ({ width, height, borderradius }) => ({
    borderRadius: borderradius,
    height: height,
    width: width,
  })
);
