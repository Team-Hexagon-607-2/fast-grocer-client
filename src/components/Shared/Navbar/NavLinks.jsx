/***
 * author: md atiqul islam
 * this file contain desktop navbar link such
 * as home, shop , blog etc
 */

import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../../../contexts/AuthProvider";

const NavLinks = () => {

  return (
    <div className="flex flex-row flex-wrap sm:gap-2 md:gap-5 md:text-md font-bold text-black">
      <div className="dropdown dropdown-end">
        <Link to="/">
          <label
            tabIndex={0}
            className="flex cursor-pointer items-center justify-center"
          >
            Home
          </label>
        </Link>
      </div>

      <div className="dropdown dropdown-end">
        <Link to="/allproducts">
          <label className="cursor-pointer flex items-center justify-center">
            All Products
          </label>
        </Link>
      </div>
      <Link to="/onsale">Offer</Link>
      <Link to="/aboutUs">About Us</Link>
    </div>
  );
};

export default NavLinks;
