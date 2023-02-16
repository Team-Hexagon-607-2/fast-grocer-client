import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../../../contexts/AuthProvider";

const PaymentForDeliveryman = () => {
  const { user } = useContext(StateContext);
  const { data: deliveredOrder = [] } = useQuery({
    queryKey: ["delivered"],
    queryFn: async () => {
      const res = await fetch(
        `https://fg-server.vercel.app/delivered-orders?email=${user?.email}`
      );
      const data = res.json();
      return data;
    },
  });

  return (
    <div>
      <h2 className="text-center md:text-2xl font-bold mb-4 p-0 md:p-10">
        My Payment
      </h2>

{/* Payment info section */}
      <div className="my-5">
        <div className="grid md:grid-cols-2 mx-10 gap-6">
          <div class="border rounded-md hover:scale-105 duration-500">
            <div class="p-4 flex items-center  justify-between  rounded-lg bg-white shadow-indigo-50 shadow-lg">
              <div>
                <h2 class="text-gray-900 text-lg font-bold">Current Account Balance</h2>
                <h3 class="mt-2 text-xl font-bold text-green-700 text-left">
                BDT {deliveredOrder?.length * 40}
                </h3>
              </div>
            </div>
          </div>
          <div class="border rounded-md hover:scale-105 duration-500">
            <div class="p-4 flex items-center   rounded-lg bg-white shadow-indigo-50 shadow-lg">
              <div>
                <h2 class="text-gray-900 text-lg font-bold">Total Delivered Items</h2>
                <h3
                  class="mt-2 text-xl font-bold text-blue-700
               text-left"
                >
                  {deliveredOrder?.length}
                </h3>
              </div>
            </div>
          </div>
          <div class="border rounded-md hover:scale-105 duration-500">
            <div class="p-4 flex items-center  justify-between  rounded-lg bg-white shadow-indigo-50 shadow-lg">
              <div>
                <h2 class="text-gray-900 text-lg font-bold">Total Income (Till Now)</h2>
                <h3 class="mt-2 text-xl font-bold text-orange-500 text-left">
                BDT {deliveredOrder?.length * 40}
                </h3>
              </div>
            </div>
          </div>
          <div class="border rounded-md hover:scale-105 duration-500">
            <div class="p-4 flex items-center  justify-between  rounded-lg bg-white shadow-indigo-50 shadow-lg">
              <div>
                <h2 class="text-gray-900 text-lg font-bold">Total Withdrawn Money (Till Now)</h2>
                <h3 class="mt-2 text-xl font-bold text-red-500 text-left">
                BDT 0
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Withdrwal of money section */}
    </div>
  );
};

export default PaymentForDeliveryman;
