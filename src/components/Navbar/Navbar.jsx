/**
 * author: Md Atiqul Islam
 *Full mobile and desktop Navbar here
 *
 *  */

import React from "react";
import Cart from "./Cart";
import Login from "./Login";
import MobileNavbar from "./MobileNavbar";
import NavLinks from "./NavLinks";
import Offer from "./Offer";
import Search from "./Search";
import Wishlist from "./Wishlist";

const Navbar = () => {
  const styles = {
    wrapper:
      "h-[250px] rounded-[10px]  bg-white w-9/12 mx-auto hidden sm:block ",
    mobileWrapper: " w-full h-[80px] bg-[#92B137]  block sm:hidden",
    flexRow: "flex w-full flex-row ",
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
        <div className="border-b-[1px] border-slate-300">
          <Offer />
        </div>
        <div className={`${styles.flexRow}`}>
          <div className="border-r-[1px]  border-slate-300 w-[30%] flex items-center justify-center">
            <p className="mr-[100px] text-[40px] font-bold text-[] ml-10 p-[41px]">
              Logo Fast Grocer
            </p>
          </div>
          <div className="w-[70%] border-box flex flex-row">
            <div className="flex flex-col p-10">
              {/* Desktop search */}
              <Search />
              {/* Desktop navbar link such as page home etc */}
              <NavLinks />
            </div>
            <div className="flex flex-row gap-4 -mt-[30px] ml-[20px] items-center ">
              <Login />
              <Wishlist />
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
