export type ContextData = {
  darkMode: boolean;
};

export interface IContextData {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
