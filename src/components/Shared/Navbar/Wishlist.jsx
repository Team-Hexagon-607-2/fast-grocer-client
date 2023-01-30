/**
 * author : md atiqul islam
 * this file contain desktop navbar wishlist
 * user can love product add wishlist and see wishlist
 * quantity and navigate to wishlist page
 *
 */

import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StateContext } from "../../../contexts/AuthProvider";
import { AiFillHeart } from "react-icons/ai";

const Wishlist = () => {
  const { wishListData } = useContext(StateContext);
  return (
    <Link to="/dashboard/my-wishlist" className="flex flex-row">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
        <AiFillHeart className="text-2xl" />
          <span className="badge badge-sm indicator-item">{wishListData?.data?.length}</span>
        </div>
      </label>
      {/* <div className="w-[40px] h-[40px] rounded-[50%] hover:text-[#96B240]  bg-[#F2F4EC] flex items-center justify-center ">
        <BsHeart className="text-lg hover:text-[#96B240] " />
      </div>
      <div className="badge -ml-[8px] bg-[#F6A64D] border-none rounded-full w-[25px] h-[25px] font-bold">
        {wishListData?.data?.length}
      </div> */}
    </Link>
  );
};

export default Wishlist;
