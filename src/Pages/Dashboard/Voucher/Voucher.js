import React from 'react';
import { useContext } from 'react';
import { TbDiscount2 } from 'react-icons/tb';
import { StateContext } from '../../../contexts/AuthProvider';

const Voucher = () => {
  const { coupons } = useContext(StateContext);
  return (
    <div className='mx-5'>
      <h2 className='text-center md:text-2xl font-bold mb-4 p-0 md:p-10'>Available Voucher</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {coupons?.map(coupon => <div key={coupon?._id} className="flex border-2 border-slate-200 rounded-md">
          <div className='bg-green-400 h-40 w-[300px] border-r-slate-600 border-dashed border-r-2 p-3 flex flex-col justify-center rounded-l-md relative'>
            <p>Discount Coupon</p>
            <p className='text-3xl font-bold my-3'>Save <span className='text-white'>{coupon?.discount_amount}</span> Tk</p>
            <p className='text-sm font-semibold'>Minimum spend {coupon?.condition_amount} Tk</p>
            <p className='text-sm'>Expire: {coupon?.expire_date}</p>
          <TbDiscount2 className='absolute text-green-200 text-[80px] right-0 top-0'/>
          </div>
          <div className='bg-white h-40 w-[200px] p-3 flex justify-center items-center flex-col rounded-r-md'>
            <p className='text-sm'>Voucher Code</p>
            <p className='font-semibold text-center text-xl'>{coupon?.coupon_name}</p>
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default Voucher;