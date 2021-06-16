import { LOGIN_ERROR, LOGIN_SUCCESS } from "../../../constants/constants";

export const loginSuccessAction = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export const loginErrorAction = () => {
  return {
    type: LOGIN_ERROR,
  };
};
