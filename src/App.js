import React from 'react';
import './App.css';
import {Route, Router, Switch} from "react-router";
import Step1Page from "./pages/Step1Page";
import Step2Page from "./pages/Step2Page";
import Step3Page from "./pages/Step3Page";
import {createBrowserHistory} from "history"

const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={"/2"} component={Step2Page}/>
        <Route exact path={"/3"} component={Step3Page}/>
        <Route path={"/"} component={Step1Page}/>
      </Switch>
    </Router>
  );
}

export default App;
