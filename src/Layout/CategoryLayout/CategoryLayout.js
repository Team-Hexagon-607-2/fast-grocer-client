<<<<<<< HEAD
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../components/Shared/Footer/Footer';
import { Navbar } from '../../components/Shared/Navbar';
import productCategory from '../../assets/images/categoryModalIcon/categoryModalIcon.png';
import { StateContext } from '../../contexts/AuthProvider';

const CategoryLayout = () => {
  const { AllProducts, isLoading: isProductLoading, categories, isCategoryLoading } = useContext(StateContext);
=======
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../components/Shared/Footer/Footer";
import { Navbar } from "../../components/Shared/Navbar";
import productCategory from "../../assets/images/categoryModalIcon/categoryModalIcon.png";

const CategoryLayout = () => {
  // all product categories name
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("https://fg-server.vercel.app/categories");
      const data = await res.json();
      return data;
    },
  });
>>>>>>> ade63ee9994da856dc706dace0ce84d6f8e49ce9

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

      <div className="drawer drawer-mobile h-auto">
        <input id="category" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content overflow-y-auto">
          <Outlet></Outlet>
        </div>

        <div className="drawer-side">
          <label htmlFor="category" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content lg:bg-slate-100">
<<<<<<< HEAD
            <h2 className='font-semibold text-lg pl-4'>Product Categories</h2>
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
=======
            <h2 className="font-semibold text-lg pl-4">Product Categories</h2>
            {categories.map((category) => (
              <li className="m-0 p-0" key={category._id}>
                <Link to={`/category/${category.categoryName}`}>
                  {category.categoryName}
                </Link>
              </li>
            ))}
>>>>>>> ade63ee9994da856dc706dace0ce84d6f8e49ce9
          </ul>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default CategoryLayout;
