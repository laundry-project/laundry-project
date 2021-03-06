import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthButton from "./components/AuthButton";
import PrivateRoute from "./components/PrivateRoute";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "semantic-ui-css/semantic.min.css";

import App from "./App";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Services from "./components/Services";
import Price from "./components/Price";
import About from "./components/About";
import FindLaundry from "./components/FindLaundry";
import Register from "./components/Register";
import BookLaundry from "./components/BookLaundry";
import Testimonials from "./components/Testimonials";
import * as serviceWorker from "./serviceWorker";
import History from "./components/History";
import { UserProvider } from "./components/UserContext";

ReactDOM.render(
  <UserProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <AuthButton />
          <App />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/services">
          <Services />
        </PrivateRoute>
        <PrivateRoute path="/price">
          <Price />
        </PrivateRoute>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/FindLaundry">
          <FindLaundry />
        </Route>
        <PrivateRoute path="/BookLaundry">
          <BookLaundry />
        </PrivateRoute>
        <Route path="/Testimonials">
          <Testimonials />
        </Route>
        <PrivateRoute path="/History">
          <History />
        </PrivateRoute>
        <Route path="/Profile">
          <Profile />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  </UserProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
