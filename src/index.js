import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import Login from "./components/Login";
import Services from "./components/Services";
import Price from "./components/Price";
import About from "./components/About";
import FindLaundry from "./components/FindLaundry";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route path="/services">
        <Services />
      </Route>
      <Route path="/instruction">
        <Price />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/find-laundry">
        <FindLaundry />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
