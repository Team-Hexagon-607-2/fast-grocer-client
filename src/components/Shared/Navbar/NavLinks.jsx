/***
 * author: md atiqul islam
 * this file contain desktop navbar NavLink such
 * as home, shop , blog etc
 */

import React from "react";
import { NavLink } from "react-router-dom";

const NavNavLinks = () => {

  return (
    <div className="flex flex-row flex-wrap sm:gap-2 md:gap-5 md:text-md font-semibold text-black">
      <div className="dropdown dropdown-end">
        <NavLink to="/">
          <label
            tabIndex={0}
            className="cursor-pointer hover:underline"
          >
            Home
          </label>
        </NavLink>
      </div>

      <div className="dropdown dropdown-end">
        <NavLink to="/allproducts">
          <label className="cursor-pointer hover:underline">
            All Products
          </label>
        </NavLink>
      </div>
      <NavLink to="/onsale">
        <label className="cursor-pointer hover:underline">Offer</label>
      </NavLink>
      <NavLink to="/aboutUs">
        <label className="cursor-pointer hover:underline">About Us</label>
      </NavLink>
    </div>
  );
};

export default NavNavLinks;
