import AuthApiService from "./AuthApiService";
import { LoginBody, SignUpBody } from "./RequestBody";

export const signup = async (body: SignUpBody) => {
  try {
    const result = await AuthApiService.signup(body);

    return result.data;
  } catch (e) {
    console.error(e);

    return null;
  }
};

export const login = async (body: LoginBody) => {
  try {
    const result = await AuthApiService.login(body);

    return result.data;
  } catch (e) {
    console.error(e);

    return null;
  }
};

export const logout = async () => {
  try {
    const result = await AuthApiService.logout();

    return result.data;
  } catch (e) {
    console.error(e);

    return false;
  }
};

export const getMyInfo = async () => {
  try {
    const result = await AuthApiService.getMyInfo();

    return result.data;
  } catch (e) {
    console.error(e);

    return null;
  }
};
