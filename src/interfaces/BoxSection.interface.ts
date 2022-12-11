import { ReactNode } from "react";

export interface IBoxSection {
  children?: ReactNode;
  width: string;
  height: string;
  display?: string;
  margin?: string;
}
