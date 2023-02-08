import { logDOM } from "@testing-library/react";
import React from "react";
import { useContext } from "react";
import { StateContext } from "../../../contexts/AuthProvider";

const Inventory = () => {
  const { AllProducts } = useContext(StateContext);
  const stockOutProduct = AllProducts.filter((item) => item?.stock < 10);

  return (
    <div className="flex  gap-2">
      <div class="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
        <div class=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
          <div>
            <h2 class="text-gray-900 text-lg font-bold">Total Product</h2>
            <h3 class="mt-2 text-xl font-bold text-green-500 text-left">
              {AllProducts?.length}
            </h3>

            <button class="text-sm mt-6 px-4 py-2 bg-green-400  text-white rounded-lg  tracking-wider hover:bg-green-500 outline-none">
              Add Product
            </button>
          </div>
          <div class="bg-gradient-to-tr from-green-500 to-green-500 w-32 h-32  rounded-full shadow-2xl shadow-green-400 border-white  border-dashed border-2  flex justify-center items-center ">
            <div>
              <h1 class="text-white text-2xl">Basic</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
        <div class=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
          <div>
            <h2 class="text-gray-900 text-lg font-bold">stock Out Product</h2>
            <h3 class="mt-2 text-xl font-bold text-yellow-500 text-left">
              {stockOutProduct?.length}
            </h3>

            <button class="text-sm mt-6 px-4 py-2 bg-yellow-400 text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
              Fill Stock
            </button>
          </div>
          <div class="bg-gradient-to-tr from-yellow-500 to-yellow-400 w-32 h-32  rounded-full shadow-2xl shadow-yellow-400 border-white  border-dashed border-2  flex justify-center items-center ">
            <div>
              <h1 class="text-white text-2xl">Basic</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
