export type ContextData = {
  darkmode: boolean;
  IsShow: boolean;
  username: string;
  User?: string;
  data: any;

  openSnack: {
    open?: boolean;
    message: string;
    severity?: "error" | "info" | "success" | "warning";
  };

  HandleGetUser?: () => void;
  HandleGetRepo?: () => void;
  styleMode: () => any;
};

export interface IContextData {
  HandleGetUser: () => Promise<void>;
  HandleGetRepo: () => Promise<void>;
  styleMode: () => any;

  username: string;
  userData?: any;
  userRepoData?: any;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  IsShow: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  darkmode: boolean;
  setdarkmode: React.Dispatch<React.SetStateAction<boolean>>;
  openSnack: any;
  setOpenSnack: React.Dispatch<React.SetStateAction<any>>;
}
