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
        <h1 className="h1-responsive font-weight-bold my-5">
          Testimonials
        </h1>
        <MDBCarousel
          activeItem={1}
          length={3}
          slide={true}
          showControls={true}
          multiItem
          testimonial
        >
        <br/>
        <br/>
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBRow>
                <MDBCol md="4" className="clearfix d-none d-md-block">
                  <img style={{width : '350px', height:'350px'}}
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
                    alt=""
                    className="rounded-circle img-fluid mx-auto"
                  />
                  <h4 className="font-weight-bold mt-4">Anna Deynah</h4>
                  <h6 className="blue-text font-weight-bold my-3">
                    Anak Kost Bu Ijah
                  </h6>
                  <p className="font-weight-normal">
                    <MDBIcon icon="quote-left" className="pr-2" />
                    Laundrynya cepat, wangi dan rapi.
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
                  <img style={{width : '350px', height:'350px'}}
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
                    alt=""
                    className="rounded-circle img-fluid mx-auto"
                  />
                  <h4 className="font-weight-bold mt-4">John Doe</h4>
                  <h6 className="blue-text font-weight-bold my-3">
                    Anak rantau 
                  </h6>
                  <p className="font-weight-normal">
                    <MDBIcon icon="quote-left" className="pr-2" />
                    2 hari kelar harga manusiawi gokil sobbb
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
                  <img style={{width : '350px', height:'350px'}}
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                    alt=""
                    className="rounded-circle img-fluid mx-auto"
                  />
                  <h4 className="font-weight-bold mt-4">Abbey Clark</h4>
                  <h6 className="blue-text font-weight-bold my-3">
                    Langganan lama
                  </h6>
                  <p className="font-weight-normal">
                    <MDBIcon icon="quote-left" className="pr-2" />
                    Udah lama langganan di sini dan selalu puas dengan layanannya.
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
                  <img style={{width : '350px', height:'350px'}}
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg"
                    alt=""
                    className="rounded-circle img-fluid"
                  />
                  <h4 className="font-weight-bold mt-4">Blake Dabney</h4>
                  <h6 className="blue-text font-weight-bold my-3">
                    Web Designer
                  </h6>
                  <p className="font-weight-normal">
                    <MDBIcon icon="quote-left" className="pr-2" />
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis laboriosam.
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
                  <img style={{width : '350px', height:'350px'}}
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(6).jpg"
                    alt=""
                    className="rounded-circle img-fluid"
                  />
                  <h4 className="font-weight-bold mt-4">Andrea Clay</h4>
                  <h6 className="blue-text font-weight-bold my-3">
                    Front-end developer
                  </h6>
                  <p className="font-weight-normal">
                    <MDBIcon icon="quote-left" className="pr-2" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae.
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
                  <img style={{width : '350px', height:'350px'}}
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(7).jpg"
                    alt=""
                    className="rounded-circle img-fluid"
                  />
                  <h4 className="font-weight-bold mt-4">Cami Gosse</h4>
                  <h6 className="blue-text font-weight-bold my-3">
                    Phtographer
                  </h6>
                  <p className="font-weight-normal">
                    <MDBIcon icon="quote-left" className="pr-2" />
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium.
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
                  <img style={{width : '350px', height:'350px'}}
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                    alt=""
                    className="rounded-circle img-fluid"
                  />
                  <h4 className="font-weight-bold mt-4">Bobby Haley</h4>
                  <h6 className="blue-text font-weight-bold my-3">
                    Web Developer
                  </h6>
                  <p className="font-weight-normal">
                    <MDBIcon icon="quote-left" className="pr-2" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae.
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
                  <img style={{width : '350px', height:'350px'}}
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                    alt=""
                    className="rounded-circle img-fluid"
                  />
                  <h4 className="font-weight-bold mt-4">Elisa Janson</h4>
                  <h6 className="blue-text font-weight-bold my-3">Marketer</h6>
                  <p className="font-weight-normal">
                    <MDBIcon icon="quote-left" className="pr-2" />
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium.
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
                  <img style={{width : '350px', height:'350px'}}
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                    alt=""
                    className="rounded-circle img-fluid"
                  />
                  <h4 className="font-weight-bold mt-4">Rob Jacobs</h4>
                  <h6 className="blue-text font-weight-bold my-3">
                    Front-end developer
                  </h6>
                  <p className="font-weight-normal">
                    <MDBIcon icon="quote-left" className="pr-2" />
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis laboriosam.
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
