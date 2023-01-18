import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SingleProduct from "../Home/HomePageProducts/SingleProduct/SingleProduct";

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

  const Loader = () => {
    return (
      <div
        className="sm:w-[80px]  sm:h-[80px]
       w-[40px] h-[40px]  animate-spin bg-white
        text-white border-dashed border-4 sm:border-8 
        border-[#92B137] rounded-[50%]"
      ></div>
    );
  };

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center mt-10">
          <Loader />
        </div>
      ) : data.length === 0 ? (
        <div>No Product found</div>
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
