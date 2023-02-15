import React, { useState } from "react";
import { TbShoppingCartPlus } from "react-icons/tb";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StateContext } from "../../../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const SingleProduct = ({ products }) => {
  const { user, isAdmin, isDeliveryman, isBuyer, handleAddToCart, wishlistRefetch } = useContext(StateContext);
  const { _id, name, imageUrl, price, bundle, original_price, save } = products;
  const [wishlistLoading, setWishListLoading] = useState(false);

  const handleWishlist = (products) => {
    if (!user) { return alert('Please login for wishlist') }

    if (isBuyer) {
      setWishListLoading(true);
      const data = {
        productId: products?._id,
        productName: products?.name,
        productPrice: products?.price,
        productOriginalPrice: products?.original_price,
        productImage: products?.imageUrl,
        categoryName: products?.category_name,
        subCategoryName: products?.sub_category,
        userName: user?.displayName,
        email: user?.email,
        bundle: products?.bundle,
        createdAt: new Date(),
      };

      fetch("https://fg-server.vercel.app/wishlist", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then((data) => {
          if (data.status === true) {
            setWishListLoading(false);
            toast.success(`${data.message}`);
            wishlistRefetch();
          }
        })
        .catch((error) => {
          setWishListLoading(false);
          toast.error(error.message);
        });
    }
  };

  return (
    <div className='bg-white hover:shadow-xl rounded-md border border-slate-200/60 duration-300'>
      <div>
        <div className='h-225px'>
          <Link to={`/products/${_id}`}>
            <img src={imageUrl} alt="product img" className='mx-auto h-[225px] rounded-t-md' />
          </Link>
        </div>
        <div className="p-4">
          <span className="flex items-center">
            <AiFillStar className="text-yellow-400" />
            <AiFillStar className="text-yellow-400" />
            <AiFillStar className="text-yellow-400" />
            <AiFillStar className="text-yellow-400" />
            <AiFillStar className="text-yellow-400" />
          </span>
          <div className="md:h-[60px]">
            <Link to={`/products/${_id}`}
              className={`text-[16px] font-semibold text-zinc-700 hover:underline cursor-pointer`}
            >
              {name.length > 45 ? name.slice(0, 45) + "..." : name}
            </Link>
          </div>
          <p className="text-zinc-700 font-semibold">
            <small>{bundle ? bundle : "As Picture"}</small>
          </p>
          <div className="flex items-end">
            <p className="text-[#84b840] text-2xl font-bold">৳{price}</p>
            <p className="text-red-400 font-bold mx-1">
              <del>{original_price}</del>
            </p>
            {save.length > 0 && (
              <p>
                <small>(Save: {save})</small>
              </p>
            )}
          </div>
          <div className="flex mt-5">
            <button
              onClick={(e) => handleAddToCart(e, products)}
              className={isAdmin || isDeliveryman ? 
                "disabled cursor-not-allowed w-full mr-2 bg-slate-200 text-sm duration-300 py-[6px] rounded-md flex items-center justify-center":
                "w-full mr-2 bg-[#84b840] hover:bg-[#6a9333] text-white text-sm duration-300 py-[6px] rounded-md flex items-center justify-center"
              }>
              <TbShoppingCartPlus className=" mr-2" />
              Add to Cart
            </button>

            {
              wishlistLoading ? <button className="btn bg-[#ff00001c] text-black btn-sm loading btn-square w-[90px]"></button>
                :
                <button
                  onClick={() => handleWishlist(products)}
                  className={isAdmin || isDeliveryman ?
                    "disabled cursor-not-allowed text-sm px-2 rounded-md bg-slate-200 flex items-center justify-center" :
                    "text-sm px-2 rounded-md bg-[#ff00001c] hover:bg-[#ff00002e] duration-300 flex items-center justify-center"
                  }>
                  <AiFillHeart className="text-red-600 mr-2" />
                  Wishlist
                </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
