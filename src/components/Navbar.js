import React from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
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

import { clientAuth } from "./clientAuth";

function Navbar() {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [isOpen, changeIsOpen] = React.useState(false);

  const toggleCollapse = () => {
    changeIsOpen(!isOpen);
  };

  const logout = () => {
    clientAuth.signout(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <MDBNavbar color="white" dark expand="md" style={{ fontSize: "22px" }}>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
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
              <MDBNavLink
                active
                to="/"
                className="black-text"
                style={{ marginTop: "13px", marginRight: "20px" }}
              >
                <strong>Home</strong>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                to="/services"
                className="black-text"
                style={{ marginTop: "13px", marginRight: "20px" }}
              >
                <strong>Services</strong>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                to="/Testimonials"
                className="black-text"
                style={{ marginTop: "13px", marginRight: "20px" }}
              >
                <strong>Testimonials</strong>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                to="/History"
                className="black-text"
                style={{ marginTop: "13px", marginRight: "20px" }}
              >
                <strong>History</strong>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                to="/Profile"
                className="black-text"
                style={{ marginTop: "13px", marginRight: "20px" }}
              >
                <strong>Profile</strong>
              </MDBNavLink>
            </MDBNavItem>
            {clientAuth.isAuthenticated ? (
              <MDBBtn
                color="blue"
                onClick={logout}
                style={{ fontSize: "18px" }}
              >
                Logout
              </MDBBtn>
            ) : (
              <React.Fragment>
                <Link to="/register">
                  <MDBBtn
                    color="blue"
                    style={{ fontSize: "18px", marginRight: "20px" }}
                  >
                    Register
                  </MDBBtn>
                </Link>
                <Link to="/login">
                  <MDBBtn
                    color="blue"
                    style={{ fontSize: "18px", marginRight: "20px" }}
                  >
                    Login
                  </MDBBtn>
                </Link>
              </React.Fragment>
            )}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </div>
  );
}

export default Navbar;
