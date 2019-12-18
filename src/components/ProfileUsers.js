import React, { useState, useEffect, useContext } from "react";

import { UserContext } from "./UserContext";
import { ServiceContext } from "./ServiceContext";
import axios from "axios";

import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBTable,
  MDBTableBody,
  MDBTableHead
} from "mdbreact";

const URI = process.env.REACT_APP_API_URI;

function ProfileUser() {
  let [userContext, setUserContext] = useContext(UserContext);
  let [order, setOrder] = useState([]);

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
    <MDBRow className="mx-auto w-50 mt-5">
      <MDBCol className="text-center">
        <MDBCard narrow>
          <center>
            <MDBCardImage
              cascade
              className="img-fluid my-4 w-50 h-50 rounded-circle"
              src="https://mdbootstrap.com/img/Photos/Avatars/img(30).jpg"
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

              <MDBTable bordered>
                <MDBTableHead color="primary-color">
                  <tr>
                    <th>Tanggal</th>
                    <th>Service</th>
                    <th>Amount</th>
                    <th>Price</th>
                    <th>Address</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {order.map((item, index) => (
                    <tr key={index}>
                      <td>{item.date}</td>
                      <td>{item.service}</td>
                      <td>{item.amount}</td>
                      <td>{item.price}</td>
                      <td>{item.address}</td>
                    </tr>
                  ))}
                </MDBTableBody>
              </MDBTable>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
  // }
}

export default ProfileUser;
