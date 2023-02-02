import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../components/Loader/Loader";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const AllOrder = () => {
  const [selectedValue, setSelectedValue] = useState({});

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["order", "cancel-order"],
    queryFn: () =>
      fetch(`https://fg-server.vercel.app/order`).then((res) => res.json()),
  });

  const { data: AllUsers, isLoading: DeliveryLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`https://fg-server.vercel.app/users`).then((res) => res.json()),
  });

  const deliveryMan = AllUsers?.filter(
    (person) => person?.role === "delivery man"
  );
  function handleChange(event) {
    const selectedOption = deliveryMan.find(
      (option) => option.email === event.target.value
    );
    setSelectedValue(selectedOption);
  }
  const handleConfirmOrder = (id) => {
    const status = "Confirmed Order";
    fetch(`https://fg-server.vercel.app/order/${id}`, {
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
    const status = "Ready To Ship";
    fetch(`https://fg-server.vercel.app/order/${id}`, {
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
    fetch(`https://fg-server.vercel.app/cancel-order/${id}`, {
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

  const handleDeliveryManAssignOrder = (e, id) => {
    e.preventDefault();
    const data = {
      deliveryManEmail: selectedValue.email,
      deliveryManName: selectedValue.name,
    };

    fetch(`https://fg-server.vercel.app/update-delivery-order/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === true) {
          toast.success("Assign Delivery man updated");
          refetch();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="">
      <h2 className="text-center md:text-2xl font-bold mb-4 p-0 md:p-10">
        All Orders
      </h2>

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
              <th>Assign Delivery Man</th>
              <th>Cancel Request</th>
              <th>Return Request</th>
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
                            className="object-fit w-full h-full" alt=""
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
                    {item?.status === "pending" && (
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
                    {item?.status === "Confirmed Order" && (
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
                  <p>{item.deliveryManName}</p>
                  <p>{item?.pick}</p>
                  {!item.deliveryManEmail && (
                    <form
                      onSubmit={(e) =>
                        handleDeliveryManAssignOrder(e, item?._id)
                      }
                      className="flex flex-col gap-2"
                    >
                      <select
                        onChange={handleChange}
                        value={selectedValue.email}
                        name="deliveryValue"
                        className="select select-bordered w-full max-w-xs"
                      >
                        <option disabled selected>
                          Select Delivery Man
                        </option>
                        {deliveryMan?.map((man, i) => (
                          <option key={i} value={man?.email}>
                            {man?.name}
                          </option>
                        ))}
                      </select>

                      <button
                        type="submit"
                        className="py-3 px-3 text-center justify-center
                   cursor-pointer hover:bg-slate-400 
                   flex items-center rounded-full text-sm
                    bg-blue-300  font-bold "
                      >
                        Assign
                      </button>
                    </form>
                  )}
                </th>
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
                <td>
                  {item?.returnRequest && "Return Requested"}
                  <p className="text-sm">{item?.returnReason && item?.returnReason}</p>
                  {item?.returnRequest && <><button className="text-sm px-3 py-1 bg-blue-300 hover:bg-blue-400 rounded-full duration-300">Accept</button> <button className="text-sm px-3 py-1 bg-red-300 hover:bg-red-400 rounded-full duration-300">Reject</button></>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrder;
