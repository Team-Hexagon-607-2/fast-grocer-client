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

  // handle return request accept
  const handleReturnAccept = (id) =>{
    console.log(id);
    fetch(`http://localhost:5000/return-request-accept?id=${id}`, {
      method: "PUT"
    })
    .then(res => res.json())
    .then(data => {
      if(data?.modifiedCount > 0){
        toast.success("Request Accepted");
      }
    })
  }
  
  // handler for return request reject
  const handleReturnReject = (id) =>{
    console.log(id);
    fetch(`http://localhost:5000/return-request-reject?id=${id}`, {
      method: "PUT"
    })
    .then(res => res.json())
    .then(data => {
      if(data?.modifiedCount > 0){
        toast.error("Request Rejected");
      }
    })
  }

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
              <th>Payment Method</th>
              <th>Assign Delivery Man</th>
              <th>Cancel Request</th>
              <th>Return Request</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((item, index) => (
              <tr key={item?._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center flex-col">
                    {item?.order_products?.map((product) => (
                      <Link
                        key={product?._id}
                        to={`/products/${product?._id}`}
                        className="flex w-[300px] hover:bg-blue-200 rounded-md mb-2"
                      >
                        <div className="mr-2">
                          <img
                            src={product?.imageUrl}
                            className="object-fit w-16 h-16 rounded-md" alt=""
                          />
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
                  <p className="font-semibold">
                    ৳{item?.total_price}
                  </p>
                </td>
                <td>
                  <div className="flex flex-col items-center gap-3">
                    <p className="text-sm font-semibold ">{item?.status}</p>
                    {item?.status === "pending" && (
                      <button
                        onClick={() => handleConfirmOrder(item?._id)}
                        className="px-3 py-1 cursor-pointer hover:bg-blue-400 rounded-full text-sm bg-blue-300"
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
                <td className={`${item?.paid === false && ""}`}>
                  {item?.paid === false ? <p className="bg-red-300 rounded-full text-center text-sm">Not Paid</p> : <p className="bg-green-300 rounded-full text-center text-sm px-2">Already Paid</p>}
                </td>
                <td className="text-sm text-center font-semibold">{item?.condition}</td>

                <td>
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
                        // value={selectedValue.email}
                        // name="deliveryValue"
                        className="select select-bordered select-sm"
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
                        className="py-1 px-3 text-center
                   cursor-pointer hover:bg-blue-400 rounded-full text-sm
                    bg-blue-300 font-semibold"
                      >
                        Assign
                      </button>
                    </form>
                  )}
                </td>
                <td>
                  <div className="flex flex-col items-center gap-3">
                    <p className="text-sm"> {item?.cancel}</p>
                    <div>
                      {item?.cancel === "Cancel Request Sent" && (
                        <button
                          onClick={() => handleCancelRequestReceived(item?._id)}
                          className="px-3 py-1 cursor-pointer bg-red-300 hover:bg-red-400 rounded-full text-sm">
                          Receive Request
                        </button>
                      )}
                    </div>
                  </div>
                </td>
                <td>
                  {item?.returnRequest && "Return Requested"}
                  {item?.returnRequest && <p className="text-sm">{item?.returnReason && item?.returnReason}</p>}
                  {item?.returnRequest && <><button onClick={() => handleReturnAccept(item?._id)} className="text-sm px-3 py-1 bg-blue-300 hover:bg-blue-400 rounded-full duration-300">Accept</button> <button onClick={() => handleReturnReject(item?._id)} className="text-sm px-3 py-1 bg-red-300 hover:bg-red-400 rounded-full duration-300">Reject</button></>}
                  {item?.acceptReturnRequest && <p className="text-sm bg-green-300 rounded-full px-2 font-semibold">Accepted Request</p>}
                  {item?.acceptReturnRequest === false && <p className="text-sm bg-red-300 rounded-full px-2 font-semibold">Rejected Request</p>}
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
