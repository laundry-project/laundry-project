import React, { useState } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBIcon
} from "mdbreact";

import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { clientAuth } from "./clientAuth";

const URI = process.env.REACT_APP_API_URI;

function Login() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    clientAuth.authenticate(() => {
      history.replace(from);
    });
  };

  const [newUser, setNewUser] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState(null);

  const onChange = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  };

  const onLogin = e => {
    e.preventDefault();
    console.log(newUser);
    if (newUser.email === "" && newUser.password === "") {
      console.log("Can not Empty");
      setError("NULL INPUT");
      console.log(error);
    } else {
      console.log(newUser);
      axios
        .post(URI + "/users/login", newUser)
        .then(result => {
          setNewUser(result);
          login();
        })
        .catch(error => setError(error.message));
    }
  };

  return (
    <div>
      <Navbar />
      {error === "NULL INPUT" ? <p>Tidak Boleh Kosong</p> : <></>}
      <MDBContainer className="mt-5 mr-2 text-center">
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <div className="header pt-3 blue">
                <MDBRow className="d-flex justify-content-center">
                  <h3 className="white-text mb-3 pt-3 font-weight-bold">
                    Log in
                  </h3>
                </MDBRow>
                <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
                  <a href="#!" className="fa-lg p-2 m-2 fb-ic">
                    <MDBIcon
                      fab
                      icon="facebook-f"
                      size="lg"
                      className="white-text"
                    />
                  </a>
                  <a href="#!" className="fa-lg p-2 m-2 tw-ic">
                    <MDBIcon fab className="fa-twitter white-text fa-lg" />
                  </a>
                  <a href="#!" className="fa-lg p-2 m-2 gplus-ic">
                    <MDBIcon
                      fab
                      className="fa-google-plus-g white-text fa-lg"
                    />
                  </a>
                </MDBRow>
              </div>
              <MDBCardBody className="mx-4 mt-4">
                <MDBInput
                  label="Your email"
                  group
                  type="text"
                  validate
                  name="email"
                  value={newUser.email}
                  onChange={onChange}
                />
                <MDBInput
                  label="Your password"
                  group
                  type="password"
                  validate
                  name="password"
                  containerClass="mb-0"
                  value={newUser.password}
                  onChange={onChange}
                />
                <MDBRow className="d-flex align-items-center mb-4 mt-5">
                  <MDBCol md="5" className="d-flex align-items-start">
                    <div className="text-center">
                      <MDBBtn
                        color="grey"
                        rounded
                        type="button"
                        className="z-depth-1a"
                        onClick={onLogin}
                      >
                        Log in
                      </MDBBtn>
                    </div>
                  </MDBCol>
                  <MDBCol md="7" className="d-flex justify-content-end">
                    <p className="font-small grey-text mt-3">
                      Don't have an account?
                      <Link to="/register">Sign Up</Link>
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </div>
  );
}

export default Login;
