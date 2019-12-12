import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBTooltip
} from "mdbreact";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import LogoLaundry from '../components/images/logo.png';
// import { Icon } from "semantic-ui-react";
import { clientAuth } from "./clientAuth";

const Home = () => {
  return (
    <div>
      <Navbar />

      <MDBContainer className="mt-5 text-center">
        <MDBRow>
          <MDBCol>
            <MDBCardImage
              src={LogoLaundry}
              className="img w-100"
            />
            {clientAuth.isAuthenticated ? (
              <Link to="/FindLaundry">
                <MDBBtn color="white">Find Laundry</MDBBtn>
              </Link>
            ) : (
              <MDBContainer>
                <MDBTooltip domElement tag="span">
                  <MDBBtn color="white">Find Laundry</MDBBtn>
                  <span> you have to login first </span>
                </MDBTooltip>
              </MDBContainer>
            )}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <About />
      <Footer />
    </div>
  );
};

export default Home;
