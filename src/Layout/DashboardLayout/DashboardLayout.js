import React, { useContext } from "react";
import { AiOutlineEdit, AiOutlineHeart, AiOutlineHistory, AiOutlineStar, AiOutlineUnorderedList, AiOutlineUser } from "react-icons/ai";
import { FiUsers } from 'react-icons/fi';
import { BsCash } from "react-icons/bs";
import { BiListPlus } from "react-icons/bi";
import {GoListUnordered} from "react-icons/go";
import { Link, Outlet } from "react-router-dom";
import { StateContext } from "../../contexts/AuthProvider";
import useFindAdmin from "../../hooks/useFindAdmin";
import useFindBuyer from "../../hooks/useFindBuyer";
import useFindDeliveryman from "../../hooks/useFindDeliveryman";
import Dashboard from "./../../Pages/Dashboard/Dashboard/Dashboard";

const DashboardLayout = () => {
  const { user } = useContext(StateContext);
  const [isAdmin] = useFindAdmin(user?.email);
  const [isBuyer] = useFindBuyer(user?.email);
  const [isDeliveryman] = useFindDeliveryman(user?.email);

  return (
    <div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu py-4 w-64 bg-slate-100 text-base-100">
            <img className="w-16 h-16 mx-auto my-10 rounded-full" src={user?.photoURL || 'https://picsum.photos/200/300'} alt="" />
            <li>
              <Link
                className="text-slate-700"
                to="/dashboard"
              >
                <AiOutlineUser /> My Profile
              </Link>
            </li>

            {/* Admin Dashboard */}

            {isAdmin && (
              <>
                <li>
                  <Link
                    className="text-slate-700"
                    to="/dashboard/all-buyers"
                  >
                    <FiUsers /> All Buyers
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-slate-700"
                    to="/dashboard/all-deliveryman"
                  >
                    <FiUsers /> Delivery Men
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-slate-700"
                    to="/dashboard/all-order"
                  >
                    <AiOutlineUnorderedList/>All Orders
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-slate-700"
                    to="/dashboard/add-product"
                  >
                    <BiListPlus/>Add Product
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-slate-700"
                    to="/dashboard/edit-product"
                  >
                    <AiOutlineEdit/>Edit Products
                  </Link>
                </li>
              </>
            )}

            {/* Buyer Dashboard */}

            {isBuyer && (
              <>
                <li>
                  <Link
                    className="text-slate-700"
                    to="/dashboard/my-orders"
                  >
                    <AiOutlineUnorderedList />My Orders
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-slate-700"
                    to="/dashboard/my-wishlist"
                  >
                    <AiOutlineHeart />My Wishlist
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-slate-700"
                    to="/dashboard/payments"
                  >
                    <BsCash />Payments
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-slate-700"
                    to="/dashboard/my-reviews"
                  >
                    <AiOutlineStar />My Reviews
                  </Link>
                </li>
              </>
            )}

            {/* Delivery man Dashboard */}
            {isDeliveryman && (
              <>
                <li>
                  <Link
                    to="/dashboard/delivery-man-order"
                    className="text-slate-700"
                  >
                    <GoListUnordered/>My Delivery Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/delivery-history"
                    className="text-slate-700"
                  >
                    <AiOutlineHistory/>Delivery History
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
