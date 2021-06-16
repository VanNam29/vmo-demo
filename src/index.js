import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore } from "redux";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import firebase from "./services/firebase";
import { createFirestoreInstance, getFirestore } from "redux-firestore";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./App";
import "./index.css";
import { rootReducer } from "./app/rootReducer";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
);

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
