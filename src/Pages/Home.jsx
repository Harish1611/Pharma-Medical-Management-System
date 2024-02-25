import React from "react";
import WelcomBanner from "../Components/Home/WelcomBanner";
import MedServices from "../Components/Home/MedServices";
import HeadingOne from "../Components/UiComponents/HeadingOne";

const Home = () => {
  return (
    <div className="">

      <WelcomBanner />


      <HeadingOne headText="Our Med Services" />
      <MedServices />

    </div>
  );
};

export default Home;
