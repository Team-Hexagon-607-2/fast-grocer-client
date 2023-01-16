import React from 'react';
import {TbShoppingCartPlus} from 'react-icons/tb';
import {AiFillHeart, AiFillStar} from 'react-icons/ai';

const SingleProduct = ({ products }) => {
  console.log(products);
  const { product_name, product_photo, product_mesurement, product_price } = products;
  return (
    <div className='bg-white shadow-lg rounded-md'>
      <div className='h-225px'>
        <img src={product_photo} alt="product img" className='mx-auto h-[225px] rounded-t-md'/>
      </div>
      <div className='p-4'>
        <span className='flex items-center'>
        <AiFillStar className='text-yellow-400'/>
        <AiFillStar className='text-yellow-400'/>
        <AiFillStar className='text-yellow-400'/>
        <AiFillStar className='text-yellow-400'/>
        <AiFillStar className='text-yellow-400'/>
        </span>
        <p className={`text-[17px] font-bold md:h-[60px] text-zinc-700 hover:underline cursor-pointer`}>{product_name}</p>
        <p className='text-zinc-700 font-semibold'><small>±{product_mesurement}</small></p>
        <p className='text-[#8ba73b] text-2xl font-bold'>৳{product_price}</p>
        <div className='flex mt-5'>
          <button className='w-full mr-2 bg-[#8ba73b] hover:bg-[#86a72b] duration-300 py-1 rounded-md flex items-center justify-center'><TbShoppingCartPlus className=' mr-2'/>Add to Cart</button>
          <button className='bg-#8ba73b px-3 rounded-md bg-[#ff00001c] hover:bg-[#ff000044] duration-300 flex items-center justify-center'><AiFillHeart className='text-red-600 mr-2'/>Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;