import React from "react";
import logoKemang from "../components/images/kemang.png";
import logoTebet from "../components/images/tebet.jpeg";
import logoGrogol from "../components/images/grogol.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "semantic-ui-css/semantic.min.css";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";

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

        <MDBRow className='mx-auto'>

          <MDBCol md="4" className="md-0 mb-5 ">
            <MDBRow>
              <MDBCol lg="2" md="3" size="2"></MDBCol>
              <MDBCol lg="10" md="9" size="10">
              <img
                src={logoKemang}
                className=" z-depth-1 img-fluid"
                alt="Sample avatar"
                style={{height: '300px', width: '600px'}}
              />
                <h2 className="font-weight-bold">
                  Fresh and Clean Laundry Kemang
                </h2>
                <p className="grey-text">
                  Alamat: Jl. Kemang Barat No.8, RT.9/RW.1, Bangka, Kec. Mampang
                  Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
                  12730 
                  <br/>
                  Telepon : (021) 22716458
                </p>
                <MDBBtn color="primary" size="sm">
                  Booking
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCol>

          <MDBCol md="4" className="md-0 mb-5">
            <MDBRow>
              <MDBCol lg="2" md="3" size="2"></MDBCol>
              <MDBCol lg="10" md="9" size="10">
              <img
                src={logoTebet}
                className=" z-depth-1 img-fluid"
                alt="Sample avatar"
                style={{height: '300px', width: '600px'}}
              />
                <h2 className="font-weight-bold">
                  Fresh and Clean Laundry Tebet
                </h2>
                <p className="grey-text">
                Alamat: Jalan Casablanca No.88, Menteng Dalam, Tebet, RT.14/RW.5, Menteng Dalam, Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12870
                <br/>
                Telepon : (021) 29465000
                </p>
                <MDBBtn color="pink" size="sm">
                  Booking
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCol>

          <MDBCol md="4" className="md-0 mb-5">
            <MDBRow>
              <MDBCol lg="2" md="3" size="2"></MDBCol>
              <MDBCol lg="10" md="9" size="10">
              <img
                src={logoGrogol}
                className=" z-depth-1 img-fluid"
                alt="Sample avatar"
                style={{height: '300px', width: '600px'}}
              />
                <h2 className="font-weight-bold">
                  Fresh and Clean Laundry Grogol
                </h2>
                <p className="grey-text">
                Alamat: Jl. Letjen S. Parman No.28, RT.12/RW.6, Tj. Duren Sel., Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470
                <br/>
                Telepon : (021) 56989999
                </p>
                <MDBBtn color="purple" size="sm">
                  Booking
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
