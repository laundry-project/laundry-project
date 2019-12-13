import React from "react";
import { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import { MDBInput, MDBBtn} from "mdbreact";
import {
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

import { ServiceContext } from "./ServiceContext";
import { ServiceProvider } from "./ServiceContext";

class BookLaundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      service: [],
      amount: 0,
      price: [],
      note: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      newPrice: this.state.price + 1,
      prevPrice: this.setState.price
    });
  }

  onServiceHandle = (event, data) => {
    event.persist();
    console.log(event);

    const optionIndex = data.options.findIndex(
      el => el.value.toLowerCase() === data.value.toLowerCase()
    );

    this.setState({
      service: data.value,
      price: data.options[optionIndex].price
    });
  };

  btnAdd = () => {
    if (this.state.service.length === 0) {
      alert("isi servis dulu");
    } else {
      if (this.state.amount < 10) {
        this.setState({
          amount: this.state.amount + 1
        });
      } else {
        alert("ups, Maksimal Pesanan 10");
      }
    }
  };
  reduceBtn = () => {
    if (this.state.amount > 0) {
      this.setState({
        amount: this.state.amount - 1
      });
    } else {
      alert("Tidak Bisa dibawah Nol");
    }
  };

  onSubmit(event) {
    if (this.state.service.length === 0) {
      alert("Pesanan Tidak Boleh Kosong");
    } else {
      // event.preventDefault();
      console.log(this.state);
      alert("Selamat Pesanan ada sudah dipesan");
    }
  }

  render() {
    return (
      <div>
        <ServiceProvider>
          <ServiceContext.Consumer>
            {value => {
              return (
                <MDBContainer>
                  <MDBBtn onClick={this.toggle}>Booking</MDBBtn>
                  <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>
                      Silahkan Isi Pemesanan Anda
                    </MDBModalHeader>

                    <MDBModalBody>
                      <input type="date" name="date" onChange={this.onChange} />
                      <Dropdown
                        placeholder="Jenis Layanan"
                        fluid
                        selection
                        options={value}
                        name="service"
                        onChange={this.onServiceHandle}
                      />

                      <div>
                        <MDBInput
                          type="number"
                          disabled
                          label="Jumlah"
                          name="amount"
                          onChange={this.onChange}
                          value={this.state.amount}
                        />
                        <button onClick={this.btnAdd}>+</button>
                        <button onClick={this.reduceBtn}>-</button>
                      </div>

                      <MDBInput
                        label="Harga Service"
                        disabled
                        value={this.state.price}
                      />
                      <MDBInput
                        type="textarea"
                        label="Catatan"
                        outline
                        name="note"
                        onChange={this.onChange}
                      />
                    </MDBModalBody>
                    <MDBModalFooter>
                      <MDBBtn color="primary" onClick={this.onSubmit}>
                        Booking Sekarang
                      </MDBBtn>
                    </MDBModalFooter>
                  </MDBModal>
                </MDBContainer>
              );
            }}
          </ServiceContext.Consumer>
        </ServiceProvider>
      </div>
    );
  }
}

export default BookLaundry;
