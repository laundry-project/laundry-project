import React from "react";
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";

const Icon = () => {
  return (
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
        The technology we use
        </h2>
        <MDBRow>
          <MDBCol md="2">
          <MDBIcon fab icon="html5" size="5x" className="red-text" />
            <h5 className="font-weight-bold my-4">HTML</h5>
          </MDBCol>
          <MDBCol md="2">
            <MDBIcon fab icon="css3-alt" size="5x" className="blue-text" />
            <h5 className="font-weight-bold my-4">CSS</h5>
          </MDBCol>
          <MDBCol md="2">
            <MDBIcon fab icon="js" size="5x" className="yellow-text" />
            <h5 className="font-weight-bold my-4">JAVASCRIPT</h5>
          </MDBCol>
          <MDBCol md="2">
            <MDBIcon fab icon="react" size="5x" className="blue-text" />
            <h5 className="font-weight-bold my-4">REACT</h5>
          </MDBCol>
          <MDBCol md="2">
            {/* <MDBIcon fab icon="redux" size="5x" className="blue-text" /> */}
            <h5 className="font-weight-bold my-4">HTML</h5>
          </MDBCol>
          <MDBCol md="2">
            <MDBIcon fab icon="redux" size="5x" className="blue-text" />
            <h5 className="font-weight-bold my-4">HTML</h5>
          </MDBCol>
          
          
          

        </MDBRow>
      </section>
  );
}

export default Icon;