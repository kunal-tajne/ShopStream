import React from "react";
import myImage from "../../../Data/newArrivalsData/NewArrival1.jpeg";
import myImage2 from "../../../Data/newArrivalsData/NewArrival2.webp";
import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../Redux/Customers/Cart/Action";

const CartItems = ({item, showButton}) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const handleRemoveItemFromCart = () => {
    const data = { cartItemId: item?.id, jwt };
    dispatch(removeCartItem(data));
  };
  const handleUpdateCartItem=(num)=>{
    const data={data:{quantity:item.quantity+num}, cartItemId:item?.id, jwt}
    dispatch(updateCartItem(data))
  }
  
  
  return (
    <div className="p-5 shadow-lg border rounded-md mb-4">
      <div className="flex items-center">
        <div className="w-[9rem] h-[9rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={item?.product.imageUrl}
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">
          {item?.product?.title}
          </p>
          <p className="opacity-80">Size : {item?.size}, Starlight Blue</p>
          <p className="opacity-70 mt-2">{item?.product?.brand}</p>
          <div className="flex items-center space-x-2">
            <p className="font-semibold">${item?.product.price}</p>
            <p className="line-through opacity-50">${item?.product.discountedPrice}</p>
            <p className="text-green-600 font-semibold">({item?.product.discountPercent} % Off)</p>
          </div>
        </div>
      </div>
      {showButton&& <div className="lg:flex items-center lg:space-x-10 pt-4">
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton onClick={()=>handleUpdateCartItem(-1)} disabled={item?.quantity<=1} color="primary" aria-label="add an alarm">
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">{item?.quantity}</span>
            <IconButton onClick={()=>handleUpdateCartItem(1)} color="primary" aria-label="add an alarm" sx={{color:"rgb(44,205,168)"}}>
              <AddCircleOutlineIcon />
            </IconButton>
        </div>

        <div className="items-center lg:mt-0 sm:mt-5 xs:mt-5">
          <Button onClick={handleRemoveItemFromCart} sx={{bgcolor:"RGB(145 85 253)"}} variant="contained">Remove</Button>
        </div>
      </div>
      
        
      </div>}
    </div>
  );
};

export default CartItems;
