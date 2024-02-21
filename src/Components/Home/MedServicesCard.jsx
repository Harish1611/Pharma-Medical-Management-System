import React from 'react';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import SummarizeIcon from '@mui/icons-material/Summarize';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useNavigate } from "react-router-dom";


import { Grid } from '@mui/material';


const MedServicesCard = ({ cardData }) => {
  const navigate = useNavigate();

  return (
    <Grid container spacing={2}  >
      {cardData.map((item, index) => (
        <Grid key={index} item xs={12} sm={6} >
          <div className='border rounded-md py-4 px-2 sm:p-4  hover:shadow-md cursor-pointer flex overflow-hidden' onClick={() => navigate(`/${item.url}`)} >
            <div className='flex-col'>
              {item.icon} {/* Render the icon component */}
            </div>
            <div className='flex-col'>
              <p class='text-slate-800 font-semibold text-lg sm:text-lg hover:text-slate-500 px-3 sm:px-8'>{item.service}</p> {/* Render the service name */}
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

export default MedServicesCard;
