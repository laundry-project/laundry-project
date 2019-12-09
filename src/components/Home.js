import React from "react";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardImage } from "mdbreact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Team from "./Team";
import { Link } from "react-router-dom";

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
            <MDBBtn color="warning">
              <Link to="/FindLaundry">Find Laundry</Link>
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    <Team/>
  <Footer />
    </div>
  );
};

export default Home;
