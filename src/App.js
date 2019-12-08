import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardImage } from "mdbreact";

const App = () => (
  <div>
    <Navbar />
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBCardImage
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_mELUH0EqYeiry3LpUWN9lxVh3Lr6YbeAXkf59JvJavxcnyRbCQ&s"
            className="img w-100"
          />
          <MDBBtn color="warning">Find Laundry Store</MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <Footer />
  </div>
);

export default App;
