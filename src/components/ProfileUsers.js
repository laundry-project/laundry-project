import React, { Component } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from "mdbreact";

class CardExample extends Component {
  render() {
    return (
      <MDBRow className="mx-auto w-50 mt-5">
        <MDBCol className="text-center">
          <MDBCard narrow>
            <center>
              <MDBCardImage
                cascade
                className="img-fluid my-4 w-50 h-50 rounded-circle"
                src="https://mdbootstrap.com/img/Photos/Avatars/img(30).jpg"
              />
            </center>
            <MDBCardBody cascade>
              <MDBCardTitle>
                <h1>Personal Information</h1>
              </MDBCardTitle>
              <MDBCardText>
                <h3>Username : Dian</h3>
                <h3>Email : dian@gmail.com</h3>
                <h3>Telephone : 12345</h3>
              </MDBCardText>
              <MDBBtn href="#">History</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }
}

export default CardExample;
