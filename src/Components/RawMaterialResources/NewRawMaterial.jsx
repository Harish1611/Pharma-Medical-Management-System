import React from 'react';
import HeadingOne from '../UiComponents/HeadingOne';

const NewRawMaterial = () => {
  return (
    <div>

         <HeadingOne headText="Create New Resources" />
         <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

         <div>
         <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Resource Name" />
         </div>

         <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        
      Create
      </button>
         </form>

    </div>
  )
}

export default NewRawMaterial