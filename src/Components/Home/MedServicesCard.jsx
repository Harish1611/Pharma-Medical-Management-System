import React from 'react';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import SummarizeIcon from '@mui/icons-material/Summarize';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import { Grid } from '@mui/material';


const MedServicesCard = ({ cardData }) => {
  return (
    <Grid container spacing={2}>
      {cardData.map((item, index) => (
        <Grid key={index} item xs={12} sm={6}>
          <div className='border rounded-md p-4  hover:shadow-md cursor-pointer flex'>
            <div className='flex-col'>
              {item.icon} {/* Render the icon component */}
            </div>
            <div className='flex-col'>
              <p class='text-slate-800 font-semibold text-lg hover:text-slate-500 px-8'>{item.service}</p> {/* Render the service name */}
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

export default MedServicesCard;
