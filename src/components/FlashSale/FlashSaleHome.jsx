import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SingleProduct from "../Home/HomePageProducts/SingleProduct/SingleProduct";
import Loader from "../Loader/Loader";
import { StateContext } from "./../../contexts/AuthProvider";
import Timer from "./Timer";

const FlashSaleHome = () => {
  const { AllProducts, isLoading } = useContext(StateContext);

  const flashSaleProducts = AllProducts?.filter(
    (item) => item?.status === "flash&sale"
  );

  return (
    <div className="bg-[#FCFFF6] pt-16">
      <h2 className="text-xl md:text-3xl text-center font-bold py-5">
        Flash Sale
      </h2>
      <div className="flex  flex-row items-center w-11/12 mx-auto justify-between ">
        <div className="flex gap-4 sm:gap-10 items-center justify-start ">
          <p className="text-red-500 text-sm sm:text-lg hidden sm:block">
            On Sale Now
          </p>
          <div className="flex items-center  gap-3">
            <p className="text-sm">Ending in</p>
            <Timer />
          </div>
        </div>
        <Link to="/flashsale" className="">
          <button
            className=" px-2 py-1 sm:py-2 sm:px-5 hover:bg-slate-100
           bg-slate-50 border-[#80B248] border  text-[#84b840]"
          >
            Shop More
          </button>
        </Link>
      </div>

      {isLoading && <Loader />}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto py-10">
        {!isLoading && flashSaleProducts?.length && flashSaleProducts?.slice(0, 8)?.map((product) => (<SingleProduct key={product?._id} products={product} ></SingleProduct>))}
      </div>
    </div>
  );
};

export default FlashSaleHome;
