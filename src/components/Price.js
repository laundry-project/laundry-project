import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn
} from "mdbreact";
import Navbar from "./Navbar";
import Footer from "./Footer";

const EcommercePage = () => {
  return (
    <div>
      <Navbar />
      <section className="text-center my-5">
        <h1 className="h1-responsive font-weight-bold text-center my-5">
          Our Price
        </h1>

        <MDBRow className="mx-auto">
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard className="blue-gradient">
              <MDBCardBody className="white-text">
                <h2 className="mb-4">Dry Wash</h2>
                <div className="d-flex justify-content-center">
                  <div className="card-circle d-flex justify-content-center align-items-center">
                    <MDBIcon icon="boxes" className="light-green-text" />
                  </div>
                </div>
                <h2 className="font-weight-bold my-4">Rp. 5000/kg</h2>
                <h5>
                  Laundry service that only does the washing process and drying
                  alone, without the iron process. Only neatly arranged in
                  plastic bag.
                </h5>
                <p>Maximum: 2 days</p>
                <MDBBtn outline rounded color="white">
                  Find Location
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard className="blue-gradient">
              <MDBCardBody className="white-text">
                <h2 className="mb-4">Dry Wash + Iron</h2>
                <div className="d-flex justify-content-center">
                  <div className="card-circle d-flex justify-content-center align-items-center">
                    <MDBIcon icon="bullseye" className="light-green-text" />
                  </div>
                </div>
                <h2 className="font-weight-bold my-4">Rp. 8000/kg</h2>
                <h5>
                  Clothing laundry service completed, wash process drying and
                  ironing. Neatly packaged with clear plastic and spray with
                  deodorizer.
                </h5>
                <p>Maximum : 3 days</p>
                <MDBBtn outline rounded color="white">
                  Find Location
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard className="blue-gradient">
              <MDBCardBody className="white-text">
                <h2 className="mb-4">Iron</h2>
                <div className="d-flex justify-content-center">
                  <div className="card-circle d-flex justify-content-center align-items-center">
                    <MDBIcon icon="bullseye" className="light-green-text" />
                  </div>
                </div>
                <h2 className="font-weight-bold my-4">Rp. 5000/kg</h2>
                <h5>
                  Laundry service that only processes clothes iron without going
                  through the washing process, then packed neatly inside clear
                  plastic and sprayed with deodorizer.
                </h5>
                <p>Maximum : 2 days</p>
                <MDBBtn outline rounded color="white">
                  Find Location
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <br />
        <MDBRow className="mx-auto">
          <MDBCol lg="12" md="12" className="mb-lg-0 mb-4">
            <MDBCard className="blue-gradient">
              <MDBCardBody className="white-text">
                <h2 className="mb-4">Laundry Unit</h2>
                <div className="d-flex justify-content-center">
                  <div className="card-circle d-flex justify-content-center align-items-center">
                    <MDBIcon icon="dice-d20" className="light-green-text" />
                  </div>
                </div>
                <h4>
                We also serve laundry units such as Bed Covers, Blankets,
                  Dresses, suits, shoes, bags, carpets and more.
                </h4>
                <p>Maximum : 1 week</p>
                <MDBBtn outline rounded color="white">
                  Find Location
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
      <Footer />
    </div>
  );
};

export default EcommercePage;
