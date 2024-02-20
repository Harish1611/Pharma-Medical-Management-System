import React from 'react';
import MedServicesCard from './MedServicesCard';
import { MedServicesData } from './MedServicesData';

const MedServices = () => {
  return (
    <div className=' mx-40 my-20'>
      <MedServicesCard cardData={MedServicesData} />
    </div>
  );
}

export default MedServices;
