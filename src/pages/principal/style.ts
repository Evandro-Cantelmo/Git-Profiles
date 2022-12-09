import styled from "styled-components";
import { ISection } from "../../interfaces/section.interface";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  width: 100vw;
  height: 100vh;
`;
export const Header = styled.header`
  grid-column: 1/7;
  grid-row: 1;
  display: flex;
  justify-content: space-between;
  padding: 0 60px;
  align-items: center;
`;
export const Section = styled.section<ISection>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  grid-column: 2/6;
  grid-row: ${(props) => props.gridRow};
`;
