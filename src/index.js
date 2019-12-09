import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "semantic-ui-css/semantic.min.css";

import App from "./App";
import Login from "./components/Login";
import Services from "./components/Services";
import Price from "./components/Price";
import About from "./components/About";
import FindLaundry from "./components/FindLaundry";
import Register from "./components/Register";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Route>
      <Route exact path="/">
        <App />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route path="/services">
        <Services />
      </Route>
      <Route path="/price">
        <Price />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/FindLaundry">
        <FindLaundry />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Route>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
