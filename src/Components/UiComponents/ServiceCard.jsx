import React from 'react';
import WarehouseIcon from '@mui/icons-material/Warehouse';

const ServiceCard = (props) => {

  

  

  return (
    <div className=''>

        <div className='text-left border rounded-md py-6 px-6 mx-2 sm:p-6  hover:-translate-y-1  hover:shadow-md cursor-pointer flex overflow-hidden'>
           
            <h2 className='font-medium font-poppins text-md sm:text-xl'> {props.headText} </h2>
            
        </div>

    </div>
  )
}

export default ServiceCard