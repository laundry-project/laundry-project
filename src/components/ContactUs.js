import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon
} from "mdbreact";

import Footer from "./Footer";
import Navbar from "./Navbar";
// import LogoAsia from '../components/images/asia.jpeg';

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <MDBContainer>
        <section className="text-center my-5">
          <h1 className="h1-responsive font-weight-bold my-5">Testimonials</h1>
          <MDBCarousel
            activeItem={1}
            length={3}
            slide={true}
            showControls={true}
            multiItem
            testimonial
          >
            <br />
            <br />
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBRow>
                  <MDBCol md="4" className="clearfix d-none d-md-block">
                    <img
                      style={{ width: "350px", height: "350px" }}
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
                      alt=""
                      className="rounded-circle img-fluid mx-auto"
                    />
                    <h4 className="font-weight-bold mt-4">Anna Deynah</h4>
                    <h6 className="blue-text font-weight-bold my-3">
                      Bu Ijah's boarding child
                    </h6>
                    <p className="font-weight-normal">
                      <MDBIcon icon="quote-left" className="pr-2" />
                      The laundry is fast, fragrant and neat.
                    </p>
                    <div className="yellow-text">
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon far icon="star-half" />
                    </div>
                  </MDBCol>
                  <MDBCol md="4" className="clearfix d-none d-md-block">
                    <img
                      style={{ width: "350px", height: "350px" }}
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
                      alt=""
                      className="rounded-circle img-fluid mx-auto"
                    />
                    <h4 className="font-weight-bold mt-4">John Doe</h4>
                    <h6 className="blue-text font-weight-bold my-3">
                      Overseas child
                    </h6>
                    <p className="font-weight-normal">
                      <MDBIcon icon="quote-left" className="pr-2" />2 days
                      finished, the price is really cheap.
                    </p>
                    <div className="yellow-text">
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                    </div>
                  </MDBCol>
                  <MDBCol md="4" className="clearfix d-none d-md-block">
                    <img
                      style={{ width: "350px", height: "350px" }}
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                      alt=""
                      className="rounded-circle img-fluid mx-auto"
                    />
                    <h4 className="font-weight-bold mt-4">Abbey Clark</h4>
                    <h6 className="blue-text font-weight-bold my-3">
                      Old customer.
                    </h6>
                    <p className="font-weight-normal">
                      <MDBIcon icon="quote-left" className="pr-2" />
                      It's been a long time a customer here and always satisfied
                      with the service.
                    </p>
                    <div className="yellow-text">
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon far icon="star" />
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="2">
                <MDBRow>
                  <MDBCol md="4" className="clearfix d-none d-md-block">
                    <img
                      style={{ width: "350px", height: "350px" }}
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg"
                      alt=""
                      className="rounded-circle img-fluid"
                    />
                    <h4 className="font-weight-bold mt-4">Blake Dabney</h4>
                    <h6 className="blue-text font-weight-bold my-3">
                      Office people
                    </h6>
                    <p className="font-weight-normal">
                      <MDBIcon icon="quote-left" className="pr-2" />
                      Open early in the morning so you can put your laundry
                      here.
                    </p>
                    <div className="yellow-text">
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon far icon="star-half" />
                    </div>
                  </MDBCol>
                  <MDBCol md="4" className="clearfix d-none d-md-block">
                    <img
                      style={{ width: "350px", height: "350px" }}
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(6).jpg"
                      alt=""
                      className="rounded-circle img-fluid"
                    />
                    <h4 className="font-weight-bold mt-4">Andrea Clay</h4>
                    <h6 className="blue-text font-weight-bold my-3">
                      A housewife
                    </h6>
                    <p className="font-weight-normal">
                      <MDBIcon icon="quote-left" className="pr-2" />
                      Always helped by the existence of a kilogram of laundry
                      near the house.
                    </p>
                    <div className="yellow-text">
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                    </div>
                  </MDBCol>
                  <MDBCol md="4" className="clearfix d-none d-md-block">
                    <img
                      style={{ width: "350px", height: "350px" }}
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(7).jpg"
                      alt=""
                      className="rounded-circle img-fluid"
                    />
                    <h4 className="font-weight-bold mt-4">Cami Gosse</h4>
                    <h6 className="blue-text font-weight-bold my-3">
                      Next door neighbor
                    </h6>
                    <p className="font-weight-normal">
                      <MDBIcon icon="quote-left" className="pr-2" />
                      Although the rainy season I was never afraid of my clothes
                      not dry because this laundry uses a dryer.
                    </p>
                    <div className="yellow-text">
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon far icon="star" />
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBRow>
                  <MDBCol md="4">
                    <img
                      style={{ width: "350px", height: "350px" }}
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                      alt=""
                      className="rounded-circle img-fluid"
                    />
                    <h4 className="font-weight-bold mt-4">Bobby Haley</h4>
                    <h6 className="blue-text font-weight-bold my-3">
                      Boardinghouse guard
                    </h6>
                    <p className="font-weight-normal">
                      <MDBIcon icon="quote-left" className="pr-2" />
                      All my boarding children wash clothes here and always be
                      on time to deliver and pick up clothes.
                    </p>
                    <div className="yellow-text">
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                    </div>
                  </MDBCol>
                  <MDBCol md="4" className="clearfix d-none d-md-block">
                    <img
                      style={{ width: "350px", height: "350px" }}
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                      alt=""
                      className="rounded-circle img-fluid"
                    />
                    <h4 className="font-weight-bold mt-4">Elisa Janson</h4>
                    <h6 className="blue-text font-weight-bold my-3">
                      Factory employee
                    </h6>
                    <p className="font-weight-normal">
                      <MDBIcon icon="quote-left" className="pr-2" />
                      Always like to put clothes here because my factory clothes
                      that smell weird even become fragrant again.
                    </p>
                    <div className="yellow-text">
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon far icon="star-half" />
                    </div>
                  </MDBCol>
                  <MDBCol md="4" className="clearfix d-none d-md-block">
                    <img
                      style={{ width: "350px", height: "350px" }}
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                      alt=""
                      className="rounded-circle img-fluid"
                    />
                    <h4 className="font-weight-bold mt-4">Rob Jacobs</h4>
                    <h6 className="blue-text font-weight-bold my-3">
                      Father of the household
                    </h6>
                    <p className="font-weight-normal">
                      <MDBIcon icon="quote-left" className="pr-2" />
                      Because I am single parent, I was greatly helped by the
                      existence of this laundry which made it easier for my work
                      at home.
                    </p>
                    <div className="yellow-text">
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon far icon="star" />
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </section>
        <Footer />
      </MDBContainer>
    </div>
  );
};

export default ContactPage;
