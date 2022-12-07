import { ReactNode } from "react";
export interface IButton{
    width?: string;
    height?: string;
    borderRadius?: string;
    variant?: string;
    color?: string;
    children?:ReactNode
}