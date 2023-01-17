/**
 * author : md atiqul islam
 * this file contain desktop navbar wishlist
 * user can love product add wishlist and see wishlist
 * quantity and navigate to wishlist page
 *
 */

import React from "react";
import { BsHeart } from "react-icons/bs";

const Wishlist = () => {
  return (
    <div className="flex flex-row">
      <div className="w-[45px] h-[45px] rounded-[50%] hover:text-[#96B240]  bg-[#F2F4EC] flex items-center justify-center ">
        <BsHeart className="text-xl hover:text-[#96B240] " />
      </div>
      <div className="badge -ml-[8px] bg-[#F6A64D] border-none rounded-full w-[25px] h-[25px] font-bold">
        0
      </div>
    </div>
  );
};

export default Wishlist;
