import React from "react";

export const NewArrivalsCard = ({product}) => {

  const handleClick = () => {
    window.location.href = product.productLink;
  };

  return (
    <a href={product.productLink} onClick={handleClick} className="cursor-pointer">
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border">
      <div className="h-[20rem] w-[15rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product.imageUrl}
          alt=""
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">
          {product.brand}
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          {product.title}
        </p>
      </div>
    </div>
    </a>
  );
};
