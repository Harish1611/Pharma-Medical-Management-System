import React from 'react';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import { Grid } from '@mui/material';



const MedServicesCard = ({ cardData }) => {
    // Check if cardData is undefined or not an array
    if (!Array.isArray(cardData)) {
      // Return null or handle the case where cardData is not an array
      return null;
    }
  
     console.log(cardData)
    // Map over cardData since it's an array
    return (
      <Grid container spacing={2}>
        {cardData.map((service, index) => (
          <Grid key={index} item xs={12} sm={6}>
            <div className='border rounded-md p-4 m-8 hover:shadow-md cursor-pointer flex'>
              <div className='flex-col'>
                {service.icon}
                
              </div>
              <div className='flex-col'>
                <p className=' text-black font-bold text-lg px-10 hover:text-blue-800'>{service}</p>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    );
  }
  

  export default MedServicesCard;
