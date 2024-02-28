import React from "react";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import SummarizeIcon from "@mui/icons-material/Summarize";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useNavigate } from "react-router-dom";
import { useSpring, animated, config, useInView } from "react-spring";


import { Grid } from "@mui/material";

const MedServicesCard = ({ cardData }) => {
  const navigate = useNavigate();

  const [MedCardRef, MedCardsInView] = useInView({
    triggerOnce: true,
  });
  
  
  const MedCards = useSpring({
    opacity: MedCardsInView ? 1 : 0,
    transform: MedCardsInView
      ? "translate3d(0, 0, 0)"
      : "translate3d(0, 100%, 0)",
    config: config.default,
  });


  return (
    <animated.div
      className="text"
      ref={MedCardRef}
      style={MedCards}
    >
      <Grid container spacing={2}>
        {cardData.map((item, index) => (
          <Grid key={index} item xs={12} sm={6}>
            <div
              className="border rounded-md py-4 px-2 mx-8 sm:p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300  hover:shadow-md cursor-pointer flex overflow-hidden"
              onClick={() => navigate(`/${item.url}`)}
            >
              <div className="flex-col text-[#FFDE59]">
                {item.icon} {/* Render the icon component */}
              </div>
              <div className="flex-col">
                <p class="text-slate-800 font-normal font-poppins text-lg sm:text-lg hover:text-slate-500 px-3 sm:px-8">
                  {item.service}
                </p>{" "}
                {/* Render the service name */}
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </animated.div>
  );
};

export default MedServicesCard;
