import React from "react";
import { useHistory } from "react-router-dom";
import { clientAuth } from "./clientAuth";

import { MDBAlert } from "mdbreact";

function AuthButton() {
  let history = useHistory();

  return clientAuth.isAuthenticated ? (
    <MDBAlert color="primary">
      Welcome to Laundry Page!
      <button
        onClick={() => {
          clientAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </MDBAlert>
  ) : (
    <MDBAlert color="danger">
      <h3>You are not logged in.</h3>
    </MDBAlert>
  );
}

export default AuthButton;
