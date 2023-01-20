import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StateContext } from '../../../contexts/AuthProvider';
import SingleProduct from '../../Home/HomePageProducts/SingleProduct/SingleProduct';

const CategoryPageProducts = () => {
  const { AllProducts , isLoading} = useContext(StateContext);
  const { name } = useParams();

  if (isLoading) {
    return <div className='h-[250px flex justify-center items-center]'>
      <div className="sm:w-[80px]  sm:h-[80px] w-[40px] h-[40px]  animate-spin bg-white text-white border-dashed border-4 sm:border-8 border-[#92B137] rounded-[50%]" ></div> 
    </div>
  }

  const categoryProducts = AllProducts.filter(category => category.category_name === name);

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 px-5'>
      {
        categoryProducts.map(categoryProduct => <SingleProduct key={categoryProduct._id} products={categoryProduct}></SingleProduct>)
      }
    </div>
  );
};

export default CategoryPageProducts;