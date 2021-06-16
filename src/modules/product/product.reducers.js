import {
  ADD_PRODUCT,
  ADD_PRODUCT_ERROR,
  DELETE_PRODUCT,
  DELETE_PRODUCT_ERROR,
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_ERROR,
  SEARCH_PRODUCT_NAME,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_COMMENT,
  UPDATE_PRODUCT_COMMENT_ERROR,
} from "../../constants/constants";
import { toast } from "react-toastify";

const initialState = {};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS: {
      return state;
    }
    case GET_ALL_PRODUCTS_ERROR: {
      return state;
    }
    case ADD_PRODUCT: {
      toast.success("Add product success");
      return state;
    }
    case ADD_PRODUCT_ERROR: {
      toast.error("Add product error");
      return state;
    }
    case UPDATE_PRODUCT: {
      toast.success("Update product success");
      return state;
    }
    case DELETE_PRODUCT: {
      toast.error("Admin remove product success");
      return state;
    }
    case DELETE_PRODUCT_ERROR: {
      return state;
    }
    case UPDATE_PRODUCT_COMMENT: {
      toast.success("Add new comment success");
      return state;
    }
    case UPDATE_PRODUCT_COMMENT_ERROR: {
      return state;
    }
    case SEARCH_PRODUCT_NAME: {
      return state;
    }
    default:
      return state;
  }
};
