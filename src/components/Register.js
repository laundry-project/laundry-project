import React from "react";
import { withRouter } from "react-router-dom";
import { MDBContainer, MDBRow, MDBBtn, MDBInput, MDBCard, MDBCardBody } from "mdbreact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import Swal from "sweetalert";

import {URI} from '../helpers/envPath';
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      emailConfirm: "",
      password: "",
      passwordConfirm: "",
      telephone: ""
      // isMounted: false
    };
    this.onChange = this.onChange.bind(this);
    this.onRegister = this.onRegister.bind(this);
  }
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onRegister(event) {
    event.preventDefault();
    console.log(this.state); //melihat isi ketika register
    const {
      // isMounted,
      passwordConfirm,
      emailConfirm,
      ...otherState
    } = this.state;
    console.log(otherState);
    axios
      .post(URI + "/users/register", otherState)
      .then(result => {
        // this.setState.isMounted = true;
        console.log(result);
        if (result.status === 200) {
          this.props.history.push("/login");
          Swal("Good job!", "Register Success", "success");
        }
        this.setState({
          name: "",
          email: "",
          emailConfirm: "",
          password: "",
          passwordConfirm: "",
          telephone: ""
        });
      })
      .catch(error => {
        console.log(error);
        Swal("Oops", "Username or email not valid", "error");
      });
  }

  render() {
    return (
      <div>
        <Navbar />
        <MDBContainer className="mt-5 display-flex justify-content-center align-items-center w-50 ">
          <MDBCard>
          <div className="header pt-3 blue">
            <MDBRow className="d-flex justify-content-center">
              <h3 className="white-text mb-3 pt-3 font-weight-bold">Sign Up</h3>
            </MDBRow>
            <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
            </MDBRow>
          </div>
          <MDBRow>
            <MDBCardBody className = "mx-4 mt-4">
              <form>
                <div className="grey-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    name="name"
                    validate
                    error="wrong"
                    success="right"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    name="email"
                    error="wrong"
                    success="right"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  <MDBInput
                    label="Confirm your email"
                    icon="exclamation-triangle"
                    group
                    type="text"
                    validate
                    name="emailConfirm"
                    error="wrong"
                    success="right"
                    value={this.state.emailConfirm}
                    onChange={this.onChange}
                  />
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    name="password"
                    validate
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  <MDBInput
                    label="Confirm your Password"
                    icon="exclamation-triangle"
                    group
                    type="password"
                    validate
                    name="passwordConfirm"
                    error="wrong"
                    success="right"
                    value={this.state.passwordConfirm}
                    onChange={this.onChange}
                  />
                  <MDBInput
                    label="Your telephone"
                    icon="phone"
                    group
                    name="telephone"
                    type="tel"
                    validate
                    value={this.state.telephone}
                    onChange={this.onChange}
                  />
                </div>

                <div className="text-center">
                  <MDBBtn color="blue" onClick={this.onRegister}>
                    Register
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBRow>
          </MDBCard>
        </MDBContainer>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Register);
