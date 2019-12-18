import React, { useState, useEffect, useContext } from "react";

import { UserContext } from "./UserContext";
import { ServiceContext } from "./ServiceContext";
import axios from "axios";

// import { idUser } from "../store/actions";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
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

              {order.map(item => (
                <h3>
                  {item.service} - {item.amount} - {item.date} - {item.address}{" "}
                  - {item.price}
                </h3>
              ))}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
  // }
}

export default ProfileUser;
