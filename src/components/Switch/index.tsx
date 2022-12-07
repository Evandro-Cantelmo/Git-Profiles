import React, { ChangeEvent, useContext } from "react";
import { Context } from "../../context/Context";
import { MaterialUISwitch } from "./styles";

/**
 * @export
 * @component
 * @name Switch
 *
 *
 * @description
 * Switch
 */

export default function SwitchDark() {
  const { setDarkMode, darkMode } = useContext(Context);

  const handleEvent = (e: ChangeEvent<HTMLInputElement>) => {
    setDarkMode(!darkMode);
  };
  return (
    <MaterialUISwitch
      onChange={handleEvent}
      sx={{ m: 1 }}
      checked={!darkMode}
    />
  );
}
