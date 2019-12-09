import React from "react";
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";

const About = () => {
  return (
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
          Mengapa Harus Fresh and Clean Laundry
        </h2>
        <p className="lead grey-text w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam.
          
        </p>
        <MDBRow>
          <MDBCol md="4">
            <MDBIcon icon="medal" size="3x" className="blue-text" />
            <h5 className="font-weight-bold my-4">Profesional dan Terpercaya</h5>
            <p className="grey-text mb-md-0 mb-5">
            Terbukti telah memberikan pelayanan jasa laundry lebih dari 10.000 pelanggan dengan didukung keagenan yang tersebar dibeberapa titik strategis, mempermudah bagi konsumen untuk mendapatkan pelayanan Fresh and Clean Laundry
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon icon="mail-bulk" size="3x" className="blue-text" />
            <h5 className="font-weight-bold my-4">System Kasir Online & Realtime</h5>
            <p className="grey-text mb-md-0 mb-5">
            Fresh and Clean laundry mengikuti perkembangan jaman dan teknologi, terutama untuk sytem kasir yang menggunakan aplikasi berbasis android dan bisa kirim nota via platform Whatsapp (WA).
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon icon= "spray-can" size="3x" className="blue-text" />
            <h5 className="font-weight-bold my-4">Menggunakan Deterjen Ramah Lingkungan</h5>
            <p className="grey-text mb-md-0 mb-5">
            Disertai sertifikat dari Sucofindo, diketahui bahwa limbah deterjen kami dapat menyuburkan tanaman dan menetralisir zat kimia aktif pada lingkungan.
            </p>
          </MDBCol>
          </MDBRow>
          <br/>
          <br/>
          <MDBRow>
          <MDBCol md="4">
            <MDBIcon icon="users" size="3x" className="blue-text" />
            <h5 className="font-weight-bold my-4">1 Mesin untuk 1 Pelanggan</h5>
            <p className="grey-text mb-md-0 mb-5">
            Untuk menjaga higienitas pakaian, dengan jumlah berat tertentu maka proses pencucian pakaian tidak dicampur dengan pelanggan lain.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon icon="tshirt" size="3x" className="blue-text" />
            <h5 className="font-weight-bold my-4">Mencuci Sesuai Washing Care Label</h5>
            <p className="grey-text mb-md-0 mb-5">
            Sesuai Moto kami yaitu laundry kiloan profesional, bahwa meskipun cuci kiloan kami tetap mengutamakan pelayanan dimana proses pencucian disesuaikan logo washing care label pada pakaian. Sehingga pakaian Anda menjadi lebih awet dan terjaga.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon icon= "stopwatch" size="3x" className="blue-text" />
            <h5 className="font-weight-bold my-4">GARANSI KECEPATAN: Pelayanan Super Express “4 JAM JADI”</h5>
            <p className="grey-text mb-md-0 mb-5">
            Kepadatan beraktivitas sering kali melupakan untuk mencuci pakaian yang hendak dipakai, dengan adanya layanan cuci kilat ini diharapkan dapat membantu pelanggan mengatasi masalahnya.
            </p>
          </MDBCol>
        </MDBRow>
      </section>
  );
}

export default About;