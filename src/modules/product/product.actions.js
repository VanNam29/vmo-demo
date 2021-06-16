/* eslint-disable arrow-parens */
import {
  ADD_PRODUCT,
  ADD_PRODUCT_ERROR,
  DELETE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_ERROR,
  SEARCH_PRODUCT_NAME,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_COMMENT,
  UPDATE_PRODUCT_COMMENT_ERROR,
} from "../../constants/constants";

export const addProductAction = () => {
  return {
    type: ADD_PRODUCT,
  };
};

export const addProductErrorAction = () => {
  return {
    type: ADD_PRODUCT_ERROR,
  };
};

export const updateProductAction = () => {
  return {
    type: UPDATE_PRODUCT,
  };
};

export const updateProductCommentAc = () => {
  return {
    type: UPDATE_PRODUCT_COMMENT,
  };
};

export const updateProductCommentErrAc = () => {
  return {
    type: UPDATE_PRODUCT_COMMENT_ERROR,
  };
};

export const getAllProductAc = (data) => {
  return {
    type: GET_ALL_PRODUCTS,
    payload: data,
  };
};

export const getAllProductErrAc = () => {
  return {
    type: GET_ALL_PRODUCTS_ERROR,
  };
};

export const searchProductAction = () => {
  return {
    type: SEARCH_PRODUCT_NAME,
  };
};

export const deleteProductAction = () => {
  return {
    type: DELETE_PRODUCT,
  };
};
