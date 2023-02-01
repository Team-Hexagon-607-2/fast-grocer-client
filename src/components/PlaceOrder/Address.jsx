import React from "react";
import { useContext } from "react";
import { StateContext } from "../../contexts/AuthProvider";
import { FcAddressBook } from "react-icons/fc";
import { Link } from "react-router-dom";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Address = ({ countryName, setCountryName, name, setName, number, setNumber, email, setEmail, address, setAddress, }) => {

  return (
    <div>
      {" "}
      <h3 className="text-xl font-bold mb-5"><FcAddressBook className="inline-block" /> Shipping address</h3>
      
      <div className="mb-5">
        <label htmlFor="countryName" className="text-sm">Country Name</label>
        <input
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
          type="text"
          className="placeholder:text-sm border w-full rounded-md px-3 py-2 focus:outline-green-500 duration-300"
          placeholder="Bangladesh"
          />
      </div>

      <div className="mb-5">
        <label htmlFor="name" className="text-sm">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="text-sm text-slate-400 border w-full rounded-md px-3 py-2 focus:outline-green-500 duration-300"
          />
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="text-sm">Email</label>
        <input
          type="email"
          name="email"
          className="text-sm text-slate-400 border w-full rounded-md px-3 py-2 focus:outline-green-500 duration-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="" className="text-sm">Phone Number </label>
        <input
          type="number"
          className=" placeholder:text-sm border w-full rounded-md px-3 py-2 focus:outline-green-500 duration-300"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter Your phone Number"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="" className="text-sm">Full Address</label>
        <input
          type="text"
          className="placeholder:text-sm border w-full rounded-md px-3 py-2 focus:outline-green-500 duration-300"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter Your Full Address"
        />
      </div>

      <Link to='/cart' className="text-[#6CBF4A]"><BsChevronLeft className="inline-block" /> Return to Cart</Link>
    </div>
  );
};

export default Address;
