import React from 'react';
import { useContext } from 'react';
import { StateContext } from '../../../contexts/AuthProvider';

const Voucher = () => {
  const {coupons} = useContext(StateContext);
  return (
    <div>
      <h2>Available Voucher</h2>
      { coupons?.map(coupon => <div key={coupon?._id}>
        <h2>{coupon?.coupon_name}</h2>
        </div>)}
    </div>
  );
};

export default Voucher;