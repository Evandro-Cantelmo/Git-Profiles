import { useContext } from "react";
import SwitchDark from "../../components/Switch";
import { Context } from "../../context/Context";
import { Container, Header } from "./style";

export default function Principal() {
  return (
    <Container>
      <Header>
        <h1>Github Profiles</h1>
        <SwitchDark />
      </Header>
    </Container>
  );
}
