import React from "react";

export const UserContext = React.createContext();

export function UserProvider(props) {
  const [userContext, setUserContext] = React.useState({
  });

  return (
    <UserContext.Provider value={[userContext, setUserContext]}>
      {props.children}
    </UserContext.Provider>
  );
}
