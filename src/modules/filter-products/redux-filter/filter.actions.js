import { CHANGE_FILTER } from "../../../constants/constants";

// eslint-disable-next-line arrow-parens
export const changeFilter = (filter) => {
  return {
    type: CHANGE_FILTER,
    payload: filter,
  };
};
