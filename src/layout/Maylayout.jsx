import React from 'react';
import Leftcard from '../components/Leftcard';
import Rightcard from '../components/Rightcard';
import Footer from '../components/Footer';

const Maylayout = ({ children }) => {
  return (
    <div className=' relative'>
      <div className='w-[20vw] min-h-[100vh] bg-[#000000] fixed left-0 top-0 text-white'><Leftcard/></div>
      <div className=' w-[60vw] mx-auto min-h-[100vh] linegrade pb-10 ' >{children}</div>
      <div className='w-[20vw] min-h-[100vh] bg-[#000000] fixed right-0 top-0 text-white'><Rightcard/></div>
      <Footer />
    </div>    
  );
};

export default Maylayout;
