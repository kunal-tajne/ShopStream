import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import KeyboardArrowLeftIcon from "@mui/icons-material/NavigateBefore";

export const HomeSectionCarousel = ({data, sectionName, HomeSectionCard}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = data.slice(0, 10).map((item) => (
    <HomeSectionCard product={item} />
  ));

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const handleSlideChange = (event) => {
    setCurrentIndex(event.item);
  };

  const renderPrevButton = () => {
    if (currentIndex === 0) {
      return null;
    }
    return (
      <KeyboardArrowLeftIcon
        sx={{
          width: "2rem",
          height: "4rem",
          transform: "rotate(360deg)",
          color: "black",
          position: "absolute",
          top: "8rem",
          left: "-2.0rem",
          bgcolor: "white",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.4)",
          padding: "2px",
          "&:hover": {
            cursor: "pointer",
            color: "blue",
          },
        }}
      />
    );
  };

  const renderNextButton = () => {
    if (currentIndex === 4) {
      return null;
    }
    return (
      <KeyboardArrowLeftIcon
        sx={{
          width: "2rem",
          height: "4rem",
          transform: "rotate(180deg)",
          color: "black",
          position: "absolute",
          top: "8rem",
          right: "-2.5rem",
          bgcolor: "white",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.4)",
          padding: "2px",
          "&:hover": {
            cursor: "pointer",
            color: "blue",
          },
        }}
      />
    );
  };

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5 px-8" style={{ fontFamily: 'Roboto, sans-serif' }}>{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableDotsControls
          onSlideChanged={handleSlideChange}
          renderNextButton={renderNextButton}
          renderPrevButton={renderPrevButton}
        />
      </div>
    </div>
  );
};
