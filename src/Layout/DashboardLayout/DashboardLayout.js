import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../components/Shared/Footer/Footer";
import Navbar from "../../components/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
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
          <ul className="menu mt-24 p-4 w-80 bg-white text-base-100">
            <li>
              <Link
                className="border-2 mb-2 bg-primary"
                to="/dashboard"
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link
                className="border-2 mb-2 bg-primary"
                to="/dashboard/all-buyers"
              >
                All Buyers
              </Link>
            </li>
            <li>
              <Link
                className="border-2 mb-2 bg-primary"
                to="/dashboard/all-deliveryman"
              >
                Delivery Men
              </Link>
            </li>
            <li>
              <Link
                className="border-2 mb-2 bg-primary"
                to="/dashboard/my-orders"
              >
                My Orders
              </Link>
            </li>
            <li>
              <Link
                className="border-2 mb-2 bg-primary"
                to="/dashboard/wishlist"
              >
                My Wishlist
              </Link>
            </li>
            <li>
              <Link
                className="border-2 mb-2 bg-primary"
                to="/dashboard/payments"
              >
                Payments
              </Link>
            </li>
            <li>
              <Link
                className="border-2 mb-2 bg-primary"
                to="/dashboard/payments"
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
