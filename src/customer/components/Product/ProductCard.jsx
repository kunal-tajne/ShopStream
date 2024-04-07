import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/product/${product.id}`)} className="productCard m-2 mb-20 w-[15rem] h-[30rem] transition-all cursor-pointer">
      <img
        className="h-full w-full object-cover object-left-top"
        src={product.imageUrl}
        alt=""
      />

      <div className="textPart bg-white p-3">
        <div>
        <p className="font-bold opacity-80">{product.brand}</p>
          <p className=" text-gray ">{product.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">${product.discountedPrice}</p>
          <p className="line-through opacity-50">${product.price}</p>
          <p className="text-green-600 font-semibold">({product.discountPercent}%)</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
