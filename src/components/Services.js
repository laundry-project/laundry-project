import React from "react";
import { MDBRow, MDBCol, MDBCardBody, MDBView, MDBMask } from "mdbreact";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Services = () => {
  return (
    <div>
      <Navbar />
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">OUR SERVICES</h2>

        <MDBRow className="text-center">
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
              <h4 className="font-weight-bold my-3">Order Langsung Ditempat</h4>
              <p className="grey-text">
                Customer bisa mdatang langsung ke cabang laundry yang
                diinginkan. Pilih jenis layanan laundry, kiloan atau satuan.
                Customer akan diberikan nota sebagai bukti untuk pengambilan
                laundry sesuai waktu dan layanan laundry yang dipilih.
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
              <h4 className="font-weight-bold my-3">
                Cuci, Kering dan Setrika{" "}
              </h4>
              <p className="grey-text">
                Pakaian customer yang telah ditimbang siap buat dilaundry.
                Pegawai akan segera melakukan pencucian dan pengeringan langsung
                ditempat. Menggunakan teknologi dan bahan yang ramah lingkungan.
                Setelah selesai, pakaian akan langsung disetrika dan dipacking
                rapi
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
              <h4 className="font-weight-bold my-3">Ambil Laundry</h4>
              <p className="grey-text">
                Pelayanan laundry dilakukan dengan serius sesuai jenis layanan
                yang diinginkan customer. Setelah rapi dipacking, pakaian siap
                diserahkan ke customer dengan membawa nota pembayaran
              </p>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
