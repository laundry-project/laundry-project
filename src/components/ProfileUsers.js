<<<<<<< HEAD
import React, { useState, useContext } from "react";
=======
import React, { useState, useEffect, useContext } from "react";
>>>>>>> robyAfrizal

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
  MDBCol
} from "mdbreact";

const URI = process.env.REACT_APP_API_URI;

function ProfileUser() {
  let [userContext, setUserContext] = useContext(UserContext);
  let [order, setOrder] = useState([]);

<<<<<<< HEAD
  let [toggle, setToggle] = useState({
    show: false,
    collapseID: ""
  });

  const toggleCollapse = collapseID => () => {
    setToggle(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  };
=======
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
>>>>>>> robyAfrizal

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
<<<<<<< HEAD

// {
//   Array.isArray(this.props.userData.order) &&
//     this.props.userData.order.map((object, i) => {
//       console.log(object);
//       let date = new Date(object.date);
//       let fullDate = `${date.getDate()}-${date.getMonth() +
//         1}-${date.getFullYear()}`;
//       let time = `${date.getHours()}:${date.getMinutes()}`;
//       return [
//         <tr key={i}>
//           <th scope="col">{i + 1}</th>
//           {/* <td>{object.laundry.name}</td> */}
//           <td>{time}</td>
//           <td>{fullDate}</td>
//           <td>{object.service}</td>
//         </tr>
//       ];
//     });
// }
=======
>>>>>>> robyAfrizal
