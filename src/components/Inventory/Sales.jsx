import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { StateContext } from "../../contexts/AuthProvider";

const Sales = () => {
  const { AllOrders, AllOrdersLoading, AllOrdersRefetch } =
    useContext(StateContext);

  const totalSales = AllOrders?.data?.reduce(
    (acc, item) => acc + item?.total_price,
    0
  );
  const totalShipping = AllOrders?.data?.reduce(
    (acc, item) => acc + item?.shipping_fee,
    0
  );

  const order_products = AllOrders?.data?.map((item) => item?.order_products);
  console.log(order_products);

  let product_sale_price = 0;
  for (const subOrders of order_products) {
    for (const order of subOrders) {
      //jhamela ase akhne
      product_sale_price += order?.price;
    }
  }

  console.log(product_sale_price);

  const salesPriceWithoutShippingFee = totalSales - totalShipping;
  const netProfit = (salesPriceWithoutShippingFee / 100) * 20;
  const allCost = (salesPriceWithoutShippingFee / 100) * 10;
  const productCost = (salesPriceWithoutShippingFee / 100) * 70;
  if (AllOrdersLoading) return <div>Loading</div>;
  return (
    <div>
      <div className="">
        <div className="flex flex-row flex-wrap">
          <div class="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
            <div class=" flex items-center   p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
              <div>
                <h2 class="text-gray-900 text-lg font-bold">Total Order</h2>
                <h3 class="mt-2 text-xl font-bold text-indigo-500 text-left">
                  {AllOrders?.data?.length}
                </h3>

                <button class="text-sm mt-6 px-4 py-2 bg-indigo-400 text-white rounded-lg  tracking-wider hover:bg-indigo-500 outline-none">
                  See orders
                </button>
              </div>
            </div>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
            <div class=" flex items-center  p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
              <div>
                <h2 class="text-gray-900 text-lg font-bold">Total Sales</h2>
                <h3 class="mt-2 text-xl font-bold text-indigo-500 text-left">
                  Bdt {totalSales}
                </h3>

                <button class="text-sm mt-6 px-4 py-2 bg-indigo-400 text-white rounded-lg  tracking-wider hover:bg-indigo-500 outline-none">
                  See statistics
                </button>
              </div>
            </div>
          </div>
        </div>
        <p class="text-lg font-bold m-3 ml-6">Cost </p>
        <div class="flex flex-row flex-wrap">
          <div class="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
            <div class=" flex items-center  p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
              <div>
                <h2 class="text-gray-900 text-lg font-bold">
                  Total Shipping Fee
                </h2>
                <h3 class="mt-2 text-xl font-bold text-cyan-500 text-left">
                  Bdt {totalShipping}
                </h3>

                <button class="text-sm mt-6 px-4 py-2 bg-cyan-400  text-white rounded-lg  tracking-wider hover:bg-cyan-500 outline-none">
                  See statistics
                </button>
              </div>
            </div>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
            <div class=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
              <div>
                <h2 class="text-gray-900 text-lg font-bold">
                  Sales Volume Without shipping Fee
                </h2>
                <h3 class="mt-2 text-xl font-bold text-red-500 text-left">
                  Bdt {salesPriceWithoutShippingFee}
                </h3>

                <button class="text-sm mt-6 px-4 py-2 bg-red-400  text-white rounded-lg  tracking-wider hover:bg-red-500 outline-none">
                  See statistics
                </button>
              </div>
            </div>
          </div>{" "}
          <div class="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
            <div class=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
              <div>
                <h2 class="text-gray-900 text-lg font-bold">Product Cost</h2>
                <h3 class="mt-2 text-xl font-bold text-orange-500 text-left">
                  Bdt {productCost}
                </h3>

                <button class="text-sm mt-6 px-4 py-2 bg-orange-400  text-white rounded-lg  tracking-wider hover:bg-orange-500 outline-none">
                  See statistics
                </button>
              </div>
            </div>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
            <div class=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
              <div>
                <h2 class="text-gray-900 text-lg font-bold">
                  All Management Cost
                </h2>
                <h3 class="mt-2 text-xl font-bold text-orange-500 text-left">
                  Bdt {allCost}
                </h3>

                <button class="text-sm mt-6 px-4 py-2 bg-orange-400  text-white rounded-lg  tracking-wider hover:bg-orange-500 outline-none">
                  See statistics
                </button>
              </div>
            </div>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
            <div class=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
              <div>
                <h2 class="text-gray-900 text-lg font-bold">
                  Net Profit or Revenue
                </h2>
                <h3 class="mt-2 text-xl font-bold text-orange-500 text-left">
                  Bdt {netProfit}
                </h3>

                <button class="text-sm mt-6 px-4 py-2 bg-orange-400  text-white rounded-lg  tracking-wider hover:bg-orange-500 outline-none">
                  See statistics
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
