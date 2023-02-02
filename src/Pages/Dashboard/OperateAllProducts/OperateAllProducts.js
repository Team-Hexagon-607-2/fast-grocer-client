import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import Loader from '../../../components/Loader/Loader';

const OperateAllProducts = () => {
  const { data: products, isLoading, refetch } = useQuery({
    queryKey: ['name'],
    queryFn: async () => {
      const res = await fetch('https://fg-server.vercel.app/products');
      const data = await res.json();
      return data;
    }
  })


  const handleDelete = product => {
    console.log(product._id);
    fetch(`https://fg-server.vercel.app/products/${product._id}`, {
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

  if (isLoading) {
    return <Loader />
  }

  refetch();

  return (
    <div className=''>
      <h2 className="text-center md:text-2xl font-bold mb-4 p-0 md:p-10">All Products</h2>
      <div className="overflow-x-auto w-full">
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
                <tr>
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
                    <div className="font-bold">{product.price}</div>
                  </td>

                  <td>
                    <button className="btn bg-blue-400 hover:bg-blue-500 btn-xs border-none mr-2">Edit</button>
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