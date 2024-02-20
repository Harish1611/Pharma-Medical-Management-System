import React from 'react';
import MedServicesCard from './MedServicesCard';
import { MedServicesData } from './MedServicesData';

const MedServices = () => {
  return (
    <div className=' mx-4 my-10 sm:mx-40 sm:my-20'>
      <MedServicesCard cardData={MedServicesData} />
    </div>
  );
}

export default MedServices;
