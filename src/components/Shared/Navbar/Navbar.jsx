/**
 * author: Md Atiqul Islam
 *Full mobile and desktop Navbar here
 *
 *  */

import React, { useState } from "react";
import Cart from "./Cart";
import Login from "./Login";
import MobileNavbar from "./MobileNavbar";
import NavLinks from "./NavLinks";
import Offer from "./Offer";
import Search from "./Search";
import Wishlist from "./Wishlist";
import logo from "../../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StateContext } from "./../../../contexts/AuthProvider";
import { BiLogOutCircle } from "react-icons/bi";

const Navbar = () => {
  const { user, logOut } = useContext(StateContext);
  const styles = {
    wrapper:
      "h-[206px] rounded-[10px]  bg-white w-full mx-auto hidden sm:block ",
    mobileWrapper: " w-full h-[80px] bg-[#92B137]  block sm:hidden",
    flexRow: "flex w-full flex-row border-b-[1px] border-slate-200",
  };

  return (
    <>
      {/* Mobile nav */}
      <div className={styles.mobileWrapper}>
        <MobileNavbar />
      </div>
      {/* //////////// */}

      {/* Desktop Nav */}
      <div className={styles.wrapper}>
        {/* <div className="border-b-[1px] border-slate-300">
          <Offer />
        </div> */}
        <div className={`${styles.flexRow}`}>
          <div className="border-r-[1px]  border-slate-300 w-[30%] flex items-center justify-center">
            <Link to="/">
              <p className="mr-[20px] text-[40px] font-bold text-[] ml-10 md:p-[10px]">
                <img
                  src={logo}
                  alt="Fast_Grocer"
                  className="w-[230px] h-full object-fit"
                />
              </p>
            </Link>
          </div>
          <div className="w-[70%]  flex flex-row">
            <div className="flex flex-col p-10">
              {/* Desktop search */}
              <Search />
              {/* Desktop navbar link such as page home etc */}
              <NavLinks />
            </div>
            <div className="flex flex-wrap items-center justify-start">
              <div className=" flex flex-row flex-wrap sm:py-1 gap-3  -mt-[10px] ml-[10px] items-center ">
                <Login />
                <Wishlist />
                <Cart />
                {user && (
                  <div className="w-10 h-10 rounded-full bg-[#F2F4EC]">
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
                {user && (
                  <div>
                    <button
                      onClick={logOut}
                      className=" hover:bg-[#e9ebe4] flex items-center text-md font-bold justify-center gap-1 bg-[#F2F4EC] p-[8px] rounded-full"
                    >
                      <BiLogOutCircle color="#92ad3f" size={24} /> Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
