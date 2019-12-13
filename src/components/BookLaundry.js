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

import { ServiceContext } from "./ServiceContext";
import { ServiceProvider } from "./ServiceContext";

class BookLaundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      service: [],
      amount: "",
      price: [],
      note: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // const dropdown = React.useContext(ServiceContext);
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onServiceHandle = (event, data) => {
    event.persist();
    const optionIndex = data.options.findIndex(
      el => el.value.toLowerCase() === data.value.toLowerCase()
    );

    this.setState({
      service: data.value,
      price: data.options[optionIndex].price
    });
  };

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.service.length !== this.state.service.length) {
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
                        // multiple
                        selection
                        options={value}
                        name="service"
                        onChange={this.onServiceHandle}
                        onAddItem={this.handleClose}
                      />

                      <h4>Jumlah</h4>
                      <MDBInput
                        type="number"
                        label="kilogram"
                        name="amount"
                        onChange={this.onChange}
                        value={this.state.amount}
                      />

                      <h4>Harga</h4>
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
