import React from 'react';
import MedServicesCard from './MedServicesCard';
import { MedServicesData } from './MedServicesData';

const MedServices = () => {
  return (
    <div>
      <MedServicesCard cardData={MedServicesData} />
    </div>
  );
}

export default MedServices;
