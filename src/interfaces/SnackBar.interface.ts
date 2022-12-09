export interface ISnackBar {
  open?: boolean;
  message?: string;
  severity?: "error" | "info" | "success" | "warning";
}
