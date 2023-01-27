import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../components/Shared/Footer/Footer';
import productCategory from '../../assets/images/categoryModalIcon/categoryModalIcon.png';
import { StateContext } from '../../contexts/AuthProvider';

const CategoryLayout = () => {
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

        <div className="drawer-side sticky top-0">
          <label htmlFor="category" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content lg:bg-slate-50">
            <div className="divider">
              <h2 className='font-semibold pl-4 uppercase'>Shop By Categories</h2>
            </div>
            {
              (!isProductLoading && !isCategoryLoading) &&
              categories.map(category =>
                <li className="m-0 p-0"
                  key={category._id}>
                  <Link to={`/category/${category.categoryName}`} className='flex justify-between'>
                    <span>{category.categoryName}</span>
                    <span className='bg-[#ddecb0] text-black w-7 h-7 rounded-full flex justify-center items-center text-sm'>({(AllProducts.filter(product => product.category_name === category.categoryName)).length})</span>
                  </Link>
                </li>
              )
            }
          </ul>
        </div>
      </div>

    </div>
  );
};

export default CategoryLayout;
