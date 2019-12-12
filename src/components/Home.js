import React from "react";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardImage } from "mdbreact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import About from "./About";
// import { Icon } from "semantic-ui-react";

const Home = () => {
  return (
    <div>
      <Navbar />

      <MDBContainer className="mt-5 text-center">
        <MDBRow>
          <MDBCol>
            <MDBCardImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_mELUH0EqYeiry3LpUWN9lxVh3Lr6YbeAXkf59JvJavxcnyRbCQ&s"
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
