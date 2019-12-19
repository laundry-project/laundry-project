import React from "react";
import { useHistory } from "react-router-dom";
import { clientAuth } from "./clientAuth";

import { MDBAlert } from "mdbreact";

function AuthButton() {
  let history = useHistory();

  return clientAuth.isAuthenticated ? (
    <MDBAlert color="primary">
      <h1>Welcome to Laundry Komodo!</h1>
      {/* <button
        onClick={() => {
          clientAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button> */}
    </MDBAlert>
  ) : (
    <MDBAlert color="primary">{/* <h1>You are not logged in.</h1> */}</MDBAlert>
  );
}

export default AuthButton;
