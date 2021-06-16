import { GET_CATEGORY } from "../../../constants/constants";

const initialState = {};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY: {
      return state;
    }
    default: {
      return state;
    }
  }
};
