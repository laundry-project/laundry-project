import React from "react";
import { Link } from "react-router-dom";

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
                <MDBNavLink to="/price" className="black-text">
                  <strong>Price</strong>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/ContactUs" className="black-text">
                  <strong>Contact Us</strong>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/Profile" className="black-text">
                  <strong>Profile</strong>
                </MDBNavLink>
              </MDBNavItem>
              <Link to="/login">
                <MDBBtn color="pink" right>
                  Login
                </MDBBtn>
              </Link>
              <Link to="/register">
                <MDBBtn color="green" right>
                  Register
                </MDBBtn>
              </Link>
          
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </div>
    );
  }
}

export default Navbar;
