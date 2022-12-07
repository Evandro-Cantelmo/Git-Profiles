import BoxConteiner from "../../components/Box";

import SwitchDark from "../../components/Switch";

import { Container, Header, Section } from "./style";

export default function Principal() {
  return (
    <Container>
      <Header>
        <h1>Github Profiles</h1>
        <SwitchDark />
      </Header>
      <Section>
        <BoxConteiner width="70%" height="60px">
          input
        </BoxConteiner>
        <BoxConteiner width="70%" height="60vh"></BoxConteiner>
      </Section>
    </Container>
  );
}
