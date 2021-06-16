import { useEffect, useState } from "react";
import { PRODUCT } from "../../constants/constants";
import firebase from "../../services/firebase";

export const useCustomCard = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection(PRODUCT)
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
