import React from "react";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardImage } from "mdbreact";
import Navbar from "./Navbar";
import Footer from "./Footer";
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
            <Link to="/find-laundry">
              <MDBBtn color="warning">Find Laundry Store</MDBBtn>
            </Link>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <Footer />
    </div>
  );
};

export default Home;
