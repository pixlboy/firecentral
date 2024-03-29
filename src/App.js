import React, { useRef, useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";
import Contact from "./views/Contact";
import About from "./views/About";
import Fdas from "./views/Fdas";
import Sprinkler from "./views/Sprinkler";
import Supression from "./views/Supression";
import Hydrant from "./views/Hydrant";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add("is-loaded");
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute
            exact
            path="/contact"
            component={Contact}
            layout={LayoutDefault}
          />
          <AppRoute
            exact
            path="/about"
            component={About}
            layout={LayoutDefault}
          />

          <AppRoute
            exact
            path="/fdas"
            component={Fdas}
            layout={LayoutDefault}
          />
          <AppRoute
            exact
            path="/sprinkler"
            component={Sprinkler}
            layout={LayoutDefault}
          />
          <AppRoute
            exact
            path="/supression"
            component={Supression}
            layout={LayoutDefault}
          />
          <AppRoute
            exact
            path="/hydrant"
            component={Hydrant}
            layout={LayoutDefault}
          />
        </Switch>
      )}
    />
  );
};

export default App;
