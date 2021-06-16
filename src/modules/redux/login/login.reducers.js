import { LOGIN_ERROR, LOGIN_SUCCESS } from "../../../constants/constants";
import { toast } from "react-toastify";

const initialState = {
  isAuthenticated: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      toast.success("login success");
      return {
        ...state,
        isAuthenticated: true,
      };
    }
    case LOGIN_ERROR: {
      toast.error("login fail");
      return {
        ...state,
        isAuthenticated: false,
      };
    }
    default: {
      return state;
    }
  }
};
