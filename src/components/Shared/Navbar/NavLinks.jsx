/***
 * author: md atiqul islam
 * this file contain desktop navbar link such
 * as home, shop , blog etc
 */

import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="flex flex-row flex-wrap sm:gap-2 md:gap-5 md:text-md font-bold text-black pt-[50px]">
      <div>
        <div className="dropdown dropdown-end">
          <Link to="/">
            <label
              tabIndex={0}
              className="flex  cursor-pointer items-center justify-center"
            >
              Home
            </label>
          </Link>
        </div>
      </div>
      <div>
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="flex cursor-pointer items-center justify-center"
          >
            Category <RiArrowDownSLine />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className="dropdown dropdown-end">
          <Link to="/allproducts">
            <label className="cursor-pointer flex items-center justify-center">
              All Products
            </label>
          </Link>
        </div>
      </div>
      <Link to="/onsale">On Sale</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default NavLinks;
