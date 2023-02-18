import React from 'react';
import { useContext } from 'react';
import { StateContext } from '../../../contexts/AuthProvider';

const Voucher = () => {
  const { coupons } = useContext(StateContext);
  return (
    <div>
      <div className='flex flex-col px-6'>
        <div className="my-5">
          <p className="text-lg font-bold text-green-500 mb-2">Available Voucher</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {
              coupons?.map(coupon =>
                <div class="border hover:shadow-lg duration-500 rounded-md ">
                  <div class="p-4 bg-green-400 shadow-indigo-50 shadow-lg rounded-md">
                    <div className='text-center '>
                      <h2 className='text-4xl font-bold'>Save <span className='text-white'>{coupon?.discount_amount}</span> Tk</h2>
                      <h3 className='text-2xl font-semibold'>Code: {coupon?.coupon_name}</h3>
                      <p>Expire: {coupon?.expire_date}</p>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voucher;