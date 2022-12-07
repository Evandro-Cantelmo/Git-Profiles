import React, { useContext } from "react";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { MaterialUiInput } from "./styles";
import CustomButtons from "../Button";
import { IInput } from "../../interfaces/Input.interface";
import { Context } from "../../context/Context";
import { darkTheme, lightTheme } from "../../styles/theme";

/**
 * @export
 * @component
 * @name Input
 *
 *
 * @description
 * Input
 */

export default function Input({ placeholder }: IInput) {
  const { darkMode } = useContext(Context);
  return (
    <MaterialUiInput
      id="outlined-basic"
      variant="standard"
      placeholder={placeholder}
      darkMode={darkMode ? darkTheme : lightTheme}
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="primary" fontSize="large" />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <CustomButtons
              borderRadius="0px 10px 10px 0px"
              height="60px"
              width="10vw"
            >
              Search
            </CustomButtons>
          </InputAdornment>
        ),
      }}
    />
  );
}
