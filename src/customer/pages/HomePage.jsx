import React, { useState, useEffect } from "react";
import TopCarousel from "../components/HomePageCarousel/TopCarousel";
import { HomeSectionCarousel } from "../components/HomeSectionCarousel/HomeSectionCarousel";
import { HomeSectionCard } from "../components/HomeSectionCard/HomeSectionCard";
import { NewArrivalsCard } from "../components/HomeSectionCard/NewArrivalsCard";
import { newArrivals } from "../../Data/newArrivals";
import { banner } from "../../Data/banner";
import LoginUserForm from "../components/Auth/LoginForm";
import { useLocation, useNavigate } from "react-router-dom";
import AuthModal from "../components/Auth/AuthModal";
import FirstLogin from "../components/Auth/Firstlogin";
import FirstLoginAuthModal from "../components/Auth/FirstLoginAuthModal";
import { useSelector } from "react-redux";
import { womenCollection } from "../../Data/womenCollection";

export const HomePage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const { auth } = useSelector((store) => store);

  // UseEffect hook to show the login form pop-up when the component mounts
  useEffect(() => {
    setShowLoginForm(true);
  }, []);

  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };

  return (
    <div>
      <TopCarousel />
      <div className="space-y-10 py-5 justify-center px-6">
        <HomeSectionCarousel
          data={newArrivals}
          sectionName={"New Arrivals"}
          CardData={NewArrivalsCard}
        />
        <div>
          <img src={banner.Banner3} alt="Men's Clothing Offer Banner" />
        </div>
        <HomeSectionCarousel
          data={newArrivals}
          sectionName={"Men's Latest Collection"}
          CardData={HomeSectionCard}
        />
        <HomeSectionCarousel
          data={womenCollection}
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
        {/* Render AuthModal and pass the isModalOpen state and setIsModalOpen function */}
        {showLoginForm && !auth.user && <FirstLogin open={true} handleClose={handleCloseLoginForm} />}
        {/* Render FirstLoginAuthModal if the user is not logged in */}
        {!auth.user && <FirstLoginAuthModal />}
      </div>
    </div>
  );
};
