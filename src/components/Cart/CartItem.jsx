import React, { useContext } from "react";
import { StateContext } from "../../contexts/AuthProvider";
import { AiFillDelete } from "react-icons/ai";
const CartItem = ({ cart }) => {
  const { handleDecrement, handleIncrement, handleRemove } =
    useContext(StateContext);
  const subTotal = Number(cart?.qunatity) * Number(cart?.price);
  return (
    <div className="w-full sm:w-9/12 mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-3 sm:w-auto sm:h-auto  h-[150px]  ">
          <div className="w-[100px] h-[100px]   sm:w-[140px] sm:h-[170px]  ">
            <img
              src={cart?.imageUrl}
              className="w-full h-full object-contain"
            />
          </div>

          <div>
            <p className="sm:text-xl text-[13px] font-bold">{cart?.name}</p>
            <p className="text-slate-600 font-bold sm:text-lg text-sm  ">
              {cart?.bundle}
            </p>
            <p className="text-slate-600 font-bold sm:text-lg text-sm  ">
              Price: {cart?.price}
            </p>
            <p className="text-slate-600 font-bold sm:text-lg text-sm  ">
              SubTotal: {subTotal}
            </p>
            <div className="sm:text-xl text-[13px] font-bold ">
              <div className="mt-2 sm:mt-4 rounded-[2px]">
                <span className="mr-2 sm:text-lg text-sm font-bold">
                  {" "}
                  Quantity:
                </span>
                <span
                  onClick={(e) => handleDecrement(e, cart?._id)}
                  className=" hover:bg-[#6BA22C]  cursor-pointer py-1 px-4 sm:px-5 sm:py-1 bg-slate-100 text-lg border-[1px] border-slate-200 "
                >
                  -
                </span>
                <span className=" py-1 px-4 sm:px-5  sm:py-1 bg-slate-100 text-lg border-[1px] border-slate-200">
                  {cart?.qunatity}
                </span>
                <span
                  onClick={(e) => handleIncrement(e, cart?._id)}
                  className="hover:bg-[#6BA22C]  cursor-pointer  py-1 px-4 sm:px-5  sm:py-1 bg-slate-100 text-lg border-[1px] border-slate-200"
                >
                  +
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            onClick={(e) => handleRemove(e, cart?._id)}
            className="p-3 bg-red-100 text-2xl sm:text-4xl rounded-full cursor-pointer hover:bg-red-200"
          >
            <AiFillDelete color="red" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
