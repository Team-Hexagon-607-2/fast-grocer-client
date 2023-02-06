import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlinePlus } from 'react-icons/ai';

const Coupon = () => {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const [showCouponForm, setShowCouponForm] = useState(false);

  const handleAddCoupon = (data) =>{
    console.log(data);
  }

  return (
    <div>
      <div className='flex justify-end'>
        <button className='font-semibold px-3 mr-2 bg-[#84b840] hover:bg-[#6a9333] text-white text-sm duration-300 py-[6px] rounded-md flex items-center justify-center'>Add Coupon <AiOutlinePlus className='inline-block'/></button>
      </div>
      <div>
        <form onSubmit={handleSubmit(handleAddCoupon)}>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <button className="btn btn-success">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Coupon;