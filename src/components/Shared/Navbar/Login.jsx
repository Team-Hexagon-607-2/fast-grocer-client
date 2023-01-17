/****************************************************************
 * author: md atiqul islam
 * This file contain desktop navbar login feature
 * also create an account to navigate other page
 */

import React from "react";
import { BsPeople } from "react-icons/bs";
const Login = () => {
  return (
    <div>
      <div className="dropdown dropdown-end">
        <label
          tabIndex={0}
          className="flex items-center gap-[2px] justify-center cursor-pointer hover:text-[#96B240] "
        >
          <div className="w-[45px] h-[45px]  rounded-[50%] bg-[#F2F4EC] flex items-center justify-center ">
            <BsPeople className="text-xl" />
          </div>
          <p className="hover:text-[#92ad3f] font-semibold text-black  text-[14px]">
            Login <span className="italic text-[#95AF4D]">or</span> <br />{" "}
            Register
          </p>
        </label>

        <ul
          tabIndex={0}
          className="dropdown-content menu mt-1 border-[#95AF4D] border-t-[2px] "
        >
          <div className="w-[300px] h-[370px] p-3 bg-slate-50 rounded-sm">
            <div className=" border-slate-800 border-b-[1px] flex items-center justify-between p-3">
              <div className="text-xl font-bold">Sign In</div>
              <div className="text-[#77922e]">create an account</div>
            </div>
            <div className="flex flex-col mt-3 p-2">
              <p className="text-md font-semibold">Username or Email </p>
              <input
                type="text"
                placeholder="Username or Email"
                className=" mt-2 rounded-3xl py-3 px-1 outline-none border-[1px] border-slate-300  "
              />
              <p className="text-md font-semibold mt-2">Password</p>
              <input
                type="password"
                placeholder="Password"
                className=" mt-2 rounded-3xl py-3 px-1 outline-none border-[1px] border-slate-300  "
              />
              <button className="mt-5 font-bold rounded-full px-5 py-2 bg-[#8caf2b] text-white hover:bg-[#6A802D] transition duration-500">
                Login
              </button>
            </div>
            <div>
              <p className="ml-2 mt-2 font-semibold text-md f text-[#96B240]">
                Lost your password?
              </p>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Login;
