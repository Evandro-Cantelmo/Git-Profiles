import { useContext } from "react";
import { Context } from "../../context/Context";
import BoxConteiner from "../BoxConteiner";
import {
  Container,
  GitCardContainer,
  ProfileContainer,
  RepoContainer,
} from "./styles";

/**
 * @export
 * @component
 * @name BlackBoard
 *
 *
 * @description
 * BlackBoard
 */

export default function BlackBoard() {
  const { userData, userRepoData, styleMode } = useContext(Context);

  return (
    <Container>
      <ProfileContainer>
        <div>
          <img src={userData?.avatar_url} alt="User photo" />

          <h3>{userData?.name}</h3>
          <p>{userData?.login}</p>
        </div>
        <div>
          <span>
            <p>Followers: {userData?.followers}</p>
            <p>Following: {userData?.following}</p>
            <p>Repository: {userData?.public_repos}</p>
          </span>
        </div>
      </ProfileContainer>
      <RepoContainer Color={styleMode().gitRepoCard}>
        {userRepoData?.length > 0 ? (
          userRepoData?.slice(0, 4)?.map((Repo: any) => (
            <BoxConteiner
              key={Repo?.id}
              width="90%"
              height="80px"
              margin="10px 0"
            >
              <GitCardContainer>
                <a href={Repo.html_url} target="_blank">
                  <p>{Repo?.name}</p>
                </a>
                <p>
                  {Repo.description
                    ? `${Repo?.description?.substring(0, 50)}...`
                    : "No description"}
                </p>
                <div>
                  <span>
                    Lang: {Repo?.language ? Repo?.language : "unknown"}
                  </span>
                  <span>Stars: {Repo?.stargazers_count}</span>
                  <span>Forks: {Repo?.forks}</span>
                </div>
              </GitCardContainer>
            </BoxConteiner>
          ))
        ) : (
          <h4>No repository</h4>
        )}
      </RepoContainer>
    </Container>
  );
}
