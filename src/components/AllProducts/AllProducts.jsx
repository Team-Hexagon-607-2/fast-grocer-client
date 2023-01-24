import React, { useContext } from "react";
import { useState } from "react";
import { StateContext } from "../../contexts/AuthProvider";
import SingleProduct from "../Home/HomePageProducts/SingleProduct/SingleProduct";

const AllProducts = () => {
  const { AllProducts, isLoading } = useContext(StateContext);

  const [size, setSize] = useState(10);
  const [page, setPage] = useState(0);
  const pages = Math.ceil(76 / parseInt(size));
  const array = [...Array(pages).keys()];

  const Loader = () => {
    return (
      <div className="sm:w-[80px]  sm:h-[80px] w-[40px] h-[40px]  animate-spin bg-white text-white border-dashed border-4 sm:border-8 border-[#92B137] rounded-[50%]" ></div>
    );
  };

  return (
    <>
      <div className="flex items-center justify-center  sm:mt-[50px]">
        {isLoading && <Loader />}
      </div>
      <h2 className="text-center font-semibold text-2xl">All Products</h2>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto py-10">
        {AllProducts?.map((product) => (
          <SingleProduct key={product?.id} products={product} />
        ))}
      </div>

      {/* pagination */}
      {
        array.map(number => <button key={number.index} onClick={() => setPage(number)} className='bg-slate-200 mx-1 w-10 h-10 rounded-full'>{number + 1}</button>)
      }

      <select onChange={(e) => setSize(e.target.value)}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </>
  );
};

export default AllProducts;
