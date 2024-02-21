import React from "react";
import WelcomBanner from "../Components/Home/WelcomBanner";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import MedServicesCard from "../Components/Home/MedServicesCard";
import MedServices from "../Components/Home/MedServices";

const Home = () => {
  return (
    <div className="">
      <Nav />

      <WelcomBanner />

      <MedServices />

      <Footer />
    </div>
  );
};

export default Home;
