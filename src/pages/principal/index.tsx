import { useContext, FormEvent, useState, useEffect } from "react";
import BoxConteiner from "../../components/BoxConteiner";
import Input from "../../components/Input";

import SwitchDark from "../../components/SwitchDark";

import { Container, Header, Section } from "./style";
import { Context } from "../../context/Context";
import { noBlackBoard, withBlackBoard } from "../../styles/theme";
import Snack from "../../components/SnackBar";
import BlackBoard from "../../components/BlackBoard";

export default function Principal() {
  const [size, setSize] = useState({ width: "70%", height: "60vh" });
  const { IsShow, HandleGetUser, HandleGetRepo, setUsername, openSnack } =
    useContext(Context);

  function searchUserHandler(e: FormEvent) {
    e.preventDefault();
    HandleGetUser();
    HandleGetRepo();
  }
  function styleMode() {
    return IsShow ? withBlackBoard : noBlackBoard;
  }
  const handleEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    let maxWidth = window.matchMedia("(max-width: 700px)");
    function mediaQuery(a: any) {
      if (a.matches) {
        setSize({ ...size, width: "95vw" });
      } else {
        setSize({ width: "70%", height: "60vh" });
      }
    }
    mediaQuery(maxWidth);
    maxWidth.addEventListener("change", mediaQuery);
  }, []);

  return (
    <Container>
      <Header>
        <h1>Github Profiles</h1>
        <SwitchDark />
      </Header>

      <Section gridRow={styleMode().gridRow}>
        <form onSubmit={searchUserHandler}>
          <BoxConteiner width={size.width} height="60px">
            <Input
              type="submit"
              onChange={handleEvent}
              placeholder="Search a Github user"
            />
          </BoxConteiner>
        </form>

        <BoxConteiner
          display={styleMode().display}
          width={size.width}
          height={size.height}
        >
          <BlackBoard />
        </BoxConteiner>
      </Section>
      <Snack
        open={openSnack.open}
        message={openSnack.message}
        severity={openSnack.severity}
      />
    </Container>
  );
}
