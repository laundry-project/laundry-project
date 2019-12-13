import React from "react";

export const ServiceContext = React.createContext();
export function ServiceProvider(props) {
  const [service] = React.useState([
    {
      key: "Cuci Kering",
      value: "Cuci Kering",
      text: "Cuci Kering",
      price: 5000
    },
    {
      key: "Cuci Kering & Setrika",
      value: "Cuci Kering & Setrika",
      text: "Cuci Kering & Setrika",
      price: 8000
    },
    {
      key: "Setrika",
      value: "Setrika",
      text: "Setrika",
      price: 5000
    },
    {
      key: "Cuci Kiloan",
      value: "Cuci Kiloan",
      text: "Cuci Kiloan",
      price: 8000
    }
  ]);
  return (
    <ServiceContext.Provider value={service}>
      {props.children}
    </ServiceContext.Provider>
  );
}
