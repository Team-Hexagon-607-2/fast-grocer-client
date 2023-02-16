import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import productCategory from '../../assets/images/categoryModalIcon/categoryModalIcon.png';
import { StateContext } from '../../contexts/AuthProvider';
import UseTitle from '../../hooks/UseTitle';

const CategoryLayout = () => {
  UseTitle('Product Category')
  const { AllProducts, isLoading: isProductLoading, categories, isCategoryLoading } = useContext(StateContext);

  return (
    <div>
      <div className="text-right">
        <label
          htmlFor="category"
          className="drawer-button lg:hidden hover:bg-green-100 rounded-md inline-block tooltip tooltip-left"
          data-tip="Product Categories"
        >
          <img src={productCategory} className="w-10 cursor-pointer" alt="" />
        </label>
      </div>

      <div className="drawer drawer-mobile h-auto overflow-visible">
        <input id="category" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content overflow-y-auto">
          <Outlet></Outlet>
        </div>

        <div className="drawer-side sticky top-[80px]">
          <label htmlFor="category" className="drawer-overlay"></label>
          <ul className="menu w-80 p-2 bg-base-100 text-base-content lg:bg-slate-50">
            <div className="divider">
              <h2 className='font-semibold pl-4 uppercase'>Shop By Categories</h2>
            </div>
            {
              (!isProductLoading && !isCategoryLoading) &&
              categories.map(category =>
                <NavLink key={category._id} className={({ isActive }) => isActive ? 'flex justify-between rounded-md px-2 mb-2 bg-[#c9f391]' : 'flex justify-between rounded-md px-2 mb-2 hover:bg-[#c9f391]'} to={`/category/${category.categoryName}`}>
                  <span>{category.categoryName}</span>
                  <span className=' text-black w-7 h-7 rounded-full flex justify-center items-center text-sm'>({(AllProducts.filter(product => product.category_name === category.categoryName)).length})</span>
                </NavLink>
              )
            }
          </ul>
        </div>
      </div>

    </div>
  );
};

export default CategoryLayout;
