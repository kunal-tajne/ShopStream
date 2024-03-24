import React from "react";
import CartItems from "./CartItems";
import { Button } from "@mui/material";

const Cart = () => {
  return (
    <div>
    <div>
    </div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative mt-2">
        <div className="col-span-2">
          {[1,1].map((items) => <CartItems />)}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className=" border" style={{ borderTopLeftRadius:"6px", borderTopRightRadius:"6px" }}>
            <p className="uppercase font-bold opacity-80 p-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold p-4 pt-0">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>$39.99</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Discount</span>
                <span className="text-green-600">-$16.00</span>
              </div>
              <div className="flex justify-between mr-1 pt-3 text-black">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>
            </div>
          </div>
          <div className="flex border text-black font-bold justify-between p-2" style={{ borderBottomLeftRadius:"6px", borderBottomRightRadius:"6px"}}>
            <p className="m-2">Total</p>
            <p className="m-2">$23.99</p>
          </div>

            <Button
            variant="contained"
            fullWidth
              sx={{
                px: "1rem",
                py: "0.5rem",
                bgcolor: "green",
                marginTop: 2,
                fontWeight:"bold"
              }}
            >
              {" "}
              Place Order
            </Button>
          </div>
      </div>
    </div>
  );
};

export default Cart;
