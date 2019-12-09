import React from "react";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarBrand,
  MDBBtn
} from "mdbreact";

import Services from "./Services";
import Instruction from "./Instruction";
import About from "./About";
import Home from "./Home";

class Navbar extends React.Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div>
        <MDBNavbar color="white" dark expand="md">
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavbarBrand>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKp-oyM2WITLPI3TBAWs0Ykt3btL7_FuEjytk7iqFhq3_K8e0o5w&s"
                    className="img-fluid w-50 h-50"
                    alt=""
                  />
                </MDBNavbarBrand>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink active to="/" className="black-text">
                  <strong>Home</strong>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/services" className="black-text">
                  <strong>Services</strong>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/instruction" className="black-text">
                  <strong>Instruction</strong>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/about" className="black-text">
                  <strong>About Us</strong>
                </MDBNavLink>
              </MDBNavItem>
              <Link to='/login'>
              <MDBBtn color="danger" right>
                Login
              </MDBBtn>
              </Link>
              <MDBBtn color="teal" right>
                Register
              </MDBBtn>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </div>
    );
  }
}

export default Navbar;


// <Switch>
// <Route exact path="/">
//   <Container text style={{ marginTop: "7em" }}>
//     <Home />
//   </Container>
// </Route>
// <Route path="/services">
//   <Container text style={{ marginTop: "7em" }}>
//     <Services />
//   </Container>
// </Route>
// <Route path="/instruction">
//   <Container text style={{ marginTop: "7em" }}>
//     <Instruction />
//   </Container>
// </Route>
// <Route path="/about">
//   <Container text style={{ marginTop: "7em" }}>
//     <About />
//   </Container>
// </Route>
// </Switch>