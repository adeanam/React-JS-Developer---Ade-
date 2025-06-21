export const GITHUB_DEFAULT_HEADERS = {
  'X-GitHub-Api-Version': import.meta.env.GITHUB_API_VERSION,
  'Authorization': `${import.meta.env.GITHUB_API_TOKEN}`,
};