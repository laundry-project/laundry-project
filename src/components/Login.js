import React from "react";
import { withRouter } from "react-router-dom";
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

const URI = process.env.REACT_APP_API_URI;
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onLogin(event) {
    event.preventDefault();
    console.log(this.state); //melihat isi ketika register
    axios
      .post(URI + "/users", this.state)
      .then(result => {
        if (result.status === 200) {
          this.props.history.push("/");
        }
        this.setState({
          email: "",
          password: ""
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div>
        <Navbar />

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
                    value={this.state.email}
                    onChange={this.onChange}
                  />

                  <MDBInput
                    label="Your password"
                    group
                    type="password"
                    validate
                    name="password"
                    containerClass="mb-0"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  <p className="font-small grey-text d-flex justify-content-end">
                    Forgot
                    <a
                      href="#!"
                      className="dark-grey-text ml-1 font-weight-bold"
                    >
                      Password?
                    </a>
                  </p>
                  <MDBRow className="d-flex align-items-center mb-4 mt-5">
                    <MDBCol md="5" className="d-flex align-items-start">
                      <div className="text-center">
                        <MDBBtn
                          color="grey"
                          rounded
                          type="button"
                          className="z-depth-1a"
                          onClick={this.onLogin}
                        >
                          Log in
                        </MDBBtn>
                      </div>
                    </MDBCol>
                    <MDBCol md="7" className="d-flex justify-content-end">
                      <p className="font-small grey-text mt-3">
                        Don't have an account?
                        <a
                          href="#!"
                          className="dark-grey-text ml-1 font-weight-bold"
                        >
                          Sign up
                        </a>
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
}

export default withRouter(Login);
