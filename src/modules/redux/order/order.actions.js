import { ADD_ORDER, ADD_ORDER_ERROR } from "../../../constants/constants";

export const addOrderAction = () => {
  return {
    type: ADD_ORDER,
  };
};

export const addOrderActionErr = () => {
  return {
    type: ADD_ORDER_ERROR,
  };
};
