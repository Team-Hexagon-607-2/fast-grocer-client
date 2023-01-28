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
import Search from "./Search";
import Wishlist from "./Wishlist";
import logo from "../../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { StateContext } from "./../../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut, categories,  } = useContext(StateContext);
  const styles = {
    wrapper:
      "bg-white w-full mx-auto hidden sm:block",
    mobileWrapper: " w-full h-[80px] bg-[#92B137] block sm:hidden",
    flexRow: "flex w-full flex-row justify-between items-center border-slate-200 px-5 py-3",
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
          <div className="border-slate-300 flex items-center justify-center">
            <Link to="/">
              <p className="">
                <img
                  src={logo}
                  alt="Fast_Grocer"
                  className="w-[125px]"
                />
              </p>
            </Link>
          </div>
          <Search />
          <div className="flex flex-wrap items-center justify-start">
            <div className=" flex flex-row flex-wrap sm:py-1 gap-3  -mt-[10px] ml-[10px] items-center ">
              <Wishlist />
              <Cart />
              <Login />
              {user && (
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img src={user?.photoURL || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbiMjUoOxJCAMB9poSO2wLg34m7OxmyaT-A&usqp=CAU"} alt="" />
                    </div>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                      <Link to="/dashboard" className="justify-between">
                        Dashboard
                        <span className="badge">New</span>
                      </Link>
                    </li>
                    <li><button onClick={logOut}>Logout</button></li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-11/12 mx-auto py-5">
          <div className="flex justify-between">
            {/* Desktop search */}
            {/* Desktop navbar link such as page home etc */}

            <div className="dropdown dropdown-start font-semibold">
              <label
                tabIndex={0}
                className="flex cursor-pointer items-center justify-center"
              >
                Categories <RiArrowDownSLine />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-64"
              >
                <div className="h-[400px] overflow-auto">
                  {
                    categories.map(category => <li key={category._id}><Link to={`/category/${category.categoryName}`}>{category.categoryName}</Link></li>)
                  }
                </div>
              </ul>
            </div>
          <NavLinks />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
