import React, { useContext } from "react";
import { MDBAlert } from "mdbreact";

import { clientAuth } from "./clientAuth";
import { UserContext } from "./UserContext";

function AuthButton() {
  const [user] = useContext(UserContext);
  const nameFromLocalStorage = JSON.parse(localStorage.getItem("user"));
  return (
    clientAuth.isAuthenticated && (
      <MDBAlert color="primary" className="text-center">
        <h1>
          Welcome{" "}
          {user.name
            ? user.name.toUpperCase()
            : nameFromLocalStorage.toUpperCase()}{" "}
          to Laundry Komodo!
        </h1>
      </MDBAlert>
    )
  );
}

export default AuthButton;
