import {
  ADD_CARD,
  ADD_CARD_ERROR,
  CHANGE_PURCHASE,
  CHANGE_PURCHASE_ERROR,
  DELETE_CARD,
  DELETE_CARD_ERROR,
  DESCREMENT_QUANTITY_CARD,
  DESCREMENT_QUANTITY_CARD_ERROR,
  GET_ALL_CARD,
  GET_ALL_CARD_ERROR,
  INCREMENT_QUANTITY_CARD,
  INCREMENT_QUANTITY_CARD_ERROR,
} from "../../../constants/constants";

export const addCardAction = card => {
  return {
    type: ADD_CARD,
    payload: card,
  };
};

export const addCardActionErr = card => {
  return {
    type: ADD_CARD_ERROR,
    payload: card,
  };
};

export const getALlCardAction = () => {
  return {
    type: GET_ALL_CARD,
  };
};

export const getALlCardActionErr = () => {
  return {
    type: GET_ALL_CARD_ERROR,
  };
};

export const deleteCardAction = () => {
  return {
    type: DELETE_CARD,
  };
};

export const deleteCardActionErr = () => {
  return {
    type: DELETE_CARD_ERROR,
  };
};

export const incQuantityCardAction = card => {
  return {
    type: INCREMENT_QUANTITY_CARD,
    payload: card,
  };
};

export const incQuantityCardActionErr = () => {
  return {
    type: INCREMENT_QUANTITY_CARD_ERROR,
  };
};

export const desQuantityCardAction = card => {
  return {
    type: DESCREMENT_QUANTITY_CARD,
    payload: card,
  };
};

export const desQuantityCardActionErr = () => {
  return {
    type: DESCREMENT_QUANTITY_CARD_ERROR,
  };
};

export const changePurchaseAction = () => {
  return {
    type: CHANGE_PURCHASE,
  };
};

export const changePurchaseActionErr = () => {
  return {
    type: CHANGE_PURCHASE_ERROR,
  };
};
