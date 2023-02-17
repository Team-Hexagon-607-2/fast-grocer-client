import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StateContext } from "../../../contexts/AuthProvider";

const Search = () => {
  const { searchText, setSearchText } = useContext(StateContext);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (searchText === "" || !searchText) {
      return setSearchResults([]);
    };

    (
      async () => {
        const url = `https://fg-server.vercel.app/searchproduct?name=${searchText}`;
        const res = await fetch(url);
        const data = await res.json();
        setSearchResults(data);
      }
    )()
  }, [searchText, setSearchText])

  const handleOnChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = (e) => {
    navigate("/search", { state: searchText });
    setSearchText("");
  };

  const handleKeyPress = (event) => {
    setShow(false)
    if (event.key === "Enter") {
      navigate("/search", { state: searchText });
      setSearchText("");
    }
  };

  return (
    <div>
      <div className="bg-white">
        <input
          className="px-3 py-2 border border-slate-300 w-[500px] text-inherit outline-none focus:border-[#84b840] rounded-l-md"
          type="text"
          name="name"
          placeholder="Search for products(e.g. fish, tomato)"
          value={searchText}
          onChange={handleOnChange}
          onKeyUp={handleKeyPress}
          onMouseOut={() => setShow(true)}
        />
        <button
          disabled={!searchText}
          onClick={handleSearch}
          className="rounded-r-md px-5 py-2 border border-[#84b840] text-white bg-[#84b840] hover:bg-[#6a9333] transition duration-500 cursor-pointer"
        >
          Search
        </button>
      </div>
      {
        searchResults.length > 0 &&
        <div
          onMouseOver={() => setShow(false)}
          onMouseOut={() => setShow(true)}
          className={show ?
            "hidden h-auto max-h-[80vh] absolute bg-white w-[500px] p-5 rounded-md overflow-auto shadow-xl" :
            "h-auto max-h-[80vh] absolute bg-white w-[500px] p-5 rounded-md overflow-auto shadow-xl"
          }>
          {
            searchResults?.map(result => <Link to={`/products/${result?._id}`} onClick={() => setSearchText("")} key={result?._id}><div className="my-1 p-2 rounded-md flex hover:bg-gray-200">
              <div>
                <img className="w-12 h-12 rounded-md mr-2" src={result?.imageUrl} alt={result?.name} />
              </div>
              <div>
                <p className="text-sm font-semibold">{result?.name}</p>
                <p className="text-sm text-[#84b840]">৳{result?.price}</p>
              </div>
            </div></Link>)
          }
        </div>
      }
    </div>
  );
};

export default Search;
