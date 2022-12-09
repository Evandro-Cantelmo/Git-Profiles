export type ContextData = {
  darkMode: boolean;
  IsShow: boolean;
  username: string;
  User?: string;
  data: any;
  openSnack: {
    open?: boolean;
    message: string;
    severity?: "error" | "info" | "success" | "warning";
  };

  handleGetJobsByID?: () => void;
  handleGetJobsByIDRepo?: () => void;
};

export interface IContextData {
  handleGetJobsByID: () => Promise<void>;
  handleGetJobsByIDRepo: () => Promise<void>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  IsShow: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  openSnack: any;
  setOpenSnack: React.Dispatch<React.SetStateAction<any>>;
}
