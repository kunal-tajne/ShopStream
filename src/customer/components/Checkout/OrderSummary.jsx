import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItems from "../Cart/CartItems";
import Cart from "../Cart/Cart";

const OrderSummary = () => {
  return (
    <div className="space-y-6">
      <div className="m-16 -mb-1 -mt-1 p-5 mr-20 shadow-lg rounded-md border">
        <AddressCard />
      </div>
      <div className="p-2">
      <Cart/>
      </div>
        
    </div>
  );
};

export default OrderSummary;
