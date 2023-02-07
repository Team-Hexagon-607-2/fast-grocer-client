import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { StateContext } from "../../../contexts/AuthProvider";
import { FiChevronRight } from "react-icons/fi";

const NavNavLinks = () => {
  const { user } = useContext(StateContext);
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState('');

  const { data: allOrders = [], isLoading } = useQuery({
    queryKey: ['orderTracking', user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/orderTracking/${user?.email}`);
      const data = await res.json();
      return data;
    }
  });

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  const limitsOrders = allOrders.slice(0, 3);

  const handleOrderTracking = () => {
    const result = allOrders.find(order => order?._id === orderId);
    setOrderStatus(result.status);
  };

  return (
    <div className="flex flex-row flex-wrap text-[14px] text-white">
      <NavLink to="/" className={({ isActive }) => isActive ? 'bg-slate-700 py-2 px-3 cursor-pointer duration-300' : 'py-2 px-3 cursor-pointer hover:bg-slate-700 duration-300'}>
        <label
          tabIndex={0}
          className=" cursor-pointer"
        >
          Home
        </label>
      </NavLink>

      <NavLink to="/allproducts" className={({ isActive }) => isActive ? 'bg-slate-700 py-2 px-3 cursor-pointer duration-300' : 'py-2 px-3 cursor-pointer hover:bg-slate-700 duration-300'}>
        <label className="cursor-pointer">
          All Products
        </label>
      </NavLink>

      <NavLink to="/onsale" className={({ isActive }) => isActive ? 'bg-slate-700 py-2 px-3 cursor-pointer duration-300' : 'py-2 px-3 cursor-pointer hover:bg-slate-700 duration-300'}>
        <label className="cursor-pointer">Offer</label>
      </NavLink>

      <NavLink to="/aboutUs" className={({ isActive }) => isActive ? 'bg-slate-700 py-2 px-3 cursor-pointer duration-300' : 'py-2 px-3 cursor-pointer hover:bg-slate-700 duration-300'}>
        <label className="cursor-pointer">About Us</label>
      </NavLink>

      <NavLink className="dropdown py-2 cursor-pointer hover:bg-slate-700 duration-300 relative">
        <label tabIndex={0} className="cursor-pointer px-3">Track My Order</label>

        <div tabIndex={0} className="dropdown-content bg-white text-black p-2  w-[320px] absolute top-9 left-[-50px]">
          <div className="mb-3">
            <h2 className="text-[17px] mb-2 text-slate-600">My last Order</h2>
            {
              !isLoading && limitsOrders.map(order =>
                <li key={order?._id} className="hover:underline text-xs text-[#4CA4BC] inline-block">{order?.createdAt.slice(0, 10)} - Order {order?._id}</li>
              )
            }
          </div>

          <div className="mb-3">
            <h2 className="text-[17px] mb-2 text-slate-600">Track my order</h2>

            <p className="text-xs">Your Order Number</p>
            <div className="flex items-center">
              <input onMouseOut={(e) => setOrderId(e.target.value)} className='border-t border-l border-b rounded-l-md px-2 py-1 focus:outline-[#84B840]' type="text" placeholder="eg. 123456789" />
              <button onClick={handleOrderTracking} className="bg-[#84B840] px-2 py-1 rounded-r-md"><FiChevronRight className="text-white h-6 w-6" /> </button>
            </div>
          </div>

          <p>{orderStatus}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default NavNavLinks;
