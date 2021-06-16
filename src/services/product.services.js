/* eslint-disable arrow-parens */
import { PRODUCT } from "../constants/constants";
import {
  addProductAction,
  addProductErrorAction,
  deleteProductAction,
  getAllProductAc,
  getAllProductErrAc,
  searchProductAction,
  updateProductAction,
  updateProductCommentAc,
  updateProductCommentErrAc,
} from "../modules/product/product.actions";

export const addProduct = (product) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection(PRODUCT)
      .add({
        ...product,
      })
      .then(() => {
        dispatch(addProductAction());
      })
      .catch(() => {
        dispatch(addProductErrorAction());
      });
  };
};

export const getAllProduct = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection(PRODUCT)
      .get()
      .then((query) => {
        const thing = query.docs;
        const newData = thing.map((item) => item.data());
        console.log("thing", thing.data());
        dispatch(getAllProductAc(newData));
      })
      .catch(() => {
        dispatch(getAllProductErrAc());
      });
  };
};

export const updateProductComment = (id, newComment) => {
  return (dispatch, getState, { getFirebase }) => {
    // dispatch(updateProductCommentPending());
    const firestore = getFirebase().firestore();

    firestore
      .collection(PRODUCT)
      .where("id", "==", id)
      .limit(1)
      .get()
      .then((query) => {
        const thing = query.docs[0];
        const currVal = thing.data();
        thing.ref.update({ ...currVal, comment: [newComment, ...currVal.comment] });
        dispatch(updateProductCommentAc());
      })
      .catch(() => {
        dispatch(updateProductCommentErrAc());
      });
  };
};

export const searchProduct = (searchString) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection(PRODUCT)
      .where("keywords", "array-contains", searchString.toLowerCase())
      .orderBy("name")
      .get()
      .then((query) => {
        const thing = query.docs;
        console.log(thing.data());
        dispatch(searchProductAction());
      });
  };
};

export const deleteProduct = (id) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection(PRODUCT)
      .get()
      .then((query) => {
        const thing = query.docs;
        thing.forEach((doc) => {
          if (doc.data().id === id) {
            doc.ref.delete();
          }
        });
        dispatch(deleteProductAction());
      });
  };
};

export const updateProduct = (product) => {
  return (dispatch, getState, { getFirebase }) => {
    // dispatch(updateProductCommentPending());
    const firestore = getFirebase().firestore();

    firestore
      .collection(PRODUCT)
      .where("id", "==", product.id)
      .limit(1)
      .get()
      .then((query) => {
        const thing = query.docs[0];
        const currVal = thing.data();
        thing.ref.update({
          ...currVal,
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity: product.quantity,
          nameCategory: product.nameCategory,
          description: product.description,
        });
        dispatch(updateProductAction());
      });
  };
};
