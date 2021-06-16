import { useEffect, useState } from "react";
import { CARD, CATEGORY, COMMENT, PRODUCT } from "../../constants/constants";
import firebase from "../../services/firebase";

export const useCustomCard = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection(CARD)
      .onSnapshot(snapshot => {
        const listCard = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setList(listCard);
      });
  }, []);
  return list;
};

export const useCustomProduct = () => {
  const [list, setList] = useState();
  useEffect(() => {
    firebase
      .firestore()
      .collection(PRODUCT)
      .onSnapshot(snapshot => {
        const listProduct = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setList(listProduct);
      });
  }, []);
  return list;
};

export const useCustomCategory = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection(CATEGORY)
      .onSnapshot(snapshot => {
        const listCard = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setList(listCard);
      });
  }, []);
  return list;
};

export const useCustomComment = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection(COMMENT)
      .onSnapshot(snapshot => {
        const listComment = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setList(listComment);
      });
  }, []);
  return list;
};
