
import { API } from "../helper/api_helper";

export const GetAllRepository = async (repoName: string) => {
      try {
            const response = await API.request(`GET /search/repositories?q=${repoName}&per_page=5`)
            return response.data;
      } catch (error) {
            throw "Failed to fetch repositories!";
      }
};

