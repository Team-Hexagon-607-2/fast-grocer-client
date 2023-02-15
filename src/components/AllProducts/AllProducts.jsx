import { useContext, useState } from "react";
import SingleProduct from "../Home/HomePageProducts/SingleProduct/SingleProduct";
import sortImg from '../../assets/images/categoryModalIcon/sort.png'
import Loader from "../Loader/Loader";
import { StateContext } from "../../contexts/AuthProvider";

const AllProducts = () => {
  const {AllProducts, isLoading} = useContext(StateContext);
  const [isAsc, setIsAsc] = useState('');
  const [limitProduct, setLimitProduct] = useState(30);

  if (isLoading) {
    return <Loader />
  }

  const limitProducts = AllProducts.slice(0, limitProduct);

  const handleLoadMoreProducts = () => {
    setLimitProduct(limitProduct + 30);
  };

  if (isAsc === 'Low Price') {
    limitProducts.sort(function (a, b) { return a.price - b.price });
  }
  if (isAsc === 'High Price') {
    limitProducts.sort(function (a, b) { return b.price - a.price });
  }

  return (
    <>
      <div className="mt-5">
        <div className='flex justify-end items-center mr-8'>
          <p className='text-sm mr-2'>SORT BY</p>
          <select onChange={(e) => setIsAsc(e.target.value)} className="select select-bordered select-sm w-56 focus:outline-none">
            <option disabled selected>-- Price --</option>
            <option>Low Price</option>
            <option>High Price</option>
          </select>
          <img src={sortImg} alt="" />
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-[95%] mx-auto py-5">
          {
            limitProducts.map(product => <SingleProduct key={product?._id} products={product}></SingleProduct>)
          }
        </div>
      </div>

      {
        !(limitProducts.length === AllProducts.length) &&
        <button onClick={handleLoadMoreProducts} className="bg-[#84b840] hover:bg-[#79a83b] text-white duration-500 font-semibold px-2 py-2 rounded-md w-[250px] block mx-auto my-5">Load More</button>
      }
    </>
  );
};

export default AllProducts;