import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../../../contexts/AuthProvider";
import { FcCancel } from "react-icons/fc";
import { toast } from "react-hot-toast";
import Loader from "../../../components/Loader/Loader";
import { useState } from "react";
import ReturnConfirmModal from "../../../components/Modal/ReturnConfirmModal/ReturnConfirmModal";
const MyOrders = () => {
  const { user } = useContext(StateContext);
  const [processing, setProcessing] = useState(false);
  const [orderId, setOrderId] = useState(null)

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["returnProduct"],
    queryFn: () =>
      fetch(`https://fg-server.vercel.app/order/${user?.email}`)
      .then((res) => res.json())

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

  const handleCancelRequest = (item) => {
    if (item?.deliver === true) {
      toast.error("Product Delivered and We don't accept any cancel request");
      return;
    }
    const cancel = "Cancel Request Sent";
    fetch(`https://fg-server.vercel.app/cancel-order/${item?._id}`, {
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
    <>
      <div className="">
        <h2 className="text-center md:text-2xl font-bold mb-4 p-0 md:p-10">
          My Orders
        </h2>
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
                <th>Return Status</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((item, index) => (
                <tr key={item?._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center flex-col">
                      {item?.order_products?.map((product) => (
                        <Link key={product?._id}
                          to={`/products/${product?._id}`}
                          className="flex w-[300px] hover:bg-blue-200 mb-2 rounded-md"
                        >
                          <div className="mr-2">
                            <img
                              src={product?.imageUrl}
                              className="object-fit w-16 h-16 rounded-md"
                              alt="" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold">
                              {product.name?.slice(0, 30)}
                            </p>
                            <p className="text-sm">{product?.bundle}</p>
                            <p className="text-sm">Quantity: {product?.qunatity}</p>
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
                  <td className={`${item?.paid === false && "text-red-500"}`}>
                    {item?.paid === false ? "Not Paid" : "Already Paid"}
                  </td>
                  <td>{item?.condition}</td>
                  <td>
                    <p>{item?.cancel}</p>
                    {(!item?.cancel) && 
                        <button onClick={() => handleCancelRequest(item)}
                        className="cursor-pointer rounded-full text-sm bg-red-300 hover:bg-red-400 duration-300 px-3 py-1">Cancel</button>
                    }
                  </td>
                  <td>
                    {
                      ((item?.deliver && item?.cancel) || (item?.deliver || !item?.cancel || !item?.returnRequest)) &&
                      <label htmlFor="return-modal" onClick={() => setOrderId(item?._id)} className="cursor-pointer bg-blue-300 hover:bg-blue-400 duration-300 px-3 py-1 rounded-full">Return</label> 
                    }
                    {
                      item?.returnRequest && <p>Return Requested</p>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {
        !processing && <ReturnConfirmModal
          setProcessing={setProcessing}
          orderId={orderId}
        ></ReturnConfirmModal>
      }
    </>
  );
};

export default MyOrders;
