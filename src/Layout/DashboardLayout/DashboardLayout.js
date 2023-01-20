import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../components/Shared/Footer/Footer";
import Navbar from "../../components/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <div className="drawer drawer-mobile lg:w-11/12 mx-auto">
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
          <ul className="menu mt-[77px] p-4 w-56 bg-white text-base-100">
            <li className="rounded-none">
              <Link
                className="border-y text-slate-700 h-[30px] py-5 !rounded-none"
                to="/dashboard"
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link
                className="border-b text-slate-700 h-[30px] py-5 !rounded-none"
                to="/dashboard/all-buyers"
              >
                All Buyers
              </Link>
            </li>
            <li>
              <Link
                className="border-b text-slate-700 h-[30px] py-5 !rounded-none"
                to="/dashboard/all-deliveryman"
              >
                Delivery Men
              </Link>
            </li>
            <li>
              <Link
                className="border-b text-slate-700 h-[30px] py-5 !rounded-none"
                to="/dashboard/my-orders"
              >
                My Orders
              </Link>
            </li>
            <li>
              <Link
                className="border-b text-slate-700 h-[30px] py-5 !rounded-none"
                to="/dashboard/my-wishlist"
              >
                My Wishlist
              </Link>
            </li>
            <li>
              <Link
                className="border-b text-slate-700 h-[30px] py-5 !rounded-none"
                to="/dashboard/payments"
              >
                Payments
              </Link>
            </li>
            <li>
              <Link
                className="border-b text-slate-700 h-[30px] py-5 !rounded-none"
                to="/dashboard/my-reviews"
              >
                My Reviews
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
