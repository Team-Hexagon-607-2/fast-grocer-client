import React, { useContext } from "react";
import { StateContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const WishList = () => {
  const { wishListData, wishlistLoading, wishlistRefetch } =
    useContext(StateContext);

  const handleDelete = (id) => {
    fetch(`https://fg-server.vercel.app/wishlist/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === true) {
          toast.success(`${data.message}`);
          wishlistRefetch();
        } else {
          toast.error(`${data.message}`);
        }
      })
      .catch((err) => console.log(err));
  };
  const Loader = () => {
    return (
      <div
        className="sm:w-[80px]  sm:h-[80px]
       w-[40px] h-[40px]  animate-spin bg-white
        text-white border-dashed border-4 sm:border-8 
        border-[#92B137] rounded-[50%]"
      ></div>
    );
  };
  const wishlist = wishListData?.data;
  return (
    <div className="p-5">
      <div className="flex items-center justify-center">
        {" "}
        {wishlistLoading && <Loader />}
      </div>
      <div className="mt-5 flex-col flex">
        {wishlist?.length === 0 ? (
          <div className=" flex text-5xl sm:mt-40 mt-20  text-[#FF5F3D] font-extrabold flex-col items-center justify-center">
            No Item
          </div>
        ) : (
          <>
            <div className="overflow-x-auto overflow-y-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Bundle</th>
                    <th>Delete</th>
                    <th>Buy</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlist?.map((item, i) => (
                    <tr key={item?._id}>
                      <th>{i + 1}</th>
                      <td>
                        <Link
                          to={`/products/${item?.productId}`}
                          className=" hover:bg-blue-200 flex flex-row gap-2 items-center cursor-pointer"
                        >
                          <div className="avatar">
                            <div className="mask mask-squircle w-14 h-14 hover:bg-slate-200">
                              <img
                                src={item?.productImage}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <p className="text:bg-blue-500 ">
                            {item?.productName}
                          </p>
                        </Link>
                      </td>
                      <td>
                        <div className="flex gap-2 items-center justify-center">
                          <p className="font-bold text-xl text-black">
                            ৳ {item?.productPrice}
                          </p>
                          <p className="font-lg line-through text-red-500 font-semibold">
                            {item?.productOriginalPrice}
                          </p>
                        </div>
                      </td>
                      <td>{item?.bundle}</td>
                      <td>
                        <button
                          onClick={() => handleDelete(item?._id)}
                          className="btn btn-error "
                        >
                          Delete
                        </button>
                      </td>
                      <td>
                        <button className="btn btn-primary ">Buy</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WishList;
