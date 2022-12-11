import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

type ButtonType = {
  darkmode?: any;
};

export const MaterialUiInput = styled(TextField)<ButtonType>(
  ({ darkmode }) => ({
    height: "100%",
    width: "100%",

    borderRadius: "10px",
    textAlign: "center",
    "& .css-1aa5qj0-MuiInputBase-root-MuiInput-root": {
      height: "100vh",
      padding: "0 0 0 10px",
      color: darkmode.text,
      
    },
  })
);

