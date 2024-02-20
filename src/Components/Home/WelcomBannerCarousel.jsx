import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { WelcomBannerData } from "./WelcomBannerData";
import { WelcomBannerMobileData } from "./WelcomBannerData";

const WelcomBannerCarousel = () => {
  const items = WelcomBannerData.map((item) => (
    <img
      className="cursor-pointer"
      //   style={{ height: "700px", width: "1600px", objectFit: "cover" }}
      role="presentation"
      src={item.image}
      alt=""
    />
  ));

  const itemsMobile = WelcomBannerMobileData.map((item) => (
    <img
      className="cursor-pointer"
      //   style={{ height: "700px", width: "1600px", objectFit: "cover" }}
      role="presentation"
      src={item.image}
      alt=""
    />
  ));
   
  return (
    <div>

    {/* Desktop Carousel */}
    <div className="sm:block hidden">
    <AliceCarousel
      mouseTracking
      items={items}
      disableButtonsControls
      disableDotsControls
      autoPlay
      autoPlayInterval={2000}
      infinite
    />
   </div>

   {/* Mobile Carousel */}
   <div className="sm:hidden block  ">

    <AliceCarousel
      mouseTracking
      items={itemsMobile}
      disableButtonsControls
      disableDotsControls
      autoPlay
      autoPlayInterval={2000}
      infinite
    />
    </div>
  </div>
  );

  
};

export default WelcomBannerCarousel;
