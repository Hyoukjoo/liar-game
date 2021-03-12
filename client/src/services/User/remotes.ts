import UserApiService from "@services/User/UserApiService";

export const createUser = async (userName: string) => {
  try {
    const result = await UserApiService.createUser(userName);

    return result.data;
  } catch (e) {
    console.error(e);

    return null;
  }
};

export const deleteUser = async (userId) => {
  try {
    const result = await UserApiService.deleteUser(userId);

    return result;
  } catch (e) {
    console.error(e);

    return null;
  }
};
