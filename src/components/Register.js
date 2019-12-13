import React from "react";
import { withRouter } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

const URI = process.env.REACT_APP_API_URI;
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
    axios
      .post(URI + "/users/register", otherState)
      .then(result => {
        // this.setState.isMounted = true;
        if (result.status === 200) {
          this.props.history.push("/login");
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
      .catch(error => console.log(error));
  }

  // componentWillUnmount() {
  //   this.setState.isMounted = false;
  // }

  render() {
    return (
      <div>
        <Navbar />
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <form>
                <p className="h5 text-center mb-4 mt-5 mr-5">Sign up</p>

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
                  <MDBBtn color="primary" onClick={this.onRegister}>
                    Register
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Register);
