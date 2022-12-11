import React, { createContext, useState, useCallback } from "react";
import { IContextData } from "../interfaces/contextData.interface";
import { IContextProvider } from "../interfaces/contextProvider.interface";
import { GithubApi, GithubRepoApi } from "../services/Github/githubApi";
import { darkTheme, lightTheme } from "../styles/theme";

const Context = createContext({} as IContextData);

/**
 * @export
 * @component
 * @name ContextProvider
 *
 * @description
 * Context Provider
 */

function ContextProvider({ children }: IContextProvider) {
  const [darkmode, setdarkmode] = useState(true);
  const [IsShow, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState<any>();
  const [userRepoData, setUserRepoData] = useState();
  const [openSnack, setOpenSnack] = useState({
    message: "",
    severity: "",
    open: false,
  });

  if (openSnack.open === true) {
    setTimeout(() => {
      setOpenSnack({
        ...openSnack,
        open: false,
      });
    }, 2000);
  }

  const HandleGetUser = async () => {
    const payload = {
      User: username,
    };

    try {
      const res = await GithubApi({
        ...payload,
      });
      const { data, status } = res;

      switch (status) {
        case 200:
          setUserData(data);
          setShow(true);
          setOpenSnack({
            ...openSnack,
            open: false,
          });
          break;
        case 404:
          setOpenSnack({
            open: true,
            message: `User not found`,
            severity: "error",
          });
          break;
        case 403:
          setOpenSnack({
            open: true,
            message: `limit exceeded`,
            severity: "error",
          });
          break;

        default:
          setOpenSnack({
            open: true,
            message: `Opps!! Something went wrong`,
            severity: "error",
          });
          break;
      }
    } catch (erro) {
      setOpenSnack({
        open: true,
        message: `Opps!! Something went wrong`,
        severity: "error",
      });
    }
  };
  const HandleGetRepo = async () => {
    const payload = {
      User: username,
    };

    try {
      const res = await GithubRepoApi({
        ...payload,
      });
      const { data, status } = res;

      switch (status) {
        case 200:
          setUserRepoData(data);
          break;
      }
    } catch (erro) {
      setOpenSnack({
        open: true,
        message: `Opps!! Something went wrong`,
        severity: "error",
      });
    }
  };
  function styleMode() {
    return darkmode ? darkTheme : lightTheme;
  }

  return (
    <Context.Provider
      value={{
        darkmode,
        setdarkmode,
        IsShow,
        setShow,
        username,
        setUsername,
        HandleGetUser,
        HandleGetRepo,
        openSnack,
        setOpenSnack,
        userData,
        userRepoData,
        styleMode,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
