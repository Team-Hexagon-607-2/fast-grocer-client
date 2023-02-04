import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../../../contexts/AuthProvider";
import SingleProduct from "./SingleProduct/SingleProduct";

const HomePageProducts = () => {
  const [products, setProducts] = useState(null);
  const [getAllProducts, setGetAllProducts] = useState(null);
  const { categories, AllProducts } = useContext(StateContext);
  const [selectedCategory, setSelectedCategory] = useState("Winter Collection");

  useEffect(() => {
    const categoryProducts = AllProducts?.filter(
      (category) => category.category_name === "Winter Collection"
    );
    setGetAllProducts(categoryProducts);
  }, [AllProducts]);

  const handleLoadProducts = (categoryName) => {
    setSelectedCategory(categoryName);
    const categoryProducts = AllProducts?.filter(
      (category) => category.category_name === categoryName
    );
    setGetAllProducts(null);
    setProducts(categoryProducts);
  };

  return (
    <div className="bg-[#fbfff4db] py-20">
      {/* Added Margin my-28 -by Taqi */}
      <h2 className="text-xl md:text-3xl text-center font-bold py-5">
        Featured Products
      </h2>
      <div className="border-b-[1px] border-gray-200 my-5 md:my-3">
        <ul className="w-8/12 md:w-8/12 mx-auto hidden justify-between h-40px md:flex">
          {categories.slice(0, 5)?.map((category) => (
            <li key={category?._id}>
              <button
                onClick={() => handleLoadProducts(category?.categoryName)}
                className={`mx-5 border-b-2 ${
                  category?.categoryName === selectedCategory
                    ? "text-[#80B248] font-semibold border-[#80B248]"
                    : "text-slate-600"
                }  `}
              >
                {category?.categoryName}
              </button>
            </li>
          ))}
        </ul>
        <ul className="w-11/12 md:w-8/12 mx-auto flex justify-between h-40px md:hidden">
          {categories.slice(0, 3)?.map((category) => (
            <li key={category?._id}>
              <button
                onClick={() => handleLoadProducts(category?.categoryName)}
                className="mx-5 border-b-2 "
              >
                {category?.categoryName}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto py-10">
        {products?.length &&
           products
            ?.slice(1, 5)
            ?.map((product) => (
              <SingleProduct
                key={product?._id}
                products={product}
              ></SingleProduct>
            ))}
        {getAllProducts?.length > 0 &&
          getAllProducts
            ?.slice(1, 5)
            ?.map((product) => (
              <SingleProduct
                key={product?._id}
                products={product}
              ></SingleProduct>
            ))}
      </div>
    </div>
  );
};

export default HomePageProducts;
