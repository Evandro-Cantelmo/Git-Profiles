import React, { ChangeEvent, useContext } from "react";
import { Context } from "../../context/Context";
import { MaterialUISwitch } from "./styles";

/**
 * @export
 * @component
 * @name SwitchDark
 *
 *
 * @description
 * SwitchDark
 */

export default function SwitchDark() {
  const { setdarkmode, darkmode } = useContext(Context);

  const handleEvent = (e: ChangeEvent<HTMLInputElement>) => {
    setdarkmode(!darkmode);
  };
  return (
    <MaterialUISwitch
      onChange={handleEvent}
      sx={{ m: 1 }}
      checked={!darkmode}
    />
  );
}
