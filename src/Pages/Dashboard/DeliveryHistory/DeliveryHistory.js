import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StateContext } from '../../../contexts/AuthProvider';

const DeliveryHistory = () => {
  const {user} = useContext(StateContext);
  const {data: deliveredOrder = []} = useQuery({
    queryKey: ["delivered"],
    queryFn: async () =>{
      const res = await fetch(`http://localhost:5000/delivered-orders?email=${user?.email}`)
      const data = res.json();
      return data;
    }
  })

  console.log(deliveredOrder);

  return (
    <div className="">
      <h2 className="text-center md:text-2xl font-bold mb-4 p-0 md:p-10">My Delivery Orders</h2>

      <div className="overflow-x-auto  w-full">
        {/* <div>{isLoading && <Loader />}</div> */}
        <table className="table w-full">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Pick Order</th>
              <th>Product Info</th>
              <th>Total Price</th>
              <th>Status</th>
              <th>Paid</th>
              <th>Payment Method</th>
              <th>Delivery</th>
            </tr>
          </thead>
          <tbody>
            {deliveredOrder?.map((item, index) => (
              <tr key={item?._id}>
                <td>{index + 1}</td>
                <td>{item?.name}</td>
                <td>{item?.number}</td>
                <td>{item?.address}</td>
                <td>
                  <div>
                    {item?.pick}
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

export default DeliveryHistory;