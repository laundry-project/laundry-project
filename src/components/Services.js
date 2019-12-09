import React from "react";
import { MDBRow, MDBCol, MDBCardBody, MDBView, MDBMask } from "mdbreact";

const Services = () => {
  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold my-5">OUR SERVICES</h2>

      <MDBRow className="text-center">
        <MDBCol lg="3" md="12" className="mb-lg-0 mb-4">
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
            <h4 className="font-weight-bold my-3">Place Order</h4>
            <p className="grey-text">
              User bisa masuk ke aplikasi atau website laundry. Pilih jenis
              layanan laundry yang user inginkan, kiloan atau satuan. User akan
              diberikan nota sebagai bukti untuk pengambilan laundry sesuai
              waktu dan layanan laundry yang telah dipilih. Pelayanan cepat dan
              memuaskan akan diberikan sepenuh hati.
            </p>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="3" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="https://mdbootstrap.com/img/Photos/Others/images/88.jpg"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Pick Up</h4>
            <p className="grey-text">
              Just be ready with your Laundry, we will be right there with our
              eco-friendly laundry cart. We will grab away all the dirty clothes
              from your home.
            </p>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="3" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="https://mdbootstrap.com/img/Photos/Others/project4.jpg"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Wash & Iron</h4>
            <p className="grey-text">
              We take dirt very seriously. Our expert, with the help of our
              state of art machinery ensure that your clothes come back looking
              clean, tidler, and fresh every time.
            </p>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="3" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="https://mdbootstrap.com/img/Photos/Others/images/58.jpg"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Delivery</h4>
            <p className="grey-text">
              Your clothes will be delivered at your doorstep on time and as
              fresh as daisy. Now getting your laundry done is that convenient.
            </p>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </section>
  );
};

export default Services;
