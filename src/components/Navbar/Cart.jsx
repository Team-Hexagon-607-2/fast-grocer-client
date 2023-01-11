import React from "react";
import { BsCart } from "react-icons/bs";

const Cart = () => {
  return (
    <div className="flex flex-row">
      <div className="w-[45px] h-[45px] hover:text-[#96B240]  rounded-[50%] bg-[#F2F4EC] flex items-center justify-center ">
        <BsCart className="text-xl" />
      </div>
      <div className="badge -ml-[8px] bg-[#96B240] hover:bg-[#92b137] border-none rounded-full w-[25px] h-[25px] font-bold">
        0
      </div>
      <div>
        <p className="text-[15px] font-bold text-black ml-1 mt-3">$000</p>
      </div>
    </div>
  );
};

export default Cart;
