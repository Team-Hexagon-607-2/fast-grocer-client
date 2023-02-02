import React, { useContext } from "react";
import { AiOutlineHeart, AiOutlineHistory, AiOutlineStar, AiOutlineUnorderedList, AiOutlineUser } from "react-icons/ai";
import { FiUsers } from 'react-icons/fi';
import { BsCash } from "react-icons/bs";
import { GoListUnordered, GoTasklist } from "react-icons/go";
import { Link, Outlet } from "react-router-dom";
import { StateContext } from "../../contexts/AuthProvider";
import useFindAdmin from "../../hooks/useFindAdmin";
import useFindBuyer from "../../hooks/useFindBuyer";
import useFindDeliveryman from "../../hooks/useFindDeliveryman";
import logo from '../../assets/logo/logo.png';
import { TbPlaylistAdd } from "react-icons/tb";

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
          <ul className="menu w-64 bg-slate-100 text-base-100">
            <div className="border-b">
              <Link to='/'><img className="mx-auto my-7 w-[125px]" src={logo} alt="" /></Link>
            </div>
            <li className="text-[14px] font-semibold">
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
                <li className="text-[14px] font-semibold">
                  <Link
                    className="text-slate-700"
                    to="/dashboard/all-buyers"
                  >
                    <FiUsers /> All Buyers
                  </Link>
                </li>
                <li className="text-[14px] font-semibold">
                  <Link
                    className="text-slate-700"
                    to="/dashboard/all-deliveryman"
                  >
                    <FiUsers /> Delivery Men
                  </Link>
                </li>
                <li className="text-[14px] font-semibold">
                  <Link
                    className="text-slate-700"
                    to="/dashboard/all-order"
                  >
                    <AiOutlineUnorderedList />All Orders
                  </Link>
                </li>
                <li className="text-[14px] font-semibold">
                  <Link
                    className="text-slate-700"
                    to="/dashboard/all-products"
                  >
                    <GoTasklist />All Products
                  </Link>
                </li>
                <li className="text-[14px] font-semibold">
                  <Link
                    className="text-slate-700"
                    to="/dashboard/add-product"
                  >
                    <TbPlaylistAdd />Add Product
                  </Link>
                </li>
              </>
            )}

            {/* Buyer Dashboard */}

            {isBuyer && (
              <>
                <div className="dropdown">
                <li className="text-[14px] font-semibold">
                  <Link
                    className="text-slate-700"
                    to="/dashboard/my-orders"
                  >
                    <AiOutlineUnorderedList/>My Orders
                  </Link>
                </li>
                </div>
                <li className="text-[14px] font-semibold">
                  <Link
                    className="text-slate-700"
                    to="/dashboard/my-wishlist"
                  >
                    <AiOutlineHeart />My Wishlist
                  </Link>
                </li>
                <li className="text-[14px] font-semibold">
                  <Link
                    className="text-slate-700"
                    to="/dashboard/payments"
                  >
                    <BsCash />Payments
                  </Link>
                </li>
                <li className="text-[14px] font-semibold">
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
                <li className="text-[14px] font-semibold">
                  <Link
                    to="/dashboard/delivery-man-order"
                    className="text-slate-700"
                  >
                    <GoListUnordered />My Delivery Orders
                  </Link>
                </li>
                <li className="text-[14px] font-semibold">
                  <Link
                    to="/dashboard/delivery-history"
                    className="text-slate-700"
                  >
                    <AiOutlineHistory />Delivery History
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
