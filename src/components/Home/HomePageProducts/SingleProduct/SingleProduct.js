import React, { useState } from "react";
import { TbShoppingCartPlus } from "react-icons/tb";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StateContext } from "../../../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const SingleProduct = ({ products }) => {
  // commented out console.log -by Taqi //
  // console.log(products);
  // const { product_name, product_photo, product_mesurement, product_price } = products;
  const [loading, setLoading] = useState();
  const { user, handleAddToCart } = useContext(StateContext);
  const { _id, name, imageUrl, price, bundle, original_price, save } = products;

  const handleWishlist = (products) => {
    if (!user) {
      toast.error("Please Log In");
    } else {
      const data = {
        productId: products?._id,
        productName: products?.name,
        productPrice: products?.price,
        productOriginalPrice: products?.original_price,
        productImage: products?.imageUrl,
        categoryName: products?.category_name,
        subCategoryName: products?.sub_category,
        userName: user?.displayName,
        userEmail: user?.email,
        createdAt: new Date(),
      };

      setLoading(true);
      fetch("https://fg-server.vercel.app/wishlist", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === true) {
            setLoading(false);
            toast.success(`${data.message}`);
          } else {
            toast.error("Already Added on Wishlist Page");
          }
        })
        .catch((error) => console.log(error));
      setLoading(false);
    }
  };
  return (
    <div className="bg-white shadow-lg hover:shadow-2xl rounded-md border border-slate-200/60 duration-300">
      <div className="h-225px">
        <img
          src={imageUrl}
          alt="product img"
          className="mx-auto h-[225px] rounded-t-md"
        />
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
          <Link to={`/products/${_id}`}>
            <p
              className={`text-[17px] font-semibold text-zinc-700 hover:underline cursor-pointer`}
            >
              {name.length > 50 ? name.slice(0, 50) + "..." : name}
            </p>
          </Link>
        </div>
        <p className="text-zinc-700 font-semibold">
          <small>{bundle ? bundle : "As Product"}</small>
        </p>
        <div className="flex items-end">
          <p className="text-[#8ba73b] text-2xl font-bold">৳{price}</p>
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
            className="w-full mr-2 bg-[#9acd5e] hover:bg-[#80b248] duration-300 py-1 rounded-md flex items-center justify-center"
          >
            <TbShoppingCartPlus className=" mr-2" />
            Add to Cart
          </button>
          <button
            onClick={() => handleWishlist(products)}
            className="bg-#8ba73b px-3 rounded-md bg-[#ff00001c] hover:bg-[#ff00002e] duration-300 flex items-center justify-center"
          >
            <AiFillHeart className="text-red-600 mr-2" />
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
