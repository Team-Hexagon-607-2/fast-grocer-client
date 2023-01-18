import React, { useEffect, useState } from "react";
import SingleProduct from "../Home/HomePageProducts/SingleProduct/SingleProduct";

const OfferProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch("https://fg-server.vercel.app/products");
      const data = await response.json();
      setData(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const filter = data?.filter((p) => p?.status == "onsale");
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
        <div className="flex items-center justify-center m-[100px]">
          <Loader />
        </div>
      ) : (
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto py-10">
          {filter?.map((product) => (
            <SingleProduct key={product?.id} products={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default OfferProducts;
