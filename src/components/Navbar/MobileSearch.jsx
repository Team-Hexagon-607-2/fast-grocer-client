/**
 * author:md atiqul islam
 * this is mobile navbar searchBar
 * only view in mobile mode
 * search bar input here
 */

import React from "react";

const MobileSearch = () => {
  return (
    <div className="ml-4">
      <input
        className="
         placeholder:text-[13px] placeholder:text-black
        border-none outline-none py-[10px] rounded-[3px] px-8 "
        type="text"
        placeholder="Search for products(e.g. eggs, milk, )"
      />
    </div>
  );
};

export default MobileSearch;
