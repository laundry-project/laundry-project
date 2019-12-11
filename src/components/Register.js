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
      .post(URI + "/users", otherState)
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

// import React, { useState } from "react";
// import Axios from "axios";

// const URI = `http://localhost:3000/users/`;

// export default function Register() {
//   const [newUser, setNewUser] = useState({
//     name: "",
//     email: "",
//     password: "", telephone:""
//   });
//   const [error, setError] = useState(null);

//   const handleChange = e => {
//     setNewUser({
//       ...newUser,
//       [e.target.name]: e.target.value
//     });
//   };
//   const handleSubmit = e => {
//     e.preventDefault();
//     Axios.post(URI, newUser)
//       .then(result => console.log(result))
//       .catch(error => setError(error.message));
//   };
//   return (
//     <div>
//       {error && <div>{error}</div>}
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           name="name"
//           value={newUser.name}
//           onChange={handleChange}
//         />
//         <br />
//         <label htmlFor="name">Email</label>
//         <input
//           type="email"
//           name="email"
//           value={newUser.email}
//           onChange={handleChange}
//         />
//         <br />
//         <label htmlFor="name">Password</label>
//         <input
//           type="text"
//           name="password"
//           value={newUser.password}
//           onChange={handleChange}
//         />
//         <label htmlFor="name">Telephone</label>
//         <input
//           type="text"
//           name="telephone"
//           value={newUser.telephone}
//           onChange={handleChange}
//         />
//         <br />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }
