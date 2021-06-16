import { Route, Switch } from "react-router-dom";
import { Header } from "../../modules/header/header";
import { NavMenu } from "../../modules/menus/nav-menu";
import { routes } from "../../router.config";
import { Footer } from "../../modules/footer/footer";

function HomePage() {
  const RouterConfig = () => {
    return (
      <Switch>
        {routes.map((router, index) => (
          <Route
            key={index}
            path={router.path}
            exact={router.exact}
            component={router.component}
          ></Route>
        ))}
      </Switch>
    );
  };

  return (
    <section className="bg-white w-full h-full text-center">
      <Header />
      <NavMenu />

      <Route
        render={({ location }) => {
          return <Switch location={location}>{RouterConfig()}</Switch>;
        }}
      />
      <div className="w-full h-80 bg-black">
        <Footer />
      </div>
    </section>
  );
}

export default HomePage;
