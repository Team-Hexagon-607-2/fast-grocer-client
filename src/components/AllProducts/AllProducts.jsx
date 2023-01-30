import { useEffect } from "react";
import { useState } from "react";
import SingleProduct from "../Home/HomePageProducts/SingleProduct/SingleProduct";
import sortImg from '../../assets/images/categoryModalIcon/sort.png'

const AllProducts = () => {
  const [AllProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalProducts, setTotalProducts] = useState(null);
  const [size, setSize] = useState(30);
  const [page, setPage] = useState(0);
  const [isAsc, setIsAsc] = useState('');

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

  if (isAsc === 'Low Price') {
    AllProducts.sort(function (a, b) { return a.price - b.price });
  }
  if (isAsc === 'High Price') {
    AllProducts.sort(function (a, b) { return b.price - a.price });
  }

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
      <h2 className="text-center font-semibold text-2xl my-5">All Products</h2>

      <div className='flex justify-end items-center mr-8'>
        <p className='text-sm mr-2'>SORT BY</p>
        <select onChange={(e) => setIsAsc(e.target.value)} className="select select-bordered select-sm w-56 focus:outline-none">
          <option disabled selected>-- Price --</option>
          <option>Low Price</option>
          <option>High Price</option>
        </select>
        <img src={sortImg} alt="" />
      </div>

      <div className="flex items-center justify-center">
        {isLoading && <Loader />}
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-[95%] mx-auto py-5">
        {AllProducts?.map((product) => (<SingleProduct key={product?.id} products={product} />))}
      </div>

      <div className="md:flex justify-between items-center mx-8 mb-10">
        <p>page {page + 1} of 8</p>

        <div className="flex items-center">
          <button className={page === 7 ? 'bg-slate-300  hover:cursor-not-allowed duration-300 px-2 py-1 text-sm rounded-md' : 'bg-[#ddecb0] hover:bg-[#b9cc81] duration-300 px-2 py-1 text-sm rounded-md'} onClick={pageIncrease}>Next</button>
          <div className="mx-2">
            {
              array.map(number => <button key={number.index} onClick={() => setPage(number)} className={(page === number) ? ' mx-1 w-8 h-8 rounded-full bg-[#ddecb0]' : 'bg-slate-200 mx-1 w-8 h-8 rounded-full'}>{number + 1}</button>)
            }
          </div>
          <button className={page === 0 ? 'bg-slate-300  hover:cursor-not-allowed duration-300 px-2 py-1 text-sm rounded-md' : 'bg-[#ddecb0] hover:bg-[#b9cc81] duration-300 px-2 py-1 text-sm rounded-md'} onClick={pageDecrease}>Previews</button>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
