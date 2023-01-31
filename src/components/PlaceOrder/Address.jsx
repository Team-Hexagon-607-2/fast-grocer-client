import React from "react";
import { useContext } from "react";
import { StateContext } from "../../contexts/AuthProvider";

const Address = ({
  name,
  setName,
  number,
  setNumber,
  email,
  setEmail,
  address,
  setAddress,
}) => {
  return (
    <div>
      {" "}
      <p className="text-xl font-bold mb-5 ">Shipping Info</p>
      <div>
        <label htmlFor="">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className=" ml-2 input input-bordered input-accent w-full max-w-xs"
        />
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          className="ml-2 input input-bordered input-accent w-full max-w-xs"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Phone Number </label>
        <input
          type="number"
          className="ml-2 input input-bordered input-accent w-full max-w-xs"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter Your phone Number"
        />
      </div>
      <div>
        <label htmlFor="">Full Address</label>
        <input
          type="text"
          className="input input-bordered input-accent w-full max-w-xs"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter Your Full Address"
        />
      </div>
    </div>
  );
};

export default Address;
