import React from 'react';
import HeadingOne from '../UiComponents/HeadingOne';
import { Grid } from '@mui/material';
import { GroupAdd } from '@mui/icons-material';

const NewRawMaterial = () => {
  return (

    <div className='mt-4'>

         <HeadingOne headText="Create New Resources" />
         <form className="bg-white px-2 py-2 m-2 sm:px-20 sm:py-10 sm:m-14 border-slate-200 ">

          <Grid container spacing={2}>

            <Grid item sm={4} xs={12}>
         <label for="resourcename" className=' font-poppins font-medium  ' >Resource Name</label>
         <input className=" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="resourcename" id="resourcename" type="text" placeholder="Enter Resource Name" />
         </Grid>
         <Grid item sm={4} xs={12} >
         <label for="resourcetype" className=' font-poppins font-medium  ' >Resource Type</label>

         <input className=" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="resourcetype" type="text" placeholder="Enter Resource Type" />
         </Grid>
         <Grid item sm={4} xs={12} >
         <label for="requestfor" className=' font-poppins font-medium  ' >Requested For</label>

         <input className=" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="requestfor" type="text" placeholder=" Reason for Request" />
         </Grid>
        
         <Grid item sm={4} xs={12}>
         <label for="quantity" className=' font-poppins font-medium  ' >Quantity</label>
         <input className=" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="quantity" id="auantity" type="text" placeholder="Enter Quantity" />
         </Grid>
         <Grid item sm={4} xs={12} >
         <label for="storedat" className=' font-poppins font-medium  ' >Stored At</label>

         <input className=" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="storedat" id="storedat" type="text" placeholder="Enter Storage Location" />
         </Grid>
         <Grid item sm={4} xs={12} >
         <label for="addedby" className=' font-poppins font-medium  ' >Added By</label>

         <input className=" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="addedby" id="addedby" type="text" placeholder="Added By" />
         </Grid>
         <Grid item sm={4} xs={12} >
         <input className="appearance-none  w-full py-3 px-0 text-gray-700 " id="resourcefile" type="file" placeholder="Requested By" />
         </Grid>
         
         <Grid item xs={12}>
         <button className="bg-yellow-500 hover:bg-black text-white font-semibold font-cinzel py-2 px-4 rounded focus:outline-none  focus:shadow-outline" type="button">
        
         Create Resource
         </button>
         </Grid>

         </Grid>
      </form>

    </div>
  )
}

export default NewRawMaterial