import React from 'react';
import HeadingOne from '../../UiComponents/HeadingOne';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ResourceCards from './ResourceCards';


const ClosedIssues = () => {
    return (
        <div>
        <HeadingOne headText="Closed Issues" />
        <div className="mx-4 my-10 sm:mx-40 sm:my-20">
          <ResourceCards />
        <div className=" text-left border rounded-md py-6 px-6 mx-2 my-4 sm:p-6  bg-slate-50   cursor-pointer  overflow-hidden">
        <div>
    <h2 className="text-md font-poppins font-semibold">
     Received 20kg Sodium Hydrate instead of 40kg
    </h2>
    <div className=" sm:flex  ">
    {/* <p className=" text-gray-600 font-poppins text-sm pt-1">   <ScaleIcon style={{ width: '14px', height: '14px' }} className=" text-gray-500" />  Quantity: {props.quantity} </p> */}
    <p className=" text-gray-600 font-poppins text-sm pt-1 ">  <ContactMailIcon style={{ width: '14px', height: '14px' }} className=" text-gray-500" />  Issue Rised By: Harish Naidu B </p>
    <p className=" text-gray-600 font-poppins text-sm pt-1 sm:pl-6">  <AccessTimeFilledIcon style={{ width: '14px', height: '14px' }} className=" text-gray-500" />  Issue Rised Date: 05-09-24 </p>

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
        </div>
    </div>
    );
}

export default ClosedIssues;
