import React from 'react';
import { useLoaderData } from 'react-router';
import SingleProduct from '../Home/HomePageProducts/SingleProduct/SingleProduct';

const Products = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto py-10'>
      {
        products?.map(product => <SingleProduct
        key={product._id}
        products={product}
        ></SingleProduct>)
      }
    </div>
  );
};

export default Products;