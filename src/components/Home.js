import React from "react";
import { MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Image } from "semantic-ui-react";
import Logo from "../components/images/laundry.png";

const Home = () => {
  return (
    <div>
      <MDBContainer className="mt-5 text-center">
        <MDBRow>
          <MDBCol>
            <Image src={Logo} />
            <br />
            <MDBBtn color="warning">Find Laundry Store</MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Home;
