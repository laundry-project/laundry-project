import React from "react";
import { useHistory } from "react-router-dom";
import { clientAuth } from "./clientAuth";

function AuthButton() {
  let history = useHistory();

  return clientAuth.isAuthenticated ? (
    <p>
      Welcome to My Page!{" "}
      <button
        onClick={() => {
          clientAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

export default AuthButton;
