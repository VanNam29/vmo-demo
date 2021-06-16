import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import { HeaderAdmin } from "../modules-admin/header-admin/header-admin";
import { NavMenuAdmin } from "../modules-admin/nav-menu-admin/nav-menu-admin";
import firebase from "../services/firebase";
import { routesAdmin } from "../router-admin.config";

export function PageAdmin(props) {
  const [user, setUser] = useState("");
  const { match } = props;
  // console.log("match", match);

  const RouterAdminConfig = () => {
    return (
      <Switch>
        {routesAdmin.map((router, index) => (
          <Route
            key={index}
            path={`${match.url}/${router.path}`}
            exact={router.exact}
            component={router.component}
          />
        ))}
      </Switch>
    );
  };

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async user => {
      if (!user) {
        // console.log("user is not logger");
        return;
      }
      setUser(user);
      // const token = await user.getIdToken();
    });
    return () => unregisterAuthObserver();
  }, []);
  return (
    <div className="w-full h-screen float-left">
      <div className="w-1/6 h-full float-left">
        {user ? <NavMenuAdmin user={user} /> : <NavMenuAdmin user="" />}
      </div>
      <div className="w-5/6 h-10 float-left">
        <HeaderAdmin />
      </div>
      <div className="w-5/6 h-full float-left bg-gray-100">
        <Route component={RouterAdminConfig} />
        {/* <Route
          render={({ location }) => {
            return <Switch location={location}>{RouterAdminConfig()}</Switch>;
          }}
        /> */}
      </div>
    </div>
  );
}
