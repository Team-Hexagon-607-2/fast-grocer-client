import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const EditProduct = () => {

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
                if(data.deletedCount > 0){
                    refetch();
                    toast.success(`${product.name} deleted successfully`)
                }
            })
        }


    return (
        <div className=''>
            <h2 className="text-center md:text-2xl font-bold mb-4 p-0 md:p-10">Edit Products</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Available Stock</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                           products?.map((product, i) =>
                                <tr>
                                    <td>
                                        <div className="font-bold">{i + 1}</div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{product.name.slice(0,18)}..</div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{product.category_name.slice(0,9)}</div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{product.stock}</div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{product.price}</div>
                                    </td>
                                    
                                    <th>
                                        <button onClick={()=> handleDelete(product)}  className="btn bg-red-600 btn-xs">Delete</button>
                                    </th>
                                </tr>)
                        }
                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default EditProduct;