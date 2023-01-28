// author : md atiqul islam
// This file contain desktop navbar cart

import React from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StateContext } from "../../../contexts/AuthProvider";

const Cart = () => {
  const { totalQuantity } = useContext(StateContext);

  return (
    <Link to="/cart" className="flex flex-row">
      <div className="w-[40px] h-[40px] hover:text-[#96B240]  rounded-[50%] bg-[#F2F4EC] flex items-center justify-center ">
        <BsCart className="text-xl" />
      </div>
      <div className="badge -ml-[8px] bg-[#96B240] hover:bg-[#92b137] border-none rounded-full w-[25px] h-[25px] font-bold">
        {totalQuantity}
      </div>
      <div>
      </div>
    </Link>
  );
};

export default Cart;
