import React, { useState, useEffect, useContext } from "react";

import { UserContext } from "./UserContext";
import { ServiceContext } from "./ServiceContext";
import axios from "axios";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

import {URI} from '../helpers/envPath';

function ProfileUser() {
  let [userContext, setUserContext] = useContext(UserContext);
  let [order, setOrder] = useState([]);
  let [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  useEffect(() => {
    axios
      .get(URI + "/users/" + userContext._id)
      .then(result => {
        console.log(result);
        // if (result.status === 200) {
        //   this.props.history.push("/login");
        // }
        setOrder(result.data.result.orders);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  console.log(userContext);
  console.log(order);

  return (
    <div>
      <MDBRow className="mx-auto w-50 mt-5">
        <MDBCol className="text-center">
          <MDBCard narrow>
            <center>
              <MDBCardImage
                cascade
                className="img-fluid my-4 w-50 h-50 rounded-circle"
                src="http://cdn.onlinewebfonts.com/svg/img_237553.png"
              />
            </center>
            <MDBCardBody cascade>
              <MDBCardTitle>
                <h1>Personal Information</h1>
              </MDBCardTitle>
              <MDBCardText>
                <h3>Name : {userContext.name}</h3>
                <h3>Email : {userContext.email}</h3>
                <h3>Telephone : {userContext.telephone}</h3>
              </MDBCardText>
            </MDBCardBody>

            <MDBBtn color="primary" onClick={toggle}>
              View History
            </MDBBtn>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBModal isOpen={modal} toggle={toggle}>
        <MDBModalHeader toggle={toggle}>Service History</MDBModalHeader>
        <MDBModalBody>
          <MDBTable bordered className="text-center">
            <MDBTableHead>
              <tr>
                <th>Date</th>
                <th>Service</th>
                <th>Amount</th>
                <th>Price</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {order.map(item => (
                <tr>
                  <td>{item.date}</td>
                  <td>{item.service}</td>
                  <td>{item.amount}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="primary" onClick={toggle}>
            Close
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </div>
  );
}

export default ProfileUser;
