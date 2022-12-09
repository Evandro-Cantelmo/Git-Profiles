import React, { createContext, useState } from "react";
import { IContextData } from "../interfaces/contextData.interface";
import { IContextProvider } from "../interfaces/contextProvider.interface";
import { GithubApi, GithubRepoApi } from "../services/Github/githubApi";

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
  const [darkMode, setDarkMode] = useState(true);
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

  console.log(`ss foi`, userData, userRepoData);
  const handleGetJobsByID = async () => {
    const payload = {
      User: username,
    };

    try {
      const res = await GithubApi({
        ...payload,
      });
      const { error, data, status } = res;

      setUserData(data);
      if (status === 200) {
        setShow(true);
        setOpenSnack({
          ...openSnack,
          open: false,
        });
      } else if (status === 404) {
        setOpenSnack({
          open: true,
          message: `User not found`,
          severity: "error",
        });
      } else {
        setOpenSnack({
          open: true,
          message: `Opps!! Something went wrong`,
          severity: "error",
        });
      }
    } catch (erro) {
      setOpenSnack({
        open: true,
        message: `Opps!! Something went wrong`,
        severity: "error",
      });
    }
  };
  const handleGetJobsByIDRepo = async () => {
    const payload = {
      User: username,
    };

    try {
      const res = await GithubRepoApi({
        ...payload,
      });
      const { error, data, status } = res;

      setUserRepoData(data);
      if (status === 200) {
        setOpenSnack({
          ...openSnack,
          open: false,
        });
      } else if (status === 404) {
      } else {
        setOpenSnack({
          open: true,
          message: `Opps!! Something went wrong`,
          severity: "error",
        });
      }
    } catch (erro) {
      setOpenSnack({
        open: true,
        message: `Opps!! Something went wrong`,
        severity: "error",
      });
    }
  };

  return (
    <Context.Provider
      value={{
        darkMode,
        setDarkMode,
        IsShow,
        setShow,
        username,
        setUsername,
        handleGetJobsByID,
        handleGetJobsByIDRepo,
        openSnack,
        setOpenSnack,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
