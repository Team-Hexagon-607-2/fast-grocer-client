import React from "react";
import { useContext } from "react";
import { StateContext } from "../../contexts/AuthProvider";

const PickedItems = () => {
  const { cart, order, setOrder, totalPrice } = useContext(StateContext);
  const subTotal = Number(cart?.qunatity) * Number(cart?.price);

  return (
    <div className="">
      {cart?.map((cartItem) => (
        <div key={cartItem._id}>
          <div className="flex flex-row ">
            <div className="w-[100px] h-[100px]">
              <img src={cartItem?.imageUrl} alt="" className="object-fit" />
            </div>
            <div className="ml-4">
              <p>{cartItem?.name}</p>
              <p>
                SubTotal:{" "}
                <span className="text-md font-bold">
                  ৳{Number(cartItem?.qunatity) * Number(cartItem?.price)}
                </span>
              </p>
              <p>
                Quantity:{" "}
                <span className="text-md font-bold">{cartItem?.qunatity}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="flex flex-col items-end justify-end ">
        <p className="text-lg m-1 font-semibold">Shipping Fee: ৳29</p>
        <p className="text-lg m-1 font-semibold">SubTotal: {totalPrice}</p>
        <p className="text-lg m-1 font-bold"> Total Price: {totalPrice + 29}</p>
      </div>
    </div>
  );
};

export default PickedItems;
