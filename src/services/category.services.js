import { CATEGORY } from "../constants/constants";
import { getAllCategoryAc } from "../modules/redux/category/category.actions";

export const getAllCategory = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection(CATEGORY)
      .get()
      .then(query => {
        const thing = query.docs;
        const newData = thing.map(item => item.data());
        dispatch(getAllCategoryAc(newData));
      });
    //   .catch(() => {
    //     dispatch(getAllCategoryAc());
    //   });
  };
};
