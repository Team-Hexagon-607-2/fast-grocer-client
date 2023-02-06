/***
 * author: md atiqul islam
 * this file contain desktop navbar NavLink such
 * as home, shop , blog etc
 */

import React from "react";
import { NavLink } from "react-router-dom";

const NavNavLinks = () => {

  return (
    <div className="flex flex-row flex-wrap text-[14px] text-white">
        <NavLink to="/" className={({isActive}) => isActive ? 'bg-slate-700 py-2 px-3 cursor-pointer duration-300' : 'py-2 px-3 cursor-pointer hover:bg-slate-700 duration-300'}>
          <label
            tabIndex={0}
            className=" cursor-pointer"
          >
            Home
          </label>
        </NavLink>

        <NavLink to="/allproducts" className={({isActive}) => isActive ? 'bg-slate-700 py-2 px-3 cursor-pointer duration-300' : 'py-2 px-3 cursor-pointer hover:bg-slate-700 duration-300'}>
          <label className="cursor-pointer">
            All Products
          </label>
        </NavLink>

      <NavLink to="/onsale" className={({isActive}) => isActive ? 'bg-slate-700 py-2 px-3 cursor-pointer duration-300' : 'py-2 px-3 cursor-pointer hover:bg-slate-700 duration-300'}>
        <label className="cursor-pointer">Offer</label>
      </NavLink>

      <NavLink to="/aboutUs" className={({isActive}) => isActive ? 'bg-slate-700 py-2 px-3 cursor-pointer duration-300' : 'py-2 px-3 cursor-pointer hover:bg-slate-700 duration-300'}>
        <label className="cursor-pointer">About Us</label>
      </NavLink>
    </div>
  );
};

export default NavNavLinks;
