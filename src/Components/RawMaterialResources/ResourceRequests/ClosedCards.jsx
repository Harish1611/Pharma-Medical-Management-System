import React from 'react';
import ScaleIcon from '@mui/icons-material/Scale';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const ClosedCards = (props) => {
    return (
        <div className=" text-left border rounded-md py-6 px-6 mx-2 my-4 sm:p-6  bg-slate-100   cursor-pointer  overflow-hidden">
        <div>
          <h2 className="text-md font-poppins font-semibold">
           {props.resource_name}
          </h2>
          <div className=" sm:flex  ">
          <p className=" text-gray-600 font-poppins text-sm pt-1">   <ScaleIcon style={{ width: '14px', height: '14px' }} className=" text-gray-500" />  Quantity: {props.quantity} </p>
          <p className=" text-gray-600 font-poppins text-sm pt-1 sm:pl-6">  <ContactMailIcon style={{ width: '14px', height: '14px' }} className=" text-gray-500" />  Requested By: {props.requested_by} </p>
          <p className=" text-gray-600 font-poppins text-sm pt-1 sm:pl-6">  <AccessTimeFilledIcon style={{ width: '14px', height: '14px' }} className=" text-gray-500" />  Requested Date: {props.requested_date} </p>
          <p className=" text-gray-600 font-poppins text-sm pt-1 sm:pl-6">  <ContactMailIcon style={{ width: '14px', height: '14px' }} className=" text-gray-500" />  Closed By: {props.requested_by} </p>
          <p className=" text-gray-600 font-poppins text-sm pt-1 sm:pl-6">  <AccessTimeFilledIcon style={{ width: '14px', height: '14px' }} className=" text-gray-500" />  Closed Date: {props.requested_date} </p>

  
          </div>
        </div>
  
        <div className="flex sm:justify-end  pt-2 sm:pt-1 ">
          <button
            onClick={() => {}}
            className="bg-yellow-500 hover:bg-black text-sm text-white font-semibold font-poppins py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
            type="button"
          >
            Full Report
          </button>
        </div>
      </div>
    );
}

export default ClosedCards;
