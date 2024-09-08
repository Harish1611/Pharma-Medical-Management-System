import React from "react";
import ScaleIcon from '@mui/icons-material/Scale';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
const RequestCards = () => {
  return (
    <div className=" text-left border rounded-md py-6 px-6 mx-2 sm:p-6  bg-slate-200   cursor-pointer  overflow-hidden">
      <div>
        <h2 className="text-md font-poppins font-semibold">
          {" "}
          Litacode Powder mixture{" "}
        </h2>
        <div className="flex">
        <p className=" text-gray-600 font-poppins text-sm pt-1">   <ScaleIcon style={{ width: '14px', height: '14px' }} className=" text-gray-500" />  Quantity: 40kgs </p>
        <p className=" text-gray-600 font-poppins text-sm pt-1 pl-6">  <ContactMailIcon style={{ width: '14px', height: '14px' }} className=" text-gray-500" />  Requested By: Harish Naidu B </p>
        <p className=" text-gray-600 font-poppins text-sm pt-1 pl-6">  <AccessTimeFilledIcon style={{ width: '14px', height: '14px' }} className=" text-gray-500" />  Requested Date: 02-05-2024 </p>

        </div>
      </div>

      <div className="flex justify-end  ">
        <button
          onClick={() => {}}
          className="bg-yellow-500 hover:bg-black text-sm text-white font-semibold font-poppins py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
          type="button"
        >
          Take Action
        </button>
      </div>
    </div>
  );
};

export default RequestCards;
