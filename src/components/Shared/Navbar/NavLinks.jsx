/***
 * author: md atiqul islam
 * this file contain desktop navbar NavLink such
 * as home, shop , blog etc
 */

import React from "react";
import { NavLink } from "react-router-dom";

const NavNavLinks = () => {

  return (
    <div className="flex flex-row flex-wrap sm:gap-2 text-[14px] py-2 text-white">
        <NavLink to="/" >
          <label
            tabIndex={0}
            className="cursor-pointer mx-3"
          >
            Home
          </label>
        </NavLink>

        <NavLink to="/allproducts">
          <label className="cursor-pointer mx-3">
            All Products
          </label>
        </NavLink>

      <NavLink to="/onsale">
        <label className="cursor-pointer mx-3">Offer</label>
      </NavLink>

      <NavLink to="/aboutUs">
        <label className="cursor-pointer mx-3">About Us</label>
      </NavLink>
    </div>
  );
};

export default NavNavLinks;
