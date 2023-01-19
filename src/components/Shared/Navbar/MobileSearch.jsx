/**
 * author:md atiqul islam
 * this is mobile navbar searchBar
 * only view in mobile mode
 * search bar input here
 */

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../../../contexts/AuthProvider";

const MobileSearch = () => {
  const { searchText, setSearchText } = useContext(StateContext);

  const navigate = useNavigate();
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      navigate("/search", { state: searchText });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/search", { state: searchText });
  };
  return (
    <div className="ml-4">
      <form onSubmit={handleSubmit}>
        <input
          className="
         placeholder:text-[13px] placeholder:text-black
        border-none outline-none py-[10px] rounded-[3px] px-10 "
          type="text"
          placeholder="Search for products(e.g. eggs, milk, )"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyUp={handleKeyPress}
        />
      </form>
    </div>
  );
};

export default MobileSearch;
