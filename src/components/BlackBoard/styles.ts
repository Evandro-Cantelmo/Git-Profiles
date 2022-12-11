import styled from "styled-components";
import { IGithub } from "../../interfaces/github.interface";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  width: 100%;
  height: 100%;

  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    overflow-x: auto;
  }
`;
export const ProfileContainer = styled.div`
  display: flex;
  grid-column: 1/2;
  grid-row: 1;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  div {
    text-align: center;
  }
  span {
    @media (max-width: 1080px) {
      display: flex;
      margin: 10px;
      gap: 10px;
    }
  }
`;

export const RepoContainer = styled.div<IGithub>`
  display: flex;
  grid-column: 2/4;
  flex-flow: wrap;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
  background: ${(props) => props.Color};
  overflow-x: hidden;

  grid-row: 1;
  border-radius: 10px;
`;
export const GitCardContainer = styled.div`
  display: flex;
  padding: 0 15px;
  overflow: hidden;
  word-wrap: normal;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  span {
    margin: 0 10px 0 0;
  }
  a {
    color: #1976d2;
    text-decoration: none;
  }
`;
