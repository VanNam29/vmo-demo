import { GET_CATEGORY } from "../../../constants/constants";

export const getAllCategoryAc = data => {
  return {
    type: GET_CATEGORY,
    payload: data,
  };
};
