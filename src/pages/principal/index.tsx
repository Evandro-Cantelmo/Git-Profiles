import { useContext, FormEvent } from "react";
import BoxConteiner from "../../components/Box";
import Input from "../../components/Input";

import SwitchDark from "../../components/Switch";

import { Container, Header, Section } from "./style";
import { Context } from "../../context/Context";
import { noBlackBoard, withBlackBoard } from "../../styles/theme";
import Snack from "../../components/SnackBar";

export default function Principal() {
  const {
    IsShow,
    handleGetJobsByID,
    handleGetJobsByIDRepo,
    setUsername,
    openSnack,
  } = useContext(Context);

  function searchUserHandler(e: FormEvent) {
    e.preventDefault();
    handleGetJobsByID();
    handleGetJobsByIDRepo();
  }
  function test() {
    return IsShow ? withBlackBoard : noBlackBoard;
  }
  const handleEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <Container>
      <Header>
        <h1>Github Profiles</h1>
        <SwitchDark />
      </Header>

      <Section gridRow={test().gridRow}>
        <form onSubmit={searchUserHandler}>
          <BoxConteiner width="70%" height="60px">
            <Input
              type="submit"
              onChange={handleEvent}
              placeholder="Search a Github user"
            />
          </BoxConteiner>
        </form>

        <BoxConteiner
          display={test().display}
          width="70%"
          height="60vh"
        ></BoxConteiner>
      </Section>
      <Snack
        open={openSnack.open}
        message={openSnack.message}
        severity={openSnack.severity}
      />
    </Container>
  );
}
