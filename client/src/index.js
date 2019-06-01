import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Router, Route, Switch } from "react-router-dom";
import BalancePage from "./pages/balancePage/balancePage";
import ExpensePage from "./pages/expensePage/expensePage";
import Home from "./pages/Home/index";
import { createBrowserHistory } from "history";
import * as serviceWorker from "./serviceWorker";
const hist = createBrowserHistory();
ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/expenses" component={ExpensePage} />
      <Route exact path="/balance" component={BalancePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
