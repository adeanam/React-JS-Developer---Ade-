import { Octokit } from "octokit";

export const API = new Octokit({ 
  auth: import.meta.env.GITHUB_API_TOKEN,
  request: {
    headers: {
      'X-GitHub-Api-Version': import.meta.env.GITHUB_API_VERSION
    }
  }
});
