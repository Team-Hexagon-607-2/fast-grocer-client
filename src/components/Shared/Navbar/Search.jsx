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
          className="px-3 py-2 border border-slate-300 w-[500px] text-inherit outline-none focus:border-[#17dc86] rounded-l-md"
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
          className="rounded-r-md px-5 py-2 border border-[#84b840] text-white bg-[#84b840] hover:bg-[#6a9333] transition duration-500 cursor-pointer"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
