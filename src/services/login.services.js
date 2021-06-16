// import { useHistory } from "react-router";
import { ADMIN } from "../constants/constants";
import { loginErrorAction, loginSuccessAction } from "../modules/redux/login/login.actions";

export const loginSuccess = user => {
  // const history = useHistory();
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection(ADMIN)
      .get()
      .then(query => {
        let check = false;
        const thing = query.docs;
        thing.map(item => {
          if (user.user === item.data().user && user.pass === item.data().pass) {
            check = true;
          }
        });
        if (check) {
          dispatch(loginSuccessAction());
          // history.push("/admin");
        }
        else {
          dispatch(loginErrorAction());
        }
      });
  };
};
