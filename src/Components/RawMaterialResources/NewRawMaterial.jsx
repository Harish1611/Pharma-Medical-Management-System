import React from 'react';
import HeadingOne from '../UiComponents/HeadingOne';
import { Grid } from '@mui/material';
import { GroupAdd } from '@mui/icons-material';

const NewRawMaterial = () => {
  return (

    <div className='mt-4'>

         <HeadingOne headText="Create New Resources" />
         <form class="bg-white px-2 py-2 m-2 sm:px-20 sm:py-10 sm:m-14 border-slate-200 rounded-md shadow-md">

          <Grid container spacing={2}>

            <Grid item sm={4} xs={12}>
         <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="resourcename" type="text" placeholder="Resource Name" />
         </Grid>
         <Grid item sm={4} xs={12} >
         <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="resourcetype" type="text" placeholder="Resource Type" />
         </Grid>
         <Grid item sm={4} xs={12} >
         <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="requestby" type="text" placeholder="Requested By" />
         </Grid>
         <Grid item sm={4} xs={12} >
         <input class="appearance-none  w-full py-2 px-3 text-gray-700 " id="resourcefile" type="file" placeholder="Requested By" />
         </Grid>
         
         <Grid item xs={8}>
         <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        
         Create
         </button>
         </Grid>

         </Grid>
      </form>

    </div>
  )
}

export default NewRawMaterial