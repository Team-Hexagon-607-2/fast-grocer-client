import { useEffect } from "react";
import { useState } from "react";
import SingleProduct from "../Home/HomePageProducts/SingleProduct/SingleProduct";

const AllProducts = () => {
  const [AllProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [totalProducts, setTotalProducts] = useState(null);
  const [size, setSize] = useState(20);
  const [page, setPage] = useState(0);

  const pages = Math.ceil(totalProducts / parseInt(size));
  const array = [...Array(pages).keys()];

  useEffect(() => {
    fetch(`https://fg-server.vercel.app/AllProducts?page=${page}&size=${size}`)
      .then(res => res.json())
      .then(data => {
        const { products, count } = data;
        setTotalProducts(count);
        setAllProducts(products);
        setIsLoading(false)
      })
  }, [page, size]);

  const Loader = () => {
    return (
      <div className="sm:w-[80px]  sm:h-[80px] w-[40px] h-[40px]  animate-spin bg-white text-white border-dashed border-4 sm:border-8 border-[#92B137] rounded-[50%]" ></div>
    );
  };

  return (
    <>
      <div className="flex items-center justify-center  sm:mt-[50px]">
        {isLoading && <Loader />}
      </div>
      <h2 className="text-center font-semibold text-2xl">All Products</h2>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto py-10">
        {AllProducts?.map((product) => (
          <SingleProduct key={product?.id} products={product} />
        ))}
      </div>

      {/* pagination */}
      {
        array.map(number => <button key={number.index} onClick={() => setPage(number)} className='bg-slate-200 mx-1 w-10 h-10 rounded-full'>{number + 1}</button>)
      }

      <select onChange={(e) => setSize(e.target.value)} className='border px-2 py-1'>
        <option value="20">20</option>
        <option value="40">40</option>
        <option value="60">60</option>
        <option value="80">80</option>
      </select>
    </>
  );
};

export default AllProducts;
