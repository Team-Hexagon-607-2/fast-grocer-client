import React, { useContext } from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { StateContext } from "../../contexts/AuthProvider";
import Address from "./Address";
import PickedItems from "./PickedItems";
import { toast } from "react-hot-toast";
import { BsChevronDoubleUp, BsChevronDown, BsChevronUp } from "react-icons/bs";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { FcAbout } from "react-icons/fc";
import { RiShoppingCartLine } from "react-icons/ri";

const PlaceOrder = () => {
  const { cart, order, setOrder, user, totalPrice } = useContext(StateContext);
  const [countryName, setCountryName] = useState('');
  const [name, setName] = useState(user?.displayName);
  const [email, setEmail] = useState(user?.email);
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState("");
  const [product, setShowProduct] = useState(true);
  console.log(countryName);

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
      {/* mobile view */}
      <div onClick={() => setShowProduct(!product)} className="collapse lg:hidden">
        <input type="checkbox" className="peer" />
        <div className="collapse-title border bg-[#F6F6F6] peer-checked:bg-[#FAFAFA] peer-checked:text-black flex items-center justify-between">
          <p className="text-[#6CBF4A] flex items-center gap-2">
            <span><RiShoppingCartLine className="inline-block h-6 w-6" /> {product ? 'Show order summary' : 'Hide order Summery'}</span>
            <span>{product ? <BsChevronDown /> : <BsChevronUp />}</span>
          </p>
          <p className="text-lg font-bold"> ৳ {totalPrice + 29}</p>
        </div>

        <div className="collapse-content  peer-checked:bg-[#FAFAFA] peer-checked:text-black">
          <div className="border-b-2 pt-5">
            {cart?.map((cartItem) => (
              <div key={cartItem._id} className='flex justify-between mb-4 relative'>
                <div className="flex gap-3">
                  <div className="w-[70px] h-[70px] border-2 rounded-md">
                    <PhotoProvider>
                      <PhotoView src={cartItem?.imageUrl}>
                        <img src={cartItem?.imageUrl} alt="" className='cursor-pointer' />
                      </PhotoView>
                    </PhotoProvider>
                  </div>
                  <div>
                    <Link to={`/products/${cartItem._id}`} className='text-sm md:text-md hover:underline'>{cartItem?.name}</Link>
                    <p>Price: ৳{cartItem?.price}</p>
                    <p className="bg-slate-500 text-white w-5 h-5 rounded-full flex items-center justify-center absolute top-[-10px] left-[60px]"><span className="text-md font-bold">{cartItem?.qunatity}</span></p>
                  </div>
                </div>

                <p className="text-sm font-semibold">৳ {cartItem?.price * cartItem?.qunatity}</p>
              </div>
            ))}
          </div>

          <p className="flex items-center justify-between text-sm my-2">Subtotal <span className="font-semibold">৳ {totalPrice}</span></p>
          <p className="flex items-center justify-between text-sm pb-2 border-b-2">Shipping <span className="font-semibold">৳ 29</span></p>
          <p className="flex items-center justify-between font-semibold mt-3 text-lg">Total <span className="font-semibold">৳ {totalPrice + 29}</span></p>
        </div>
      </div>

      {/* destop view */}
      <div className="grid lg:grid-cols-2">
        <div className="p-5">
          <Address
            countryName={countryName}
            setCountryName={setCountryName}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            address={address}
            setAddress={setAddress}
            number={number}
            setNumber={setNumber}
          />
        </div>

        <div className="p-5 hidden lg:block">
          <h3 className="text-xl font-bold mb-5"><FcAbout className="inline-block" /> Products</h3>
          <div className="border-b-2 pt-5">
            {cart?.map((cartItem) => (
              <div key={cartItem._id} className='flex justify-between mb-4 relative'>
                <div className="flex gap-3">
                  <div className="w-[70px] h-[70px] border rounded-md">
                    <PhotoProvider>
                      <PhotoView src={cartItem?.imageUrl}>
                        <img src={cartItem?.imageUrl} alt="" className='cursor-pointer' />
                      </PhotoView>
                    </PhotoProvider>
                  </div>
                  <div>
                    <Link to={`/products/${cartItem._id}`} className='hover:underline'>{cartItem?.name}</Link>
                    <p>Price: ৳{cartItem?.price}</p>
                    <p className="bg-slate-500 text-white w-5 h-5 rounded-full flex items-center justify-center absolute top-[-10px] left-[60px]"><span className="text-md font-bold">{cartItem?.qunatity}</span></p>
                  </div>
                </div>

                <p className="text-sm font-semibold">৳ {cartItem?.price * cartItem?.qunatity}</p>
              </div>
            ))}
          </div>

          <p className="flex items-center justify-between text-sm my-2">Subtotal <span className="font-semibold">৳ {totalPrice}</span></p>
          <p className="flex items-center justify-between text-sm pb-2 border-b-2">Shipping <span className="font-semibold">৳ 29</span></p>
          <p className="flex items-center justify-between font-semibold mt-3 text-lg">Total <span className="font-semibold">৳ {totalPrice + 29}</span></p>
        </div>
      </div>

      <div className="mt-4 w-full p-5 bg-slate-100 my-10">
        <h3 className="text-xl font-semibold">Payment</h3>
        <p className="text-sm">All transactions are secure and encrypted.</p>

        <div className="flex flex-row gap-2 items-center mt-4 mb-2">
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
        
        <div className="flex items-center justify-between">
          <button onClick={handlePayment} className='border px-3 py-1 rounded-md text-white bg-green-500 hover:bg-green-600 duration-500'>Pay With Card</button>
          <button onClick={handleOrderSubmit} disabled={!checked} className="btn btn-sm rounded-md btn-primary" > Confirm Order</button>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
