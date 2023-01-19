/***
 * author: md atiqul islam
 * this file contain desktop navbar link such
 * as home, shop , blog etc
 */

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavLinks = () => {
  // all product categories name
  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await fetch('https://fg-server.vercel.app/categories');
      const data = await res.json();
      return data;
    }
  })

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
        <div className="dropdown dropdown-start">
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
            <div className="h-[200px] overflow-auto border">
              {
                categories.map(category => <li className="m-0 p-0" key={category._id}><Link to={`/category/${category.categoryName}`}>{category.categoryName}</Link></li>)
              }
            </div>
          </ul>
        </div>
      </div>

      <div>
        <div className="dropdown dropdown-end">
          <Link to="/blog">
            <label className="cursor-pointer flex items-center justify-center">
              Blog
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
