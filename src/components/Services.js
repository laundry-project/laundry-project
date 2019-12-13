import React from "react";
import { MDBRow, MDBCol, MDBCardBody, MDBView, MDBMask } from "mdbreact";
import Price from "./Price";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Services = () => {
  return (
    <div>
      <Navbar />
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">OUR SERVICES</h2>

        <MDBRow className="text-center mx-auto">
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView className="overlay rounded z-depth-1" waves>
              <img
                src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <h4 className="font-weight-bold my-3">Direct Order In Place</h4>
              <p className="grey-text">
                Customers can come directly to the desired laundry branch.
                Select the type of laundry service kilos or units. The customer
                will be at provide memorandum as evidence for appropriate
                laundry collection selected time and laundry service.
              </p>
            </MDBCardBody>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView className="overlay rounded z-depth-1" waves>
              <img
                src="https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <h4 className="font-weight-bold my-3">Dry Wash and Iron </h4>
              <p className="grey-text">
                Customer clothes that have been weighed are ready to be made in
                the laundry. Employees will immediately do the washing and
                drying immediately in place. Using environmentally friendly
                technology and materials. When finished, the clothes will be
                immediately ironed and packaged neat.
              </p>
            </MDBCardBody>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView className="overlay rounded z-depth-1" waves>
              <img
                src="https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <h4 className="font-weight-bold my-3">Take Laundry</h4>
              <p className="grey-text">
                Laundry service is carried out seriously according to the type
                of service what the customer wants. After neatly packaged, the
                clothes are ready submitted to the customer with a payment note.
              </p>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </section>
      <Price/>
      <Footer />
    </div>
  );
};

export default Services;
