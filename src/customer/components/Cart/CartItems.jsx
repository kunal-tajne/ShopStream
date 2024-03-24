import React from "react";
import myImage from "../../../Data/newArrivalsData/NewArrival1.jpeg";
import myImage2 from "../../../Data/newArrivalsData/NewArrival2.webp";
import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItems = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[9rem] h-[9rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={myImage}
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">
            Sequin Denim Cami Mini Dress Knee length
          </p>
          <p className="opacity-80">Size : M, Starlight Blue</p>
          <p className="opacity-70 mt-2">Seller: Forever 21</p>
          <div className="flex items-center space-x-2">
            <p className="font-semibold">$23.99</p>
            <p className="line-through opacity-50">$39.99</p>
            <p className="text-green-600 font-semibold">(40%)</p>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
            <IconButton sx={{color:"rgb(44,205,168)"}}>
              <AddCircleOutlineIcon />
            </IconButton>
        </div>

        <div className="items-center lg:mt-0 sm:mt-5 xs:mt-5">
          <Button sx={{bgcolor:"RGB(145 85 253)"}} variant="contained">Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
