import { useQuery } from "@tanstack/react-query";
import { logDOM } from "@testing-library/react";
import React from "react";
import { useContext } from "react";
import Sales from "../../../components/Inventory/Sales.jsx";
import Loader from "../../../components/Loader/Loader.jsx";
import { StateContext } from "../../../contexts/AuthProvider";

const Inventory = () => {
  const { AllProducts } = useContext(StateContext);
  const stockOutProduct = AllProducts?.filter((item) => item?.stock < 10);

  const {
    data: AllUsers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://fg-server.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });

  const admins = AllUsers?.filter((item) => item.role === "admin");
  const deliveryMan = AllUsers?.filter((item) => item.role === "delivery man");
  const buyers = AllUsers?.filter((item) => item.role === "buyer");

  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col">
      <p className=" m-3 text-lg font-bold ml-6">Employees</p>
      <div className="flex flex-wrap gap-2">
        <div class="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
          <div class=" flex items-center  p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
            <div>
              <h2 class="text-gray-900 text-lg font-bold">Total Admin</h2>
              <h3
                class="mt-2 text-xl font-bold text-cyan-500
               text-left"
              >
                {admins.length}
              </h3>

              <button class="text-sm mt-6 px-4 py-2 bg-cyan-400  text-white rounded-lg  tracking-wider hover:bg-cyan-500 outline-none">
                See Details
              </button>
            </div>
          </div>
        </div>
        <div class="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
          <div class=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
            <div>
              <h2 class="text-gray-900 text-lg font-bold">Total Users</h2>
              <h3 class="mt-2 text-xl font-bold text-red-500 text-left">
                {buyers.length}
              </h3>

              <button class="text-sm mt-6 px-4 py-2 bg-red-400  text-white rounded-lg  tracking-wider hover:bg-red-500 outline-none">
                See details
              </button>
            </div>
          </div>
        </div>
        <div class="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
          <div class=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
            <div>
              <h2 class="text-gray-900 text-lg font-bold">Total Deliveryman</h2>
              <h3 class="mt-2 text-xl font-bold text-yellow-500 text-left">
                {deliveryMan?.length}
              </h3>

              <button class="text-sm mt-6 px-4 py-2 bg-yellow-400 text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
                See Details
              </button>
            </div>
          </div>
        </div>
      </div>

      <p className=" m-3 text-lg font-bold ml-6">Products</p>
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
          </div>
        </div>
        <div class="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
          <div class=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
            <div>
              <h2 class="text-gray-900 text-lg font-bold">Stock Out Product</h2>
              <h3 class="mt-2 text-xl font-bold text-yellow-500 text-left">
                {stockOutProduct?.length}
              </h3>

              <button class="text-sm mt-6 px-4 py-2 bg-yellow-400 text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
                Fill Stock
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className=" m-3 text-lg font-bold ml-6">Orders</p>
        <Sales />
      </div>
    </div>
  );
};

export default Inventory;
