import React from "react";
import {
  MDBPopover,
  MDBPopoverBody,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardImage
} from "mdbreact";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import LogoLaundry from "../components/images/logo.png";
// import { Icon } from "semantic-ui-react";
import { clientAuth } from "./clientAuth";

const Home = () => {
  return (
    <div>
      <Navbar />

      <MDBContainer className="mt-5 text-center">
        <MDBRow>
          <MDBCol>
            <MDBCardImage src={LogoLaundry} className="img w-100" />
            {clientAuth.isAuthenticated ? (
              <Link to="/FindLaundry">
                <MDBBtn color="white">Find Laundry</MDBBtn>
              </Link>
            ) : (
              <MDBPopover placement="top" popover clickable id="popper1">
                <MDBBtn color="white">Find Laundry</MDBBtn>
                <div>
                  <MDBPopoverBody>
                    <center>
                      <h1>You have Login First!</h1>
                    </center>
                  </MDBPopoverBody>
                </div>
              </MDBPopover>
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
