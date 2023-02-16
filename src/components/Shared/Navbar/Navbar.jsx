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
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { StateContext } from "./../../../contexts/AuthProvider";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaThList } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const { user, logOut, categories, } = useContext(StateContext);
  const [toggle, setToggle] = useState(true);

  const styles = {
    wrapper: "bg-white w-full mx-auto hidden lg:block",
    mobileWrapper: " w-full h-[80px] bg-[#92B137] block lg:hidden",
    flexRow: "lg:flex w-full lg:flex-row justify-between items-center px-5 py-1",
  };

  return (
    <>
      {/* Mobile nav */}
      <div className={styles.mobileWrapper}>
        <MobileNavbar />
      </div>


      {/* Desktop Nav */}
      <div className={`${styles.flexRow} sticky top-0 duration-300 z-[9999] bg-white shadow-lg hidden`}>
        <div className="border-slate-300 flex items-center justify-center" >
          <Link to="/">
            <p className="">
              <img
                src={logo}
                alt="Fast_Grocer"
                className="w-[115px]"
              />
            </p>
          </Link>
        </div>
        <Search />
        <div className="flex flex-wrap items-center justify-start">
          <div className=" flex flex-row flex-wrap sm:py-1 gap-3 ml-[10px] items-center ">
            <Wishlist />
            <Cart />
            <Login />
            {user && (
              <div className="dropdown dropdown-end">
                <label onClick={() => setToggle(!toggle)} tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbiMjUoOxJCAMB9poSO2wLg34m7OxmyaT-A&usqp=CAU"} alt="" />
                  </div>
                </label>

                <ul tabIndex={0}
                  className={toggle ?
                    "hidden menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52" :
                    "menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-md w-52"}>
                  <li>
                    <Link to="/dashboard">
                      <AiOutlineDashboard /> Dashboard
                    </Link>
                  </li>
                  <li><button onClick={logOut}><BiLogOut /> Logout</button></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={`${styles.wrapper}`}>
        <div className="bg-slate-800">
          <div className="flex mx-auto">
            {/* Desktop search */}
            {/* Desktop navbar link such as page home etc */}

            <div className="dropdown dropdown-start text-[14px] w-52 bg-[#84b840] relative">
              <label onClick={() => setToggle(!toggle)} tabIndex={0} className="py-2 px-3 cursor-pointer text-white flex items-center justify-between" >
                <span><FaThList className="inline-block mr-3" /> Categories </span>
                {
                  toggle ?
                  <RiArrowDownSLine className="inline-block h-5 w-5 font-semibold" />:
                  <RiArrowUpSLine className="inline-block h-5 w-5 font-semibold" />
                }
              </label>

              <ul tabIndex={0}
                className={toggle ?
                  "hidden dropdown-content menu p-2 shadow bg-base-100 rounded-md w-64 absolute top-[36px] left-[-1px]" :
                  "dropdown-content menu p-2 shadow bg-base-100 rounded-md w-64 absolute top-[36px] left-[-1px]"
                }>
                <div className="h-[300px] overflow-auto">
                  {
                    categories.map(category => <Link onClick={() => setToggle(!toggle)} key={category._id} to={`/category/${category.categoryName}`} className='px-2 py-1 mb-2 hover:bg-[#c9f391] rounded-sm block'>{category.categoryName}</Link>)
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
