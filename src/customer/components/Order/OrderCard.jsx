import { Grid } from "@mui/material";
import React from "react";
import myImage from "../../../Data/newArrivalsData/NewArrival1.jpeg";
import AdjustIcon from "@mui/icons-material/Adjust";

const OrderCard = () => {
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "space-between" }}
        alignItems="center"
        className="border shadow-lg border-s-8 rounded-md hover:shadow-2xl"
      >
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[6rem] h-[6rem] object-cover object-top"
              src={myImage}
              alt=""
            />
            <div className="pt-4 space-y-1">
              <p>Sequin Denim Cami Mini Dress Knee length</p>
              <p className="opacity-60 text-xs font-semibold">Size : M</p>
              <p className="opacity-60 text-xs font-semibold">
                Color : Starlight Blue
              </p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>$23.99</p>
        </Grid>

        <Grid item xs={4}>
          {true && (
            <div>
              
              <p>
                <AdjustIcon
                  sx={{ width: "18px", height: "18px" }}
                  className="text-green-600 mr-2 -ml-2"
                />
                <span>Delivered on March 2 2024</span>
                
              </p>
              <p className="text-xs pl-4">Your item has been delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery by April 2 2024</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
