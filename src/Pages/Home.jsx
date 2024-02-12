import React from 'react';
import WelcomBanner from '../Components/Home/WelcomBanner';
import Nav from '../Components/Nav/Nav';

const Home = () => {
  return (
    <div className=''>
        <Nav />
        <h1 className='black'>Home</h1>
      
         <WelcomBanner />
           
        </div>
  )
}

export default Home