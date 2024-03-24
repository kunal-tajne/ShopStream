import React from "react";
import TopCarousel from "../components/HomePageCarousel/TopCarousel";
import { HomeSectionCarousel } from "../components/HomeSectionCarousel/HomeSectionCarousel";
import { HomeSectionCard } from "../components/HomeSectionCard/HomeSectionCard";
import { NewArrivalsCard } from "../components/HomeSectionCard/NewArrivalsCard";
import { newArrivals } from "../../Data/newArrivals";
import { banner } from "../../Data/banner";

export const HomePage = () => {
  return (
    <div>
      <TopCarousel />
      <div className="space-y-10 py-5 justify-center px-6">
        
        <HomeSectionCarousel
          data={newArrivals}
          sectionName={"New Arrivals"}
          CardData={NewArrivalsCard}
        />
        <div><img src={banner.Banner3} alt="Men's Clothing Offer Banner"/></div>
        
        <HomeSectionCarousel
          data={newArrivals}
          sectionName={"Men's Latest Collection"}
          CardData={HomeSectionCard}
        />
        <HomeSectionCarousel
          data={newArrivals}
          sectionName={"Women's Latest Collection"}
          CardData={HomeSectionCard}
        />
        <HomeSectionCarousel
          data={newArrivals}
          sectionName={"Accessories"}
          CardData={HomeSectionCard}
        />
        <HomeSectionCarousel
          data={newArrivals}
          sectionName={"ShopStream Favorites"}
          CardData={HomeSectionCard}
        />
      </div>
    </div>
  );
};
