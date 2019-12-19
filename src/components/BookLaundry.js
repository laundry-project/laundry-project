import React from "react";
import { Component, useContext } from "react";
import { withRouter } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";
import {
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
  MDBBtn,
  MDBCol,
  MDBRow
} from "mdbreact";
import Swal from "sweetalert";
import axios from "axios";

import "../assets/styles/bookLaundry.css";
import { ServiceContext } from "./ServiceContext";
import { UserContext } from "./UserContext";
import { URI } from "../helpers/envPath";
class BookLaundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      servicePrice: 0,
      service: [],
      date: "",
      amount: 0,
      price: 0,
      note: "",
      address: "",
      pickUpTime: ""
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
      [event.target.name]: event.target.value
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
      price: data.options[optionIndex].price,
      servicePrice: data.options[optionIndex].price
    });
  };

  btnAdd = async () => {
    if (this.state.service.length === 0) {
      alert("isi servis dulu");
    } else {
      if (this.state.amount < 10) {
        await this.setState({
          amount: this.state.amount + 1
        });
        this.setState({
          price: this.state.amount * this.state.servicePrice
        });
      } else {
        alert("ups, Maksimal Pesanan 10");
      }
    }
  };

  reduceBtn = async () => {
    if (this.state.amount > 0) {
      await this.setState({
        amount: this.state.amount - 1
      });
      this.setState({
        price: this.state.amount * this.state.servicePrice
      });
    } else {
      alert("Tidak Bisa dibawah Nol");
    }
  };

  onSubmit(event, user) {
    event.preventDefault();
    console.log(user[0]);
    if (this.state.service.length === 0) {
      alert("Pesanan Tidak Boleh Kosong");
    } else {
      // console.log(this.state);
      // console.log(this.props);
      const { servicePrice, ...restData } = this.state;
      axios
        .post(URI + "/orders", { ...restData, userId: user[0]._id })
        .then(result => {
          console.log(result);
          if (result.status === 200) {
            // this.props.history.push("/FindLaundry");
            Swal({
              title: `Congratulation ${user[0].name}`,
              text: `Your Order is completed \n Our Courier will Arrive soon!`,
              icon: "success",
              button: "Close"
            });

            this.setState({
              servicePrice: 0,
              service: [],
              date: "",
              amount: 0,
              price: 0,
              note: ""
            });
            this.toggle();
          }
        })
        .catch(error => console.log(error));
    }
  }

  render() {
    return (
      <div>
        <ServiceContext.Consumer>
          {value => (
            <UserContext.Consumer>
              {user => {
                return (
                  <MDBContainer>
                    <MDBBtn onClick={this.toggle}>Order</MDBBtn>
                    <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                      <MDBModalHeader className="justify-content-center">
                        Welcome to {this.props.laundryName}
                        <br />
                        Please fill in your order
                      </MDBModalHeader>

                      <MDBModalBody>
                        <MDBRow>
                          <MDBCol>
                            <MDBInput
                              label="Pick Up Date"
                              type="date"
                              name="date"
                              onChange={this.onChange}
                            />
                          </MDBCol>
                          <MDBCol>
                            <MDBInput
                              type="time"
                              label="Pick Up Time"
                              outline
                              name="pickUpTime"
                              onChange={this.onChange}
                            />
                          </MDBCol>
                        </MDBRow>
                        <Dropdown
                          placeholder="Service type"
                          fluid
                          selection
                          options={value}
                          name="service"
                          onChange={this.onServiceHandle}
                        />

                        {/* ini yang baru */}
                        <div className="def-number-input number-input">
                          <button
                            onClick={this.reduceBtn}
                            className="minus"
                          ></button>
                          <input
                            className="quantity"
                            name="amount"
                            value={this.state.amount}
                            onChange={this.onChange}
                            type="number"
                            disabled
                            min={0}
                            max={5}
                          />
                          <span>kg</span>
                          <button
                            onClick={this.btnAdd}
                            className="plus"
                          ></button>
                        </div>
                        {/* ------------ */}

                        <MDBInput
                          label="Price"
                          disabled
                          value={this.state.price}
                        />
                        <MDBInput
                          type="textarea"
                          label="Note"
                          outline
                          name="note"
                          onChange={this.onChange}
                        />
                        <MDBInput
                          type="textarea"
                          label="Pickup and Delivery Address"
                          outline
                          name="address"
                          onChange={this.onChange}
                        />
                      </MDBModalBody>
                      <MDBModalFooter>
                        <MDBBtn
                          color="primary"
                          onClick={event => this.onSubmit(event, user)}
                        >
                          Booking Now
                        </MDBBtn>
                      </MDBModalFooter>
                    </MDBModal>
                  </MDBContainer>
                );
              }}
            </UserContext.Consumer>
          )}
        </ServiceContext.Consumer>
      </div>
    );
  }
}

export default withRouter(BookLaundry);
