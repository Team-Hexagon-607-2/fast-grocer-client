/****
 * author:md atiqul islam
 * This file contain mobile navbar
 * left side 3 dots click and open a modal of
 * login , signup, cart, wishlist,
 */

import React, { useContext } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { BiLogIn, BiLogOutCircle } from "react-icons/bi";
import { MdPersonAddAlt1 } from "react-icons/md";
import { BsCart, BsHeart } from "react-icons/bs";
import logo from "../../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { StateContext } from "../../../contexts/AuthProvider";
const MobileRightbar = () => {
  const { totalQuantity, totalPrice, wishListData, logOut, user } =
    useContext(StateContext);

  return (
    <div className="">
      <label htmlFor="my-modal-4" className="">
        <HiDotsVertical className={`mt-1  ml-4`} size={35} />
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <div className=" -mt-2 bg-white w-[280px] h-[350px] ">
          <div className="flex items-center justify-between p-2 bg-slate-800">
            <p className=" text-xl bg-slate-800 p-5 text-white">Fast Grocer</p>
            {user && (
              <div className="w-10 h-10  rounded-full bg-white">
                <img
                  className="object-contain"
                  src={
                    user?.photoURL ||
                    "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
                  }
                  alt={user?.displayName}
                  title={user?.displayName}
                />
              </div>
            )}
          </div>
          <div className="p-4">
            {user ? (
              <div>
                <button onClick={logOut} className="mt-3 flex items-center  ">
                  <p>
                    <BiLogOutCircle size={30} />
                  </p>
                  <p className="text-[17px] ml-2 text-black">Logout</p>
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="mt-3 flex items-center  ">
                  <p>
                    <BiLogIn size={30} />
                  </p>
                  <p className="text-[17px] ml-2 text-black">Login</p>
                </Link>
                <Link to="/signup" className="mt-5 flex items-center  ">
                  <p>
                    <MdPersonAddAlt1 size={30} />
                  </p>
                  <p className="text-[17px] ml-2 text-black">Sign Up</p>
                </Link>
              </>
            )}
            <Link to="/dashboard/my-wishlist" className="mt-5  ">
              <div className="flex flex-row items-center mt-5 ">
                <p>
                  <BsHeart size={25} />
                </p>
                <div className="badge -mt-5 -ml-[8px] bg-[#F6A64D] border-none rounded-full w-[20px] h-[20px] font-bold">
                  {wishListData?.data?.length}
                </div>
                <div className="">
                  <p className="text-[17px] ml-2 text-black">WhishList</p>
                </div>
              </div>
            </Link>
            <Link to="/cart">
              <div className="flex flex-row mt-5">
                <BsCart size={25} />

                <div className="badge -mt-2  -ml-[8px] bg-[#92B137] border-none rounded-full w-[20px] h-[20px] font-bold">
                  {totalQuantity}
                </div>
                <div>
                  <p className="text-[17px] ml-2 text-black">Cart</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </label>
    </div>
  );
};

export default MobileRightbar;
