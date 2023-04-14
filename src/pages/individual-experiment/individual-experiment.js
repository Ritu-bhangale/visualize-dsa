import { Tab, Tabs } from "@material-ui/core";
import { lazy } from "react";
import { Suspense, useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useRouteMatch,
  Switch,
  Route,
} from "react-router-dom";
import Loader from "../../components/loader/loader";
import { useStylesIndividualExperiment } from "./individual-experiment.styles";

// Dynamic Imports

const Visualisation = lazy(() =>
  import("../../components/visualisation/visualisation.js")
);

const IndividualExperiment = () => {
  // router
  const location = useLocation();
  const match = useRouteMatch();

  // styles
  const classes = useStylesIndividualExperiment();

  // local states
  const [windowSize, setWindowSize] = useState();
  const displayWindowSize = () => {
    // Get width and height of the window excluding scrollbars
    var w = document.documentElement.clientWidth;
    // Display result inside a div element
    setWindowSize(w);
  };

  useEffect(() => {
    displayWindowSize();
    window.addEventListener("resize", (e) => {
      displayWindowSize();
    });
    return () => {
      window.removeEventListener("resize", (e) => console.log(e));
    };
  }, []);

  // static data
  const tabs = [
    {
      name: "Visualisation",
      pathname: `${match.url}/visualisation`,
    },
  ];

  return (
    <div className={classes.root}>
      <Tabs
        className={classes.tabs}
        variant={windowSize > 880 ? "fullWidth" : "scrollable"}
        value={location.pathname}
        classes={{
          indicator: classes.tabIndicator,
        }}
        TabIndicatorProps={{ children: <span /> }}
        scrollButtons="on"
        orientation="horizontal"
        indicatorColor="primary"
        style={{ color: "#1E1E24", borderRadius: "1px"}}
      >
        {tabs.map((tab) => (
          <Tab
            label={tab.name}
            value={tab.pathname}
            key={tab.name}
            component={Link}
            to={tab.pathname}
            classes={{
              wrapper: classes.newWraper,
              selected: classes.selectedTab,
            }}
            style={{ color: "#1E1E24", borderRadius: "1px"}}
          />
        ))}
      </Tabs>

      <div className={classes.container}>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path={tabs[0].pathname}>
              <Visualisation param={match.params.id} />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </div>
  );
};

export default IndividualExperiment;