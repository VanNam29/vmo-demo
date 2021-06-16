import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";
import { productReducer } from "./../modules/product/product.reducers";
import { categoryReducer } from "../modules/redux/category/category.reducers";
import filterReducer from "../modules/filter-products/redux-filter/filter.reducers";
import { cardReducer } from "../modules/redux/card/card.reducers";
import { orderReducer } from "../modules/redux/order/order.reducers";
import { loginReducer } from "../modules/redux/login/login.reducers";

export const rootReducer = combineReducers({
  filters: filterReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  product: productReducer,
  category: categoryReducer,
  card: cardReducer,
  order: orderReducer,
  login: loginReducer,
});
