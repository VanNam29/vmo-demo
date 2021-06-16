import { useEffect, useState } from "react";
import { CARD } from "../../constants/constants";
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
