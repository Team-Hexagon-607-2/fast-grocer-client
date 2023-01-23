import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../components/Shared/Footer/Footer";
import Navbar from "../../components/Shared/Navbar/Navbar";
import { StateContext } from "../../contexts/AuthProvider";
import useFindAdmin from "../../hooks/useFindAdmin";
import useFindBuyer from "../../hooks/useFindBuyer";
import useFindDeliveryman from "../../hooks/useFindDeliveryman";

const DashboardLayout = () => {

  const { user } = useContext(StateContext);
    const [isAdmin] = useFindAdmin(user?.email);
    const [isBuyer] = useFindBuyer(user?.email);
    const [isDeliverymen] = useFindDeliveryman(user?.email);

  return (
    <div>
      <div className="drawer drawer-mobile lg:w-11/12 mx-auto">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content p-10">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-56 bg-gray-200 text-base-100">
            <img className="w-16 h-16 mx-auto my-10 rounded-full" src={user?.photoURL || 'https://picsum.photos/200/300'} alt="" />
            <li className="rounded-none">
              <Link
                className="border-y text-slate-700 h-[30px] py-5 !rounded-none"
                to="/dashboard"
              >
                My Profile
              </Link>
            </li>

            {/* Admin Dashboard */}

            {
              isAdmin && <>
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
            </>}

            {/* Buyer Dashboard */}

            {
              isBuyer && <>
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
            </>}

            {/* Buyer Dashboard */}


          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
