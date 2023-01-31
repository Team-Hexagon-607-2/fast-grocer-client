import React, { useContext } from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { StateContext } from "../../contexts/AuthProvider";
import Address from "./Address";
import PickedItems from "./PickedItems";
import { toast } from "react-hot-toast";

const PlaceOrder = () => {
  const { cart, order, setOrder, user, totalPrice } = useContext(StateContext);
  const [name, setName] = useState(user?.displayName);
  const [email, setEmail] = useState(user?.email);
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked) {
      setValue("Cash On Delivery");
    } else {
      setValue("");
    }
  };
  
  const navigate = useNavigate();

  const handleOrderSubmit = () => {
    if (!address || !number || !checked) {
      alert("Please enter all information");
    }
    const order = {
      name: name,
      email: email,
      number: number,
      address: address,
      order_products: cart,
      status: "pending",
      paid: false,
      shipping_fee: 29,
      condition: checked ? "Cash On Delivery" : "Card Payment",
      total_price: Number(totalPrice + 29),
      createdAt: new Date(),
    };

    console.log(order);

    fetch("https://fg-server.vercel.app/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === true) {
          toast.success("Order Created Successfully");
          navigate("/dashboard/my-orders");
          localStorage.removeItem("cart");
        }
      })
      .catch((error) => console.log(error));
  };

  const handlePayment = () => {
    if (!address || !number) {
      alert("Please enter all information");
      return;
    }
    const order = {
      name: name,
      email: email,
      address: address,
      number: number,
      order_products: cart,
      status: "pending",
      shipping_fee: 29,
      condition: "Card Payment",
      total_price: Number(totalPrice + 29),
      createdAt: new Date(),
    };
    navigate("/payment", { state: order });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div>
          <p className="mt-10 text-xl font-bold text-[#6A802D]">
            Your Picked Items
          </p>
        </div>
        <div className="mt-4 w-full sm:w-9/12 mx-auto rounded-[10px] bg-[#FCFFF6]">
          <PickedItems />
        </div>
      </div>
      <div className="mt-4 w-full sm:w-9/12 mx-auto rounded-[10px] bg-[#FCFFF6]">
        <Address
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          address={address}
          setAddress={setAddress}
          number={number}
          setNumber={setNumber}
        />
        <div className="mt-10">
          <p className="mb-7 font-bold text-xl">Select Payment Method</p>
          <div className="flex flex-row gap-2 items-center mb-4">
            <button>
              {checked ? (
                <input
                  type="checkbox"
                  checked="checked"
                  onChange={handleChange}
                  className="checkbox"
                />
              ) : (
                <input
                  type="checkbox"
                  checked=""
                  onChange={handleChange}
                  className="checkbox"
                />
              )}
            </button>
            <p>Cash On Delivery</p>
          </div>
          <button onClick={handlePayment}>
            <p className="btn btn-warning">Pay With Card</p>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-end justify-end m-3">
        <button
          disabled={!checked}
          className="btn btn-primary"
          onClick={handleOrderSubmit}
        >
          Confirm Order
        </button>
      </div>
    </>
  );
};

export default PlaceOrder;
