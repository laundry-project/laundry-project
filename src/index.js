import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import Login from "./components/Login";
import Services from "./components/Services";
import Instruction from "./components/Instruction";
import About from "./components/About";
import Home from "./components/Home";
import FindLaundry from './components/FindLaundry'

ReactDOM.render(
  <BrowserRouter>
    {/* <App /> */}

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
        <Instruction />
      </Route>
      <Route path="/about">
        <About />
      </Route >
      <Route path ="/find-laundry">
      <FindLaundry/>
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
