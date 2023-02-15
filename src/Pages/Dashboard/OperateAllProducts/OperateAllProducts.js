import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Loader from '../../../components/Loader/Loader';
import { StateContext } from '../../../contexts/AuthProvider';

const OperateAllProducts = () => {
  const { user, logOut } = useContext(StateContext);

  const { data: products, isLoading, refetch } = useQuery({
    queryKey: ['all-products', user?.email],
    queryFn: async () => {
      const res = await fetch(`https://fg-server.vercel.app/all-products?email=${user?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        }
      });
      const data = await res.json();
      if (data?.statusCode === 401 || data?.statusCode === 403) {
        return logOut();
      }
      return data;
    }
  });

  if(isLoading) {
    return <Loader></Loader>
  }

  const handleDelete = product => {
    const permission = window.confirm(`Are Your sure? you want to ${product.name} delete product`);
    if (permission) {
      fetch(`https://fg-server.vercel.app/product-delete/${product?._id}?email=${user?.email}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            refetch();
            toast.success(`${product.name} deleted successfully`)
          }
        })
    }
  };

  if (isLoading) {
    return <Loader />
  }

  refetch();

  return (
    <div className=''>
      <h2 className="text-center md:text-2xl font-bold mb-4 p-0 md:p-10">All Products</h2>
      <div className="overflow-x-auto w-full px-6">
        <table className="table table-compact w-full">

          <thead>
            <tr>
              <th>S/N</th>
              <th>Product Name</th>
              <th>Average Rating</th>
              <th>Available Stock</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              products?.map((product, i) =>
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={product?.imageUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product?.name.slice(0, 25)}</div>
                        <div className="text-[13px] font-semibold">{product?.category_name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div></div>
                  </td>
                  <td>
                    <div className="font-bold">{product.stock}</div>
                  </td>
                  <td>
                    <div className="font-bold">৳ {product.price}</div>
                  </td>

                  <td>
                    <Link to={`/dashboard/edit-product/${product?._id}`}><button className="btn bg-blue-500 hover:bg-blue-600 btn-xs border-none mr-2">Edit</button></Link>
                    <button onClick={() => handleDelete(product)} className="btn bg-red-600 hover:bg-red-700 btn-xs border-none">Delete</button>
                  </td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OperateAllProducts;