import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../../../contexts/AuthProvider";
import { FcCancel } from "react-icons/fc";
import { toast } from "react-hot-toast";
import Loader from "../../../components/Loader/Loader";
const MyOrders = () => {
  const { user } = useContext(StateContext);
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["order", user?.email, "cancel-order"],
    queryFn: () =>
      fetch(`https://fg-server.vercel.app/order/${user?.email}`).then((res) =>
        res.json()
      ),
  });
  // const {
  //   data: cancel_data,
  //   isLoading: cancelLoading,
  //   refetch: cancelRefetch,
  // } = useQuery({
  //   queryKey: ["cancel-order"],
  //   queryFn: () =>
  //     fetch(`https://fg-server.vercel.app/cancel-order`).then((res) => res.json()),
  // });
  console.log(data?.data);
  const handleCancelRequest = (id) => {
    const cancel = "Cancel Request Sent";
    fetch(`https://fg-server.vercel.app/cancel-order/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cancel }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === true) {
          toast.success("Cancel Request Sent");
          refetch();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className=''>
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>
      <div className="overflow-x-auto w-full">
      <div>{isLoading && <Loader />}</div>
        <table className="table w-full">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Product Info</th>
              <th>Total Price</th>
              <th>Status</th>
              <th>Paid</th>
              <th>Condition</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((item, index) => (
              <tr key={item?._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center flex-col space-x-3">
                    {item?.order_products?.map((product) => (
                      <Link
                        to={`/products/${product?._id}`}
                        className="flex flex-row items-center w-[300px] hover:bg-blue-200"
                      >
                        <div className="w-[80px] h-[80px]">
                          <img
                            src={product?.imageUrl}
                            className="object-fit w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-semibold">
                            {product.name?.slice(0, 30)}
                          </p>
                          <p>{product?.bundle}</p>
                          <p>Quantity: {product?.qunatity}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </td>
                <td>
                  <p className="font-semibold font-sm">
                    Total Price: ৳{item?.total_price}
                  </p>
                </td>
                <td>
                  <p className="text-md ">{item?.status}</p>
                </td>
                <th className={`${item?.paid === false && "text-red-500"}`}>
                  {item?.paid === false ? "Not Paid" : "Already Paid"}
                </th>
                <th>{item?.condition}</th>
                <th>
                  <p>{item?.cancel}</p>
                  {!item?.cancel && (
                    <div
                      onClick={() => handleCancelRequest(item?._id)}
                      className="p-3 cursor-pointer
                       hover:bg-slate-400 flex items-center rounded-full text-sm bg-slate-200"
                    >
                      {isLoading && <span className="">Loading..</span>}
                      <FcCancel size={25} />
                      <button className="">Cancel</button>
                    </div>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
