/****************************************************************
 * author: md atiqul islam
 * This file contain desktop navbar login feature
 * also create an account to navigate other page
 */

import React from "react";
import { BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StateContext } from "../../../contexts/AuthProvider";
import { BiLogOutCircle } from "react-icons/bi";
const Login = () => {
  const { user, logOut } = useContext(StateContext);
  return (
    <>
      {!user && (
        <div className="">
          <Link
            to="/login"
            className="flex items-center gap-[2px] justify-center cursor-pointer hover:text-[#6a9333] "
          >
            <div className="w-[47px] h-[47px]  rounded-[50%] bg-[#F2F4EC] flex items-center justify-center ">
              <BsPeople className="text-xl" />
            </div>
            <p className="hover:text-[#6a9333] font-semibold text-black  text-[14px] ml-1">
              Login <span className="italic text-[#95AF4D]">or</span> <br />{" "}
              Register
            </p>
          </Link>
        </div>
      )}
    </>
  );
};

export default Login;
