import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import * as UI from "@material-ui/core";

import Readme from "./pages/Readme";
import Solution from "./pages/Solution";

const App = () => {
  const history = React.useMemo(createBrowserHistory, []);
  return (
    <Router history={history}>
      <div className="App">
        <Navbar />

        <UI.Container>
          <UI.Box py={2} textAlign="center">
            <UI.Typography variant="h4" component="h1">
              GoodGym Developer Exercise
            </UI.Typography>
          </UI.Box>

          <UI.Box mt={1} mb={2} textAlign="center">
            <UI.Link href="/">Readme</UI.Link> |{" "}
            <UI.Link href="/solution">Solution</UI.Link>
          </UI.Box>

          <Switch>
            <Route path="/" exact component={Readme} />
            <Route path="/solution" exact component={Solution} />
          </Switch>
        </UI.Container>
      </div>
    </Router>
  );
};

export default App;
