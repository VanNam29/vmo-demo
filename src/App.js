import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home-page/home-page";
import LoginPage from "./pages/login-page/login-page";
import { ToastContainer } from "react-toastify";
import firebase from "./services/firebase";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { PageAdmin } from "./page-admin/page-admin";

function App() {
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async user => {
      if (!user) {
        // console.log("user is not logger");
        return;
      }
      // console.log("user", user.displayName, user.photoURL);
      // const token = await user.getIdToken();
    });
    return () => unregisterAuthObserver();
  }, []);

  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route path="/login" exact component={LoginPage}></Route>
        <Route path="/admin" component={PageAdmin} />
        <Route path="/" component={HomePage}></Route>
      </Switch>
    </Router>
  );
}
export default App;
