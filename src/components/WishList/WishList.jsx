import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { StateContext } from "../../contexts/AuthProvider";

const WishList = () => {
  const { user } = useContext(StateContext);

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["wishlist", user?.email],
    queryFn: () =>
      fetch(`https://fg-server.vercel.app/wishlist/${user?.email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }).then((res) => res.json()),
  });

  const wishlist = data?.data;
  return (
    <div className="p-5">
      <div className="mt-5 flex-col flex">
        {wishlist.length === 0 ? (
          <div className=" flex text-5xl sm:mt-40 mt-20  text-[#FF5F3D] font-extrabold flex-col items-center justify-center">
            No Item
          </div>
        ) : (
          <>
            <div className="overflow-x-auto h-screen mt-5 sm:mt-3">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Bundle</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlist?.map((item, i) => (
                    <tr key={item?._id}>
                      <th>{i + 1}</th>
                      <td>
                        <div className="flex flex-row gap-2 items-center ">
                          <div className="avatar">
                            <div className="mask mask-squircle w-14 h-14">
                              <img
                                src={item?.productImage}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <p>{item?.productName}</p>
                        </div>
                      </td>
                      <td className="font-bold">৳ {item?.productPrice}</td>
                      <td>{item?.bundle}</td>
                      <td
                        //   onClick={() => handleDelete(wishlist?._id)}
                        className="btn btn-warning"
                      >
                        Delete
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
