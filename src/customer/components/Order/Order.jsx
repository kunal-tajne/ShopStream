import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "./OrderCard";

const orderStatus = [
  { label: "On The Way", value: "on_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" },
];

const Order = () => {
  return (
    <div className="px-5 lg:px-20">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={12} sm={12} md={2}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">ORDER STATUS</h1>
              {orderStatus.map((option) => (
                <div className="flex items-center">
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />

                  <label className="pl-3" htmlFor={option.value}>
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        
        <Grid item xs={12} sm={12} md={9} className="pt-5">
        <Grid
        container
        spacing={2}
        sx={{ justifyContent: "space-between" }}
        alignItems="center"
        className="mb-5"
      >
        <Grid item xs={6}>
          <p className="text-lg font-semibold pl-2">Product Details</p>
        </Grid>

        <Grid item xs={2}>
          <p className="text-lg font-semibold ">Price</p>
        </Grid>

        <Grid item xs={4}>
          <p className="text-lg font-semibold">Status</p>
        </Grid>
      </Grid>
      <div className="space-y-8">
      {[1, 1, 1, 1, 1].map((items) => (
            <OrderCard />
          ))}
      </div>
          
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
