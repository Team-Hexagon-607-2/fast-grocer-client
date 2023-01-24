import React from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../components/Loader/Loader";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const AllOrder = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["order"],
    queryFn: () =>
      fetch(`http://localhost:5000/order`).then((res) => res.json()),
  });

  //   const { data: cancel_data, refetch: cancelRefetch } = useQuery({
  //     queryKey: ["cancel-order"],
  //     queryFn: () =>
  //       fetch(`http://localhost:5000/cancel-order`).then((res) => res.json()),
  //   });

  const handleConfirmOrder = (id) => {
    const status = "Confirmed Order";
    fetch(`http://localhost:5000/order/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === true) {
          toast.success("Order Confirmed");
          refetch();
        }
      })
      .catch((err) => console.log(err));
  };

  const handleReadyToShipOrder = (id) => {
    const status = " Ready To Ship";
    fetch(`http://localhost:5000/order/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === true) {
          toast.success("Ready To Ship");
          refetch();
        }
      })
      .catch((err) => console.log(err));
  };

  const handleCancelRequestReceived = (id) => {
    const cancel = "Cancel Request Received";
    fetch(`http://localhost:5000/cancel-order/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cancel }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === true) {
          toast.success("Cancel Request Received");
          refetch();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="my-10">
      <h2 className="text-3xl text-yellow-700 text-center mb-4">All Orders</h2>

      <div className="overflow-x-auto overflow-y-auto w-full">
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
              <th>Cancel Request</th>
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
                        key={product?._id}
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
                  <div className="flex flex-col items-center gap-3">
                    <p className="text-md font-semibold ">{item?.status}</p>
                    {item.status === "pending" && (
                      <button
                        onClick={() => handleConfirmOrder(item?._id)}
                        className="p-3 
                      cursor-pointer hover:bg-slate-400 
                      flex items-center rounded-full text-sm
                       bg-blue-300  font-bold "
                      >
                        Confirm Order
                      </button>
                    )}
                    {item.status === "Confirmed Order" && (
                      <button
                        onClick={() => handleReadyToShipOrder(item?._id)}
                        className="p-3 
                      cursor-pointer hover:bg-slate-400 
                      flex items-center rounded-full text-sm
                       bg-blue-300  font-bold "
                      >
                        Ready To Ship
                      </button>
                    )}
                  </div>
                </td>
                <th className={`${item?.paid === false && "text-red-500"}`}>
                  {item?.paid === false ? "Not Paid" : "Already Paid"}
                </th>
                <th>{item?.condition}</th>
                <th>
                  <div className="flex flex-col items-center gap-3">
                    <p> {item?.cancel}</p>
                    <div>
                      {item?.cancel === "Cancel Request Sent" && (
                        <button
                          onClick={() => handleCancelRequestReceived(item?._id)}
                          className="p-3 
                      cursor-pointer hover:bg-slate-400 
                      flex items-center rounded-full text-sm
                       bg-blue-300  font-bold "
                        >
                          Receive Cancel Request
                        </button>
                      )}
                    </div>
                  </div>
                </th>
                <th></th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrder;
