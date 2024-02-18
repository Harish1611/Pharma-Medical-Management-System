import React from 'react';
import MedServicesCard from './MedServicesCard';
import { MedServicesData } from './MedServicesData';

const MedServices = () => {
  const items = MedServicesData.map((item) => (
    item.service
  ));

  console.log(items); // Log the items array to the console
  
  return (
    <div>
      <MedServicesCard cardTitle={items} card />
    </div>
  )
}

export default MedServices;
