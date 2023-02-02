import React, { useContext } from "react";
import { AiOutlineEdit, AiOutlineHeart, AiOutlineHistory, AiOutlineStar, AiOutlineUnorderedList, AiOutlineUser } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { FiUsers } from 'react-icons/fi';
import { BsCash } from "react-icons/bs";
import { BiListPlus } from "react-icons/bi";
import { GoListUnordered } from "react-icons/go";
import { Link, Outlet } from "react-router-dom";
import { StateContext } from "../../contexts/AuthProvider";
import useFindAdmin from "../../hooks/useFindAdmin";
import useFindBuyer from "../../hooks/useFindBuyer";
import useFindDeliveryman from "../../hooks/useFindDeliveryman";
import logo from '../../assets/logo/logo.png';
import Loader from "../../components/Loader/Loader";

const DashboardLayout = () => {
  const { user, logOut } = useContext(StateContext);
  const [isAdmin, isAdminLoading] = useFindAdmin(user?.email);
  const [isBuyer, isBuyerLoading] = useFindBuyer(user?.email);
  const [isDeliveryman, isDeliverymanLoading] = useFindDeliveryman(user?.email);

  if (isAdminLoading || isBuyerLoading || isDeliverymanLoading) {
    return <Loader></Loader>
  }

  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
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
              <Link className="text-slate-700" to="/dashboard" > 
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
                    to="/dashboard/add-product"
                  >
                    <BiListPlus />Add Product
                  </Link>
                </li>
                <li className="text-[14px] font-semibold">
                  <Link
                    className="text-slate-700"
                    to="/dashboard/edit-product"
                  >
                    <AiOutlineEdit />Edit Products
                  </Link>
                </li>
              </>
            )}

            {/* Buyer Dashboard */}
            {isBuyer && (
              <>
                <li className="text-[14px] font-semibold">
                  <Link
                    className="text-slate-700"
                    to="/dashboard/my-orders"
                  >
                    <AiOutlineUnorderedList />My Orders
                  </Link>
                </li>
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

            <li className="text-[14px] font-semibold">
              <button onClick={logOut} className="text-slate-700" to="/dashboard" > 
                <BiLogOut /> Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
