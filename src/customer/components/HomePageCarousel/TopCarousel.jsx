import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {mainCarouselData} from './MainCarouselData';

const TopCarousel = () => {
    
    const items = mainCarouselData.map((item) => <img className = 'cursor-pointer' role = 'presentation' src = {item.image} alt=""/>)

    return(
    <AliceCarousel
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={1000}
            animationDuration={1000}
            animationType="fadeout"
            infinite
            touchTracking={false}
            disableDotsControls={false}
            disableButtonsControls
            items={items}
        />
        )
    
    }

export default TopCarousel;