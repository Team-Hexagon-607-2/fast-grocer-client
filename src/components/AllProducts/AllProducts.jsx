import { useEffect } from "react";
import { useState } from "react";
import SingleProduct from "../Home/HomePageProducts/SingleProduct/SingleProduct";

const AllProducts = () => {
  const [AllProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [totalProducts, setTotalProducts] = useState(null);
  const [size, setSize] = useState(30);
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

  function pageIncrease() {
    if (page <= 6) {
      setPage(page + 1)
    }
  }

  function pageDecrease() {
    if (page >= 1) {
      setPage(page - 1)
    }
  }

  return (
    <>
      <div className="flex items-center justify-center  sm:mt-[50px]">
        {isLoading && <Loader />}
      </div>
      <h2 className="text-center font-semibold text-2xl">All Products</h2>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto py-10">
        {AllProducts?.map((product) => ( <SingleProduct key={product?.id} products={product} /> ))}
      </div>

      <div className="flex justify-end mr-10 mb-10">
        <button className={page === 7 ? 'bg-slate-300  hover:cursor-not-allowed duration-300 px-2 py-1 rounded-md' : 'bg-[#ddecb0] hover:bg-[#b9cc81] duration-300 px-2 py-1 rounded-md'} onClick={pageIncrease}>Next</button>
        <div className="mx-2">
          {
            array.map(number => <button key={number.index} onClick={() => setPage(number)} className={(page === number) ? ' mx-1 w-8 h-8 rounded-full bg-[#ddecb0]' : 'bg-slate-200 mx-1 w-8 h-8 rounded-full'}>{number + 1}</button>)
          }
        </div>
        <button className={page === 0 ? 'bg-slate-300  hover:cursor-not-allowed duration-300 px-2 py-1 rounded-md' : 'bg-[#ddecb0] hover:bg-[#b9cc81] duration-300 px-2 py-1 rounded-md'} onClick={pageDecrease}>Previews</button>

        {/* <select onChange={(e) => setSize(e.target.value)} className='border px-2 py-1 ml-2 rounded-md'>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>
        </select> */}
      </div>
    </>
  );
};

export default AllProducts;
