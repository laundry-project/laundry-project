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
                <h2 className="mb-4">Cuci Kering</h2>
                <div className="d-flex justify-content-center">
                  <div className="card-circle d-flex justify-content-center align-items-center">
                    <MDBIcon icon="boxes" className="light-green-text" />
                  </div>
                </div>
                <h2 className="font-weight-bold my-4">Rp. 5000/kg</h2>
                <h5>
                  Layanan laundry pakaian yang hanya di lakukan proses pencucian
                  dan pengeringan saja, tanpa dilakukan proses setrika. Hanya
                  disusun rapi dalam plastik kresek.
                </h5>
                <p>Maksimal : 2 hari</p>
                <MDBBtn outline rounded color="white">
                  Find Location
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard className="blue-gradient">
              <MDBCardBody className="white-text">
                <h2 className="mb-4">Cuci Kering + Setrika</h2>
                <div className="d-flex justify-content-center">
                  <div className="card-circle d-flex justify-content-center align-items-center">
                    <MDBIcon icon="bullseye" className="light-green-text" />
                  </div>
                </div>
                <h2 className="font-weight-bold my-4">Rp. 8000/kg</h2>
                <h5>
                  Layanan laundry pakaian completed, di lakukan proses pencucian
                  pengeringan dan setrika. Dipacking rapi dengan plastik bening
                  dan disemprot dengan pewangi.
                </h5>
                <p>Maksimal : 3 hari</p>
                <MDBBtn outline rounded color="white">
                  Find Location
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard className="blue-gradient">
              <MDBCardBody className="white-text">
                <h2 className="mb-4">Setrika</h2>
                <div className="d-flex justify-content-center">
                  <div className="card-circle d-flex justify-content-center align-items-center">
                    <MDBIcon icon="bullseye" className="light-green-text" />
                  </div>
                </div>
                <h2 className="font-weight-bold my-4">Rp. 5000/kg</h2>
                <h5>
                  Layanan laundry yang hanya melakukan proses setrika pakaian
                  tanpa melalui proses pencucian, lalu dipacking rapi dalam
                  plastik bening dan disemprot dengan pewangi.
                </h5>
                <p>Maksimal : 2 hari</p>
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
                <h2 className="mb-4">Laundry Satuan</h2>
                <div className="d-flex justify-content-center">
                  <div className="card-circle d-flex justify-content-center align-items-center">
                    <MDBIcon icon="dice-d20" className="light-green-text" />
                  </div>
                </div>
                <h4>
                  Kami juga melayani laundry satuan seperti Bed Cover, Selimut,
                  Gaun, Jas, Sepatu, Tas, Karpet dan lainya.
                </h4>
                <p>Maksimal : 1 minggu</p>
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
