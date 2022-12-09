import { ReactNode, MouseEventHandler } from "react";
export interface IButton {
  width?: string;
  height?: string;
  borderRadius?: string;
  variant?: string;
  color?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "reset" | "button" | undefined;
}
