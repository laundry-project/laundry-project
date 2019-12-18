import React from "react";

export const OrderContext = React.createContext();

export function OrderProvider(props) {
  const [orderContext, setOrderContext] = React.useState({
  });

  return (
    <OrderContext.Provider value={[orderContext, setOrderContext]}>
      {props.children}
    </OrderContext.Provider>
  );
}
