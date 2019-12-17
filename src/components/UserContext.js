import React from "react";

export const UserContext = React.createContext();
export function UserProvider(props) {
  const user = React.useState ({})
  return (
    <UserContext.Provider value={user}>
      {props.children}
    </UserContext.Provider>
  );
}
