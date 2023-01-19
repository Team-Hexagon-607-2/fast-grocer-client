/****************************************************************
 * author: md atiqul islam
 * This file contain desktop navbar login feature
 * also create an account to navigate other page
 */

import React from "react";
import { BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <div className="">
        <Link
          to="/login"
          className="flex items-center gap-[2px] justify-center cursor-pointer hover:text-[#96B240] "
        >
          <div className="w-[40px] h-[40px]  rounded-[50%] bg-[#F2F4EC] flex items-center justify-center ">
            <BsPeople className="text-lg" />
          </div>
          <p className="hover:text-[#92ad3f] font-semibold text-black  text-[14px]">
            Login <span className="italic text-[#95AF4D]">or</span> <br />{" "}
            Register
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
