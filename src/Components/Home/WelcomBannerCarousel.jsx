import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { WelcomBannerData } from "./WelcomBannerData";

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

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      disableButtonsControls
      disableDotsControls
      autoPlay
      autoPlayInterval={2000}
      infinite
    />
  );
};

export default WelcomBannerCarousel;
