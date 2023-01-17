import React from 'react';
import './newsLetter.css'

const NewsLetter = () => {
  return (
    <div className='bg text-center flex items-center justify-center'>
      <div className='w-[500px]'>
        <h2 className='text-2xl font-semibold mt-40 md:mt-20 lg:mt-0'>NEWSLETTER </h2>
        <p className='text-slate-400'>Subscribe to the weekly newsletter for all the latest updates</p>

        <div className='relative flex items-center mt-5'>
          <input type="text" className='border-2 border-slate-300 rounded-full w-full  px-2 py-3 focus:outline-2 focus:outline-[#6A802D] duration-500' placeholder='Your Email Address' />
          <button className='absolute right-2 bg-[#8BA73B] hover:bg-[#6A802D] text-white uppercase font-semibold px-6 py-2 rounded-full'>Login</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;