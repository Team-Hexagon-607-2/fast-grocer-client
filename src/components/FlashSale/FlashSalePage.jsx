import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../../contexts/AuthProvider";
import SingleProduct from "../Home/HomePageProducts/SingleProduct/SingleProduct";
import Loader from "../Loader/Loader";
import Timer from "./Timer";

const FlashSalePage = () => {
  const { AllProducts, isLoading } = useContext(StateContext);

  const flashSaleProducts = AllProducts?.filter(
    (item) => item?.status === "flash&sale"
  );
  return (
    <div className="bg-[#FCFFF6] mt-10 mb-10">
      <p className="text-center text-xl sm:text-4xl font-bold m-5 sm:m-10">
        Flash Sale Products
      </p>
      <div className="flex  flex-row items-center w-11/12 mx-auto  justify-between ">
        <div className="flex gap-4 sm:gap-10 sm:mt-10">
          <p className="text-red-500 text-lg mt-[2px] sm:mt-2">On Sale Now</p>
          <div className="flex items-center  gap-3">
            <p className="text-sm ">Ending in</p>
            <Timer />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto py-10">
        {isLoading && <Loader />}
        {flashSaleProducts?.length &&
          flashSaleProducts?.map((product) => (
            <SingleProduct
              key={product?._id}
              products={product}
            ></SingleProduct>
          ))}
      </div>
    </div>
  );
};

export default FlashSalePage;
