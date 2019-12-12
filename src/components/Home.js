import React from "react";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardImage } from "mdbreact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import About from "./About";
import LogoLaundry from '../components/images/logo.png';
// import { Icon } from "semantic-ui-react";

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
            <MDBBtn color="white">
              <Link to="/FindLaundry">Find Laundry</Link>
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    <About/>
  <Footer />
    </div>
  );
};

export default Home;
