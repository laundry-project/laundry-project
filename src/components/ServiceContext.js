import React from "react";

export const ServiceContext = React.createContext();
export function ServiceProvider(props) {
  const [service] = React.useState([
    {
      key: "Cuci Kering",
      value: "Cuci Kering",
      text: "Dry Wash",
      price: 5000
    },
    {
      key: "Cuci Kering & Setrika",
      value: "Cuci Kering & Setrika",
      text: "Dry Wash & Iron",
      price: 8000
    },
    {
      key: "Setrika",
      value: "Setrika",
      text: "Iron",
      price: 5000
    },
    {
      key: "Cuci Kiloan",
      value: "Cuci Kiloan",
      text: "Wash Unit",
      price: 8000
    }
  ]);
  return (
    <ServiceContext.Provider value={service}>
      {props.children}
    </ServiceContext.Provider>
  );
}
