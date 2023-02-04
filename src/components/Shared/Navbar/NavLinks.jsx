/***
 * author: md atiqul islam
 * this file contain desktop navbar NavLink such
 * as home, shop , blog etc
 */

import React from "react";
import { NavLink } from "react-router-dom";

const NavNavLinks = () => {

  return (
    <div className="flex flex-row flex-wrap text-[14px] py-2 text-white">
        <NavLink to="/" >
          <label
            tabIndex={0}
            className="cursor-pointer hover:bg-slate-700 py-2 px-4 duration-300"
          >
            Home
          </label>
        </NavLink>

        <NavLink to="/allproducts">
          <label className="cursor-pointer hover:bg-slate-700 py-2 px-4 duration-300">
            All Products
          </label>
        </NavLink>

      <NavLink to="/onsale">
        <label className="cursor-pointer hover:bg-slate-700 py-2 px-4 duration-300">Offer</label>
      </NavLink>

      <NavLink to="/aboutUs">
        <label className="cursor-pointer hover:bg-slate-700 py-2 px-4 duration-300">About Us</label>
      </NavLink>
    </div>
  );
};

export default NavNavLinks;
