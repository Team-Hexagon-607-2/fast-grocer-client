import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../../contexts/AuthProvider";
import SingleProduct from "../Home/HomePageProducts/SingleProduct/SingleProduct";

const OfferProducts = () => {
  const { AllProducts, isError, isLoading } = useContext(StateContext);

  const filter = AllProducts?.filter((p) => p?.status == "onsale");
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
      {isLoading ? (
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
