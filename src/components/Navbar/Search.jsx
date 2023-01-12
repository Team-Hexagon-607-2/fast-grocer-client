/**
 * author : md atiqul islam
 * this file contain desktop navbar searchBar
 *
 */

import React from "react";

const Search = () => {
  return (
    <div>
      <div className="bg-white focus:border-[#6A802D] py-1 px-2 flex border-slate-300 rounded-full border-[2px]">
        <input
          className=" border-none  w-[410px] ml-4 text-inherit
 outline-none 
            "
          type="text"
          name="name"
          placeholder="Search among 100000 products"
        />
        <button className=" ml-[20px] font-bold rounded-full px-5 py-2 bg-[#8caf2b] text-white hover:bg-[#6A802D] transition duration-500">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
