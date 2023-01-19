import React, { useContext } from "react";
import { StateContext } from "../../contexts/AuthProvider";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, totalPrice, clearCart, totalQuantity } =
    useContext(StateContext);
  return (
    <div className=" mt-6 sm:mt-[50px] w-full">
      {cart.length === 0 && (
        <div className="flex items-center justify-center h-[50vh]">
          <p className="text-3xl font-bold text-red-500 ">
            No Item In Your Bag
          </p>
        </div>
      )}
      <div className="flex flex-col ">
        {cart.length > 0 && cart.length && (
          <div className="">
            <div className="flex relative items-end flex-row justify-end">
              <button
                onClick={clearCart}
                className="btn bg-red-500 
               border-none
              "
              >
                Clear Cart
              </button>
            </div>
            <div className="p-2 sm:p-1 flex items-center justify-center flex-col   sm:gap-3">
              {cart?.map((cart) => (
                <CartItem cart={cart} key={cart._id} />
              ))}
            </div>
            <div className="w-full h-[1px] bg-slate-500"></div>
            <div className="p-2 sm:p-1">
              <div className="flex relative items-end flex-col gap-2 justify-end">
                <button className="text-md font-semibold">
                  Total Product Quantity: {totalQuantity}
                </button>
                <button className="text-lg font-semibold">
                  Sub Total: ৳{totalPrice}
                </button>
                <button className="text-xl  font-bold">
                  Total : ৳{totalPrice}
                </button>
                <button className="btn btn-primary mt-4 mb-10">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
