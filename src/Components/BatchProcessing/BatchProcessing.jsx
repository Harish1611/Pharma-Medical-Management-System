import React from 'react'
import HeadingOne from '../UiComponents/HeadingOne'
import TopBatchCards from './TopBatchCards'

const BatchProcessing = () => {
  return (
    <div className=''>

      <HeadingOne headText="Batch Processing" />

      <div className=" mx-4 my-10 sm:mx-40 sm:my-20 ">
      <TopBatchCards />
      </div>



    </div>
  )
}

export default BatchProcessing