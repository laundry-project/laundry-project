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
  state = {
    modal: false,
    options: [
      { 
        key: "Cuci Kering", 
        text: "Dry wash", 
        value: "Cuci Kering" 
      },
      { 
        key: "Setrika", 
        text: "Iron", 
        value: "Setrika" 
      },
      {
        key: "Cuci Kering + Setrika",
        text: "Dry Wash + Iron",
        value: "Cuci Kering + Setrika"
      },
      { 
        key: "Cuci Satuan", 
        text: "Laundry Unit", 
        value: "Cuci Satuan" 
      }
    ]
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <div>
        <MDBContainer>
          <MDBBtn onClick={this.toggle}>Order</MDBBtn>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>
            Please fill in your order
            </MDBModalHeader>
            <MDBModalBody>
              <input type="date" name="" id="Tanggal" />
              <Dropdown
                placeholder="Jenis Layanan"
                fluid
                multiple
                selection
                options={this.state.options}
              />
              <h4>Amount</h4>
              <MDBInput type="number" label="Kilogram" />

              <h4>Price</h4>
              <MDBInput label="" hint="Rp. 10.000" disabled type="price" />
              <MDBInput type="textarea" label="Catatan" outline />
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="primary">Booking Now</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      </div>
    );
  }
}
