import { CARD } from "../constants/constants";
import {
  addCardAction,
  addCardActionErr,
  changePurchaseAction,
  changePurchaseActionErr,
  deleteCardAction,
  deleteCardActionErr,
  desQuantityCardAction,
  getALlCardAction,
  getALlCardActionErr,
  incQuantityCardAction,
} from "../modules/redux/card/card.actions";

export const addCard = card => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection(CARD)
      .add({
        ...card,
      })
      .then(() => {
        dispatch(addCardAction(card));
      })
      .catch(() => {
        dispatch(addCardActionErr());
      });
  };
};

export const getAllCard = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection(CARD)
      .get()
      .then(query => {
        const listCard = [];
        query.docs.forEach(doc => {
          listCard.push(doc.data());
        });
        // console.log("list", listCard);
        dispatch(getALlCardAction());
        return listCard;
      })
      .catch(() => {
        dispatch(getALlCardActionErr());
      });
  };
};

export const deleteCard = card => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection(CARD)
      .get()
      .then(query => {
        query.docs.forEach(doc => {
          if (doc.data().id === card.id) {
            doc.ref.delete();
          }
        });
        dispatch(deleteCardAction());
      })
      .catch(() => {
        dispatch(deleteCardActionErr());
      });
  };
};

export const incQuantityCard = card => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection(CARD)
      .where("id", "==", card.id)
      .limit(1)
      .get()
      .then(query => {
        const thing = query.docs[0];
        const currVal = thing.data();
        thing.ref.update({ ...currVal, quantity: currVal.quantity + 1 });
        dispatch(incQuantityCardAction(card));
      })
      .catch(() => {
        dispatch();
      });
  };
};

export const desQuantityCard = card => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection(CARD)
      .where("id", "==", card.id)
      .limit(1)
      .get()
      .then(query => {
        const thing = query.docs[0];
        const currVal = thing.data();
        if (currVal.quantity > 1) {
          thing.ref.update({ ...currVal, quantity: currVal.quantity - 1 });
        }
        dispatch(desQuantityCardAction(card));
      })
      .catch(() => {
        dispatch();
      });
  };
};

export const changePurchase = card => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection(CARD)
      .where("id", "==", card.id)
      .get()
      .then(query => {
        const thing = query.docs[0];
        const currVal = thing.data();
        thing.ref.update({ ...currVal, checkPurchase: !currVal.checkPurchase });
        dispatch(changePurchaseAction());
      })
      .catch(() => {
        dispatch(changePurchaseActionErr);
      });
  };
};
