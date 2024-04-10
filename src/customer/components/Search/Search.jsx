import React from "react";
import image1 from "../../../Data/UnderConstruction.gif";

const Search = () => {
  return (
    <div className="flex justify-center items-center">
      <img
        alt=""
        src={image1}
        className="h-100 w-100"
      ></img>

      <p className="text-xl">The search is under development :)</p>
    </div>
  );
};

export default Search;
