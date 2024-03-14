import React from "react";
import AliceCarousel from "react-alice-carousel";
import { HomeSectionCard } from "../HomeSectionCard/HomeSectionCard";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Button } from "@mui/material";
import HomeSectionButtonRight from "./HomeSectionButtonRight";
import HomeSectionButtonLeft from "./HomeSectionButtonLeft";


export const HomeSectionCarousel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);

  return (
    <div className="relative px-8 lg:px-18 border border-black">
      <HomeSectionButtonRight/>
      <HomeSectionButtonLeft/>
      
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          disableDotsControls
          infinite
          responsive={responsive}
        />
      </div>
    </div>
  );
};
