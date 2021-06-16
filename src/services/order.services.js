import { ORDER } from "../constants/constants";
import { addOrderAction, addOrderActionErr } from "../modules/redux/order/order.actions";

export const addOrder = order => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection(ORDER)
      .add({
        ...order,
      })
      .then(() => {
        dispatch(addOrderAction());
      })
      .catch(() => {
        dispatch(addOrderActionErr());
      });
  };
};
