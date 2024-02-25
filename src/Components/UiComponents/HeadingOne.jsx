import React from 'react';

const HeadingOne = (props) => {
  return (
    <div className=''>

        <div className='pl-10 text-left'>
            <h2 className=' font-bold font-cinzel text-lg sm:text-2xl pt-8 pb-2  '> {props.headText} </h2>
            <hr class="w-48 h-1  bg-[#FFDE59] border-0 rounded " />

        </div>

    </div>
  )
}

export default HeadingOne