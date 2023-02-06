import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { GoPlus } from 'react-icons/go';
import { StateContext } from '../../contexts/AuthProvider';

const Coupon = () => {
  const {coupons, refetch} = useContext(StateContext);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [showCouponForm, setShowCouponForm] = useState(false);

  const handleShowCouponForm = () =>{
    setShowCouponForm(true);
  }

  const handleHideCouponForm = () =>{
    setShowCouponForm(false);
  }

  const handleAddCoupon = (data) => {
    const date = new Date();
    const updatedData = {
      coupon_name: data?.coupon_name,
      discount_amount: parseInt(data?.discount_amount),
      expire_date: data?.expire_date,
      couponAddDate : date
    }
    fetch('https://fg-server.vercel.app/add-coupon', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updatedData)
    })
    .then(res => res.json())
    .then(data =>{
      if(data?.acknowledged){
        toast.success("Coupon added successfully");
        reset();
      }
    })
  }

  return (
    <div>
      <div className='flex justify-end'>
        <button onClick={handleShowCouponForm} className='my-5 font-semibold px-3 mr-2 bg-[#84b840] hover:bg-[#6a9333] text-white text-sm duration-300 py-[6px] rounded-md flex items-center justify-center'>Add Coupon <GoPlus className='inline-block ml-1' /></button>
      </div>
      { showCouponForm && <div className='my-5'>
        <p onClick={handleHideCouponForm} className="hover:underline mb-2 inline-block cursor-pointer px-3 text-sm">Hide</p>
        <form onSubmit={handleSubmit(handleAddCoupon)} className="flex justify-evenly">
          <div className="form-control w-full max-w-xs">
            <input type="text" placeholder="Coupon Name" className="input input-sm input-bordered w-full max-w-xs" {...register("coupon_name", { required: "Add Coupon Name" })} />
            {errors?.coupon_name && <p className='text-red-600 text-sm'>*{errors?.coupon_name?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <input type="text" placeholder="Set Discount Ammount" className="input input-sm input-bordered w-full max-w-xs" {...register("discount_amount", { required: "Set a Discount Amount" })} />
            {errors?.discount_amount && <p className='text-red-600 text-sm'>*{errors?.discount_amount?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <input type="date" placeholder="Type here" className="input input-sm input-bordered w-full max-w-xs" {...register("expire_date", { required: "Select Expiration Date" })} />
            {errors?.expire_date && <p className='text-red-600 text-sm'>*{errors?.expire_date?.message}</p>}
          </div>
          <button className="btn btn-sm bg-[#84b840] hover:bg-[#6a9333] border-none max-w-xs">Add</button>
        </form>
      </div>}
    </div>
  );
};

export default Coupon;