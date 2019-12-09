import React from "react";
import logo from "../components/images/fresh.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "semantic-ui-css/semantic.min.css";
import { MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact";

const FindLaundry = () => {
  return (
    <div>
      <Navbar />
      <section className="my-5">
        <h1 className="h1-responsive font-weight-bold text-center my-5">
       Temukan Cabang Fresh and Clean Laundry Terdekat
        </h1>
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>

        <MDBRow>
          <MDBCol md="4" className="md-0 mb-5">
            <MDBRow>
              <MDBCol lg="2" md="3" size="2">
                {/* <MDBIcon icon="bullhorn" size="2x" className="blue-text" /> */}
              </MDBCol>
              <MDBCol lg="10" md="9" size="10">
                <h2 className="font-weight-bold">Fresh and Clean Laundry Kemang</h2>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <MDBBtn color="primary" size="sm">
                  Learn more
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="4" className="md-0 mb-5">
            <MDBRow>
              <MDBCol lg="2" md="3" size="2">
                <MDBIcon icon="cogs" size="2x" className="pink-text" />
              </MDBCol>
              <MDBCol lg="10" md="9" size="10">
                <h2 className="font-weight-bold">Fresh and Clean Laundry Tebet</h2>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <MDBBtn color="pink" size="sm">
                  Learn more
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="4" className="md-0 mb-5">
            <MDBRow>
              <MDBCol lg="2" md="3" size="2">
                <MDBIcon
                  icon="tachometer-alt"
                  size="2x"
                  className="purple-text"
                />
              </MDBCol>
              <MDBCol lg="10" md="9" size="10">
                <h2 className="font-weight-bold">Fresh and Clean Laundry Grogol</h2>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <MDBBtn color="purple" size="sm">
                  Learn more
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
      <Footer />
    </div>
  );
};

export default FindLaundry;
