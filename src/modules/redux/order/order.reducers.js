import { ADD_ORDER, ADD_ORDER_ERROR } from "../../../constants/constants";

const initialState = {};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER: {
      return state;
    }
    case ADD_ORDER_ERROR: {
      return state;
    }
    default: {
      return state;
    }
  }
};
