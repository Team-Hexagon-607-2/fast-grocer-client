import { useQuery } from "@tanstack/react-query";
import { logDOM } from "@testing-library/react";
import React from "react";
import { useContext } from "react";
import Sales from "../../../components/Inventory/Sales.jsx";
import Loader from "../../../components/Loader/Loader.jsx";
import { StateContext } from "../../../contexts/AuthProvider";

const Inventory = () => {
  const { user, logOut, AllProducts } = useContext(StateContext);
  const stockOutProduct = AllProducts?.filter((item) => item?.stock < 10);

  const { data: AllUsers = [], isLoading, refetch, } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users?email=${user?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      const data = await res.json();
      if (data?.statusCode === 401 || data?.statusCode === 403) {
        return logOut();
      }
      return data;
    },
  });

  const admins = AllUsers?.filter((item) => item.role === "admin");
  const deliveryMan = AllUsers?.filter((item) => item.role === "delivery man");
  const buyers = AllUsers?.filter((item) => item.role === "buyer");

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="flex flex-col px-6">
      <div className="my-5">
        <p className=" text-lg font-bold text-green-500 mb-2">Employees</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div class="border rounded-md hover:scale-105 duration-500">
            <div class="p-4 flex items-center   rounded-lg bg-white shadow-indigo-50 shadow-lg">
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
          <div class="border rounded-md hover:scale-105 duration-500">
            <div class="p-4 flex items-center  justify-between  rounded-lg bg-white shadow-indigo-50 shadow-lg">
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
          <div class="border rounded-md hover:scale-105 duration-500">
            <div class="p-4 flex items-center  justify-between  rounded-lg bg-white shadow-indigo-50 shadow-lg">
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
      </div>

      <div className="my-5">
        <p className="text-lg font-bold text-green-500 mb-2">Products</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div class="border rounded-md hover:scale-105 duration-500">
            <div class=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-lg">
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
          <div class="border rounded-md hover:scale-105 duration-500">
            <div class=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-lg">
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
      </div>

      <div className="mt-5">
        <p className="text-lg font-bold text-green-500 mb-2">Orders</p>
        <Sales />
      </div>
    </div>
  );
};

export default Inventory;
