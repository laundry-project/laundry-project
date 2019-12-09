import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Dropdown } from "semantic-ui-react";
import { MDBInput, MDBBtn } from "mdbreact";

function BookLaundry() {
  const options = [
    { key: "Cuci Kering", text: "Cuci kering", value: "Cuci Kering" },
    { key: "Setrika", text: "Setrika", value: "Setrika" },
    {
      key: "Cuci Kering + Setrika",
      text: "Cuci Kering + Setrika",
      value: "Cuci Kering + Setrika"
    }
  ];

  return (
    <div>
      <Navbar />
      <h1>Fresh and Clean Laundry - Kemang</h1>
      <h3>Silahkan Isi Pemesanan Anda !</h3>
      <Dropdown
        placeholder="Jenis Layanan"
        fluid
        multiple
        selection
        options={options}
      />
      <h4>Jumlah</h4>
      <MDBInput type="number" />

      <h4>Harga</h4>
      <MDBInput label="" hint="Rp. 10.000" disabled type="price" />
      <MDBInput type="textarea" label="Catatan" outline />
      <MDBBtn flat>BOOKING</MDBBtn>
      <Footer/>
    </div>
  );
}

export default BookLaundry;
