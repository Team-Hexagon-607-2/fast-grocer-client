import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../components/Shared/Footer/Footer";
import Navbar from "../../components/Shared/Navbar/Navbar";
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

            {/* Admin Dashboard */}

            {isAdmin && (
              <>
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
                    to="/dashboard/all-order"
                  >
                    All Orders
                  </Link>
                </li>
                <li>
                  <Link
                    className="border-b text-slate-700 h-[30px] py-5 !rounded-none"
                    to="/dashboard/add-product"
                  >
                    Add Product
                  </Link>
                </li>
                <li>
                  <Link
                    className="border-b text-slate-700 h-[30px] py-5 !rounded-none"
                    to="/dashboard/edit-product"
                  >
                    Edit Products
                  </Link>
                </li>
              </>
            )}

            {/* Buyer Dashboard */}

            {isBuyer && (
              <>
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
              </>
            )}

            {/* Delivery man Dashboard */}
            {isDeliveryman && (
              <>
                <li>
                  <Link
                    to="/dashboard/delivery-man-order"
                    className="border-b text-slate-700 h-[30px] py-5 !rounded-none"
                  >
                    My Assign Order
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
