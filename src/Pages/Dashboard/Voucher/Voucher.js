import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { StateContext } from '../../../contexts/AuthProvider';

const Voucher = () => {
  const { coupons } = useContext(StateContext);
  return (
    <div>
      <h2>Available Voucher</h2>
      {coupons?.map(coupon => <div key={coupon?._id} className="w-80 h-52 bg-green-400 rounded-md flex items-center justify-center">
        <div>
          <p className='text-4xl font-bold text-center'>Save <span className='text-white'>{coupon?.discount_amount}</span> Tk</p>
          <p className='text-2xl font-semibold text-center'>Code: {coupon?.coupon_name}</p>
          <p className='text-center'>Expire: {coupon?.expire_date}</p>
        </div>
      </div>)}
    </div>
  );
};

export default Voucher;