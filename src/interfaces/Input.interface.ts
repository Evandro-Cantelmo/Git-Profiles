import { MouseEventHandler, FormEventHandler } from "react";
export interface IInput {
  type?: "submit" | "reset" | "button" | undefined;
  onChange: any;
  placeholder?: string;
  value?: (e: any) => void;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
