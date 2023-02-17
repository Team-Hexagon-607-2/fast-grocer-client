import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StateContext } from "../../../contexts/AuthProvider";
import { AiFillHeart } from "react-icons/ai";

const Wishlist = () => {
  const { isAdmin, isDeliveryman, wishListData } = useContext(StateContext);
  
  return (
    <Link to="/dashboard/my-wishlist" className={isAdmin || isDeliveryman ? "flex-row hidden" : "flex flex-row"}>
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <AiFillHeart className="text-2xl" />
          <span className="badge badge-sm indicator-item">{wishListData?.data?.length}</span>
        </div>
      </label>
    </Link>
  );
};

export default Wishlist;
