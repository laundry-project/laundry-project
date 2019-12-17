import React, { useState, useContext } from "react";

import { UserContext } from "./UserContext";

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
  MDBCollapse
} from "mdbreact";

function ProfileUser() {
  let [userContext, setUserContext] = useContext(UserContext);

  let [toggle, setToggle] = useState({
    show: false,
    collapseID: ""
  });

  // constructor(props) {
  //   super(props);
  //   this.state = { show: false, collapseID: "" };
  // }

  // componentDidMount() {
  //   // this.props.getUserAction(this.props.history);
  // }

  const toggleCollapse = collapseID => () => {
    setToggle(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  };

  // render() {
  //   console.log(this.state);
  //   console.log(this.props);
  console.log(userContext);
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
            </MDBCardText>

            <MDBBtn
              color="primary"
              href="!#"
              onClick={toggleCollapse("basicCollapse")}
              style={{ marginBottom: "1rem" }}
            >
              History Order
            </MDBBtn>

            <MDBCollapse id="basicCollapse" isOpen={toggle.collapseID}>
              <MDBTable>
                <MDBTableHead>
                  <tr>
                    <th>No</th>
                    {/* <th>Laundry</th> */}
                    <th>Time</th>
                    <th>Date</th>
                    <th>Service</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody></MDBTableBody>
              </MDBTable>
            </MDBCollapse>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
  // }
}

export default ProfileUser;

// {Array.isArray(this.props.userData.order) &&
//   this.props.userData.order.map((object, i) => {
//     console.log(object);
//     let date = new Date(object.date);
//     let fullDate = `${date.getDate()}-${date.getMonth() +
//       1}-${date.getFullYear()}`;
//     let time = `${date.getHours()}:${date.getMinutes()}`;
//     return [
//       <tr key={i}>
//         <th scope="col">{i + 1}</th>
//         {/* <td>{object.laundry.name}</td> */}
//         <td>{time}</td>
//         <td>{fullDate}</td>
//         <td>{object.service}</td>
//       </tr>
//     ];
//   })}
