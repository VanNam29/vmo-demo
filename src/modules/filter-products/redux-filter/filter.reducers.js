import produce from "immer";
import { CHANGE_FILTER } from "../../../constants/constants";

const initialState = {
  filter: "",
};

const filterReducer = (state = initialState, action) =>
  // eslint-disable-next-line arrow-parens
  produce(state, (draft) => {
    switch (action.type) {
      case CHANGE_FILTER: {
        const changeFilter = action.payload;
        draft.filter = changeFilter;
        break;
      }
      default: {
        break;
      }
    }
  });

export default filterReducer;
