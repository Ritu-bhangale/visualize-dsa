import { Suspense, lazy } from "react";
import Loader from "./components/loader/loader";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./components/theme/createMuiTheme";

// lazy imports
const ExperimentList = lazy(() =>
  import("./pages/experiment-list/experiment-list.js")
);
const IndividualExperiment = lazy(() =>
  import("./pages/individual-experiment/individual-experiment.js")
);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <main>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={ExperimentList} />
            <Route
              exact
              path="/list_of_experiments"
              component={ExperimentList}
            />
            <Route exact path="/experiments" component={ExperimentList} />
            <Route path="/experiments/:id" component={IndividualExperiment} />
          </Switch>
        </Suspense>
      </main>
      </ThemeProvider>
    </>
  );
}

export default App;