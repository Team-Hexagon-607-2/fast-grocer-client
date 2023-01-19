import React, { useContext } from "react";
import { StateContext } from "../../contexts/AuthProvider";
import { AiFillDelete } from "react-icons/ai";
const CartItem = ({ cart }) => {
  const { handleDecrement, handleIncrement, handleRemove } =
    useContext(StateContext);
  return (
    <div className="w-full sm:w-9/12 mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-3 sm:w-auto sm:h-auto  h-[110px]  ">
          <div className="w-[100px] h-[100px]   sm:w-[120px] sm:h-[120px]  ">
            <img
              src={cart?.imageUrl}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <p className="sm:text-xl text-[13px] font-bold">{cart?.name}</p>
            <div className="sm:text-xl text-[13px] font-bold ">
              <div className="mt-2 sm:mt-4 rounded-[2px]">
                <span className="mr-2"> Quantity:</span>
                <span
                  onClick={(e) => handleDecrement(e, cart?._id)}
                  className=" hover:bg-[#6BA22C]  cursor-pointer  px-3 sm:px-5 sm:py-1 bg-slate-100 text-lg border-[1px] border-slate-200 "
                >
                  -
                </span>
                <span className="px-2 sm:px-5  sm:py-1 bg-slate-100 text-lg border-[1px] border-slate-200">
                  {cart?.qunatity}
                </span>
                <span
                  onClick={(e) => handleIncrement(e, cart?._id)}
                  className="hover:bg-[#6BA22C]  cursor-pointer px-3 sm:px-5  sm:py-1 bg-slate-100 text-lg border-[1px] border-slate-200"
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
            className="p-3 bg-red-100 text-xl sm:text-4xl rounded-full cursor-pointer hover:bg-red-200"
          >
            <AiFillDelete color="red" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
