import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StateContext } from "../../../contexts/AuthProvider";

const Cart = () => {
  const { isAdmin, isDeliveryman, totalQuantity, totalPrice } = useContext(StateContext);

  return (
    <div className={isAdmin || isDeliveryman ? "dropdown dropdown-end hidden" : "dropdown dropdown-end"}>
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{totalQuantity}</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg text-center">{totalQuantity} Items</span>
          <span className="text-dark my-3 text-center">Subtotal: <span className="font-semibold">{totalPrice}</span>৳</span>
          <div className="card-actions">
            <Link to="/cart" className="bg-[#17dc86] hover:bg-[#15ba73] duration-300 w-full p-2 font-semibold text-center text-white rounded-md">View cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
