/***
 * author: md atiqul islam
 * this file contain desktop navbar link such
 * as home, shop , blog etc
 */

import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
const NavLinks = () => {
  return (
    <div className="flex flex-row flex-wrap sm:gap-2 md:gap-5 md:text-md font-bold text-black pt-[50px]">
      <div>
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="flex  cursor-pointer items-center justify-center"
          >
            Home <RiArrowDownSLine />
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
        {" "}
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="flex cursor-pointer items-center justify-center"
          >
            Shop <RiArrowDownSLine />
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
          <label
            tabIndex={0}
            className="flex items-center cursor-pointer justify-center"
          >
            Pages <RiArrowDownSLine />
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
          <label
            tabIndex={0}
            className="cursor-pointer flex items-center justify-center"
          >
            Blog
            <RiArrowDownSLine />
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
      <div>On Sale</div>
      <div>About Us</div>
      <div>Contact</div>
    </div>
  );
};

export default NavLinks;
