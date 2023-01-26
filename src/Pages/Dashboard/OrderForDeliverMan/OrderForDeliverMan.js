import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import { StateContext } from "../../../contexts/AuthProvider";

const OrderForDeliverMan = () => {
  const { user } = useContext(StateContext);
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["delivery-order", user?.email],
    queryFn: () =>
      fetch(`https://fg-server.vercel.app/delivery-order/${user?.email}`).then(
        (res) => res.json()
      ),
  });

  const handlePickItem = (id) => {
    const picked = "Already Picked";

    fetch(`https://fg-server.vercel.app/delivery-order/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ picked }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === true) {
          toast.success("Picked Item Successfully");
          refetch();
        }
      })
      .catch((err) => console.log(err));
  };

  const handleDeliveryItem = (id) => {
    const status = "Product Delivery Completed";

    fetch(`https://fg-server.vercel.app/delivery-complete/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === true) {
          toast.success("Picked Item Successfully");
          refetch();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="">
      <h2 className="text-center md:text-2xl font-bold mb-4 p-0 md:p-10">My Delivery Orders</h2>

      <div className="overflow-x-auto  w-full">
        <div>{isLoading && <Loader />}</div>
        <table className="table w-full">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Phone</th>
              <th>address</th>

              <th>Picked This Order</th>
              <th>Product Info</th>
              <th>Total Price</th>
              <th>Status</th>
              <th>Paid</th>
              <th>Condition</th>
              <th>Delivery</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((item, index) => (
              !item.deliver && <tr key={item?._id}>
              <td>{index + 1}</td>
              <td>{item?.name}</td>
              <td>{item?.address}</td>
              <td>{item?.number}</td>
              <td>
                <div>
                  {item?.pick}
                  {!item.pick && (
                    <button
                      onClick={() => handlePickItem(item?._id)}
                      className="btn btn-info text-white"
                    >
                      Pick This Item
                    </button>
                  )}
                </div>
              </td>
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
                </div>
              </td>
              <th className={`${item?.paid === false && "text-red-500"}`}>
                {item?.paid === false ? "Not Paid" : "Already Paid"}
              </th>
              <th>{item?.condition}</th>
              <th>
                <div className="flex flex-col items-center gap-3">
                  {item?.deliver === true && (
                    <p className="text-md text-black font-semibold">
                      {" "}
                      Item Delivered
                    </p>
                  )}

                  {item?.pick === "Already Picked" && (
                    <button
                      onClick={() => handleDeliveryItem(item?._id)}
                      className="btn btn-info text-white"
                    >
                      Deliver This Item
                    </button>
                  )}
                </div>
              </th>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderForDeliverMan;
