import React from "react";
import { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import { MDBInput, MDBBtn } from "mdbreact";
import {
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

export default class BookLaundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      option: "",
      amount: "",
      price: ""
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  state = {
    modal: false,
    options: [
      { key: "Cuci Kering", text: "Cuci kering", value: "Cuci Kering" },
      { key: "Setrika", text: "Setrika", value: "Setrika" },
      {
        key: "Cuci Kering + Setrika",
        text: "Cuci Kering + Setrika",
        value: "Cuci Kering + Setrika"
      },
      { key: "Cuci Satuan", text: "Cuci Satuan", value: "Cuci Satuan" }
    ]
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  onChange(event) {
    this.state({ [event.this.option]: event.target.value });
  }
  onSubmit(event) {
    event.preventDefault();
    console.log('haol')
  };

  render() {
    return (
      <div>
        <MDBContainer>
          <MDBBtn onClick={this.toggle}>Booking</MDBBtn>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>
              Silahkan Isi Pemesanan Anda
            </MDBModalHeader>

            <MDBModalBody>
              <input
                type="date"
                name=""
                onChange={this.onChange}
                value={this.state.date}
                id="Tanggal"
              />
              <Dropdown
                placeholder="Jenis Layanan"
                fluid
                multiple
                selection
                options={this.state.options}
                onChange={this.handleChange}
                value={this.state.option}
              />
              <h4>Jumlah</h4>
              <MDBInput
                type="number"
                label="Kilogram"
                onChange={this.onChange}
                value={this.state.amount}
              />

              <h4>Harga</h4>
              <MDBInput
                label=""
                hint="Rp. 10.000"
                disabled
                type="price"
                onChange={this.onChange}
                value={this.state.price}
              />
              <MDBInput type="textarea" label="Catatan" outline />
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="primary" onClick={this.onSubmit}>Booking Sekarang</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      </div>
    );
  }
}
