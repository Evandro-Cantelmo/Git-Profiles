import { IButton } from "../../interfaces/Button.interface";
import { CustomButtonUi } from "./styles";

/**
 * @export
 * @component
 * @name CustomButtons
 *
 *
 * @description
 * CustomButtons
 */

export default function CustomButtons({
  children,
  borderRadius,
  height,
  width,
}: IButton) {
  return (
    <CustomButtonUi
      variant="contained"
      color="primary"
      width={width}
      height={height}
      borderRadius={borderRadius}
    >
      {children}
    </CustomButtonUi>
  );
}
