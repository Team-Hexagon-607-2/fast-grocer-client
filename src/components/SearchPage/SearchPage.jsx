import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SingleProduct from "../Home/HomePageProducts/SingleProduct/SingleProduct";
import Loader from "../Loader/Loader";

const SearchPage = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchText = location?.state;

  useEffect(() => {
    setLoading(true);
    fetch(`https://fg-server.vercel.app/search?q=${searchText}`)
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        setData(result);
      })
      .catch((error) => console.log(error));
  }, [searchText]);
  console.log(data);


  return (
    <div className=" sm:mt-[20px] sm:mb-[20px] ">
      {loading ? (
        <div className="flex items-center justify-center mt-10">
          <Loader />
        </div>
      ) : data.length === 0 ? (
        <div
          className="flex mt-[20px] mb-[20px] items-center justify-center text-[25px] text-red-500 font-bold min-h-screen 
        "
        >
          No Product found
        </div>
      ) : (
        <div className=" mt-[10px] sm:mt-[50px]">
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto py-10">
            {data?.map((product) => (
              <SingleProduct key={product?.id} products={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
