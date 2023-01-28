/**
 * author : md atiqul islam
 * this file contain desktop navbar searchBar
 *
 */

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../../../contexts/AuthProvider";

const Search = () => {
  const { searchText, setSearchText } = useContext(StateContext);

  const navigate = useNavigate();
  const handleSearch = (e) => {
    navigate("/search", { state: searchText });
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      navigate("/search", { state: searchText });
    }
  };
  return (
    <div>
      <div className="bg-white">
        <input
          className="px-3 py-2 border-2 border-slate-300 w-[410px] text-inherit outline-none focus:border-[#6A802D] rounded-l-md"
          type="text"
          name="name"
          placeholder="Search for products(e.g. fish, tomato)"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyUp={handleKeyPress}
        />
        <button
          disabled={!searchText}
          onClick={handleSearch}
          className="rounded-r-md px-5 py-[10px] bg-[#8caf2b] text-white hover:bg-[#6A802D] transition duration-500 cursor-pointer"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
