import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StateContext } from '../../../contexts/AuthProvider';
import SingleProduct from '../../Home/HomePageProducts/SingleProduct/SingleProduct';
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import sortImg from '../../../assets/images/categoryModalIcon/sort.png';

const CategoryPageProducts = () => {
  const { AllProducts, isLoading } = useContext(StateContext);
  const { name } = useParams();
  const [isAsc, setIsAsc] = useState('');
  const [productsView, setProductsView] = useState(true)

  if (isLoading) {
    return <div className='h-[250px flex justify-center items-center]'>
      <div className="sm:w-[80px]  sm:h-[80px] w-[40px] h-[40px]  animate-spin bg-white text-white border-dashed border-4 sm:border-8 border-[#92B137] rounded-[50%]" ></div>
    </div>
  }

  const categoryProducts = AllProducts?.filter(category => category.category_name === name);

  if (isAsc === 'Low Price') {
    categoryProducts.sort(function (a, b) { return a.price - b.price });
  }
  if (isAsc === 'High Price') {
    categoryProducts.sort(function (a, b) { return b.price - a.price });
  }

  // console.log(productsView)

  return (
    <div>
      <div className='md:flex justify-between items-center mb-3 md:mt-3'>
        <h2 className='font-semibold text-2xl pl-5 mt-3 mb-2 text-[#70a138]'>{name}</h2>

        <div className='flex items-center gap-3 px-5'>
          <div className='flex items-center'>
            {/* <p className='text-sm mr-3'>SORT BY</p> */}
            <select onChange={(e) => setIsAsc(e.target.value)} className="select select-bordered select-sm w-56 focus:outline-none">
              <option disabled selected>-- Price --</option>
              <option>Low Price</option>
              <option>High Price</option>
            </select>
            <img src={sortImg} alt="" />
          </div>

          <BsFillGrid3X3GapFill onClick={() => setProductsView(true)} className='w-5 h-5 font-semibold cursor-pointer inline-block' />
          <FaListUl onClick={() => setProductsView(false)} className='w-5 h-5 font-semibold cursor-pointer inline-block' />
        </div>
      </div>

      {
        productsView ?
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 px-5'>
            { categoryProducts.map(categoryProduct => <SingleProduct key={categoryProduct._id} products={categoryProduct}></SingleProduct>)}
          </div>
          :
          <div className='mb-10 px-5'>
            {categoryProducts.map(categoryProduct => <SingleProduct key={categoryProduct._id} products={categoryProduct}></SingleProduct>)}
          </div>
      }
    </div>
  );
};

export default CategoryPageProducts;