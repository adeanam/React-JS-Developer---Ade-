
import { API } from "../helper/api_helper";
import type { IUser, IItemsUser } from '../interface/i_users';
import type { IRepository } from '../interface/i_repository';

export const GetSearchedUser = async (repoName: string) => {
      try {
            const response = await API.request(`GET /search/users?q=${repoName}&per_page=5`)
            const result = await GetUserRepository(response.data)
            return result;
      } catch (error) {
            throw "Failed to fetch users!";
      }
};

export const GetUserRepository = async (userList: IUser) => {
      try {
            const getListRepoUser = userList.items.map(async (user: IItemsUser) => {
                  const response = await API.request(`GET /users/${user.login}/repos`);
                  const getItemsUser: IRepository[] = response.data;
                  return {
                        ...user,
                        list_repository: getItemsUser,
                  };
            });
            const finishPromises = await Promise.all(getListRepoUser);
            const transformedData: IUser = {...userList, items: finishPromises};
            return transformedData;
      } catch (error) {
            throw "Failed to fetch repositories!";
      }
};

// export const GetUserRepository = async (userList: IUser) => {
//       try {
//             const transformedData = await Promise.all(
//                   userList.items.map(async (user: IItemsUser) => {
//                         const response = await API.request(`GET /users/${user.login}/repos`);
//                         let getItemsUser: IRepository[] = response.data;

//                         // Merge user with their repositories
//                         return {
//                               ...user,
//                               list_repository: getItemsUser
//                         };
//                   })
//             );
//       return transformedData;

//       } catch (error) {
//             throw "Failed to fetch repositories!";
//       }
// };



