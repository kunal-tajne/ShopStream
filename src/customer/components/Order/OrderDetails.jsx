import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import myImage from "../../../Data/newArrivalsData/NewArrival1.jpeg";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20 mt-5">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-10">
        <OrderTracker />
      </div>
      <Grid container spacing={2} className="space-y-5">
      {[1,1,1,1,1].map((item) => <Grid
          items
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid items xs={9}>
            <div className="flex items-center space-x-5">
              <img
                className="w-[6rem] h[6rem] object-cover object-top"
                src={myImage}
                alt=""
              />
              <div>
                <p className="font-semibold">
                  Sequin Denim Cami Mini Dress Knee length
                </p>
                <p className="font-semibold opacity-90 text-xs">
                  <span>Color: Starlight Blue</span> <span>Size : M</span>
                </p>
                <p className="font-semibold opacity-90 text-xs">Seller : Forever 21</p>
                <p className="font-semibold opacity-90 text-xs"> Price : $23.99</p>
              </div>
            </div>
            </Grid>
   
            <Grid item xs={3}>
            <Box sx={{color:deepPurple[500]}}>

            <StarBorderIcon sx={{fontSize:"2rem"}} fontSize="2px" className="px-2"/>
            <span>Rate & Review Product</span>
            </Box>
            </Grid>
        </Grid>)}
        
      </Grid>
    </div>
  );
};

export default OrderDetails;
