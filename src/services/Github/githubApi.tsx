import { Props } from "../../interfaces/github.interface";

export async function GithubApi({ User }: Props) {
  try {
    const response = await fetch(`https:/api.github.com/users/${User}`);
    const data = await response.json();

    return { error: false, data: data, status: response.status };
  } catch (error) {
    return { error: true };
  }
}
export async function GithubRepoApi({ User }: Props) {
  try {
    const response = await fetch(`https://api.github.com/users/${User}/repos`);
    const data = await response.json();
    data?.sort(
      (a: any, b: any) =>
        b?.forks + b?.stargazers_count - (a?.forks_count + a?.stargazers_count)
    );

    return { error: false, data: data, status: response.status };
  } catch (error) {
    return { error: true };
  }
}
