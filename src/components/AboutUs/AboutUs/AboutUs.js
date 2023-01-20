import React from 'react';
import './AboutUs.css';
import img1 from '../../../assets/images/AboutUs/1.png'
import img2 from '../../../assets/images/AboutUs/2.png'
import img3 from '../../../assets/images/AboutUs/3.png'

const AboutUs = () => {
  return (
    <div>
      <div className='bannerImage flex items-center justify-center'>
        <div className='text-white font-semibold '>
          <h1 className='text-5xl md:text-6xl'>About Us</h1>
          <p className='font-semibold text-lg md:text-2xl'>Get inspired by the fresh food possibilities in <br />our store.</p>
        </div>
      </div>

      <div className='py-20 my-10 p-5 bg-[#FDF2F7]'>
        <h2 className="text-4xl font-bold mb-5">Grocery shopping in a few staps</h2>
        <div className='grid md:grid-cols-3 gap-10'>
          <div>
            <h1 className='text-2xl font-semibold'>1. Browse</h1>
            <p className='text-gray-500'>Go to 'shop' on fast grocer app and explore thousands of product from the shops you love</p>
          </div>
          <div>
            <h1 className='text-2xl font-semibold'>2. Order</h1>
            <p className='text-gray-500'>Add your shopping faves to your cart review your order, apply vouchers for extra saving</p>
          </div>
          <div>
            <h1 className='text-2xl font-semibold'>3. Enjoy</h1>
            <p className='text-gray-500'>Check out and enjoy the free time you've saved. We'll be there a flash!</p>
          </div>
        </div>
      </div>

      <div className='py-14 px-5 workImage my-10'>
        <p className='text-center text-[#3CB813] text-sm mb-5'>HOW IT WORK</p>
        <h2 className='text-center text-3xl md:text-4xl font-bold mb-8'>Healthy, affordable, delicious</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
          <div className='shadow-2xl p-5 h-[250px] rounded-md text-center pt-10 bg-white text-black'>
            <img src={img1} className='mx-auto' alt="" />
            <h4 className='text-2xl font-semibold'>Search for item</h4>
            <p>Id porta nostra morbi ut letius sed imperdiet potenti habitasse</p>
          </div>

          <div className='shadow-2xl p-5 h-[250px] rounded-md text-center pt-10 text-white findProduct'>
            <img src={img2} className='mx-auto' alt="" />
            <h4 className='text-2xl font-semibold'>Find out the best prices</h4>
            <p>Id porta nostra morbi ut letius sed imperdiet potenti habitasse</p>
          </div>

          <div className='shadow-2xl p-5 h-[250px] rounded-md text-center pt-10 bg-white text-black'>
            <img src={img3} className='mx-auto' alt="" />
            <h4 className='text-2xl font-semibold'>Save time and money</h4>
            <p>Id porta nostra morbi ut letius sed imperdiet potenti habitasse</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;