import {
  ADD_CARD,
  ADD_CARD_ERROR,
  CHANGE_PURCHASE,
  DELETE_CARD,
  DESCREMENT_QUANTITY_CARD,
  GET_ALL_CARD,
  INCREMENT_QUANTITY_CARD,
} from "../../../constants/constants";
import { toast } from "react-toastify";

const initialState = {};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CARD: {
      return state;
    }
    case ADD_CARD: {
      toast.success("Add into card success");
      return state;
    }
    case ADD_CARD_ERROR: {
      toast.error("Add into card fail");
      return state;
    }
    case DELETE_CARD: {
      toast.error("Delete card success");
      return state;
    }
    case INCREMENT_QUANTITY_CARD: {
      toast.success("Add card success");
      return state;
    }
    case DESCREMENT_QUANTITY_CARD: {
      return state;
    }
    case CHANGE_PURCHASE: {
      return state;
    }
    default: {
      return state;
    }
  }
};
