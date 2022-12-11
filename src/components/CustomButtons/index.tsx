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
  borderradius,
  height,
  width,
  onClick,
  type,
}: IButton) {
  return (
    <CustomButtonUi
  
      variant="contained"
      color="primary"
      onClick={onClick}
      width={width}
      type={type}
      height={height}
      borderradius={borderradius}
    >
      {children}
    </CustomButtonUi>
  );
}
