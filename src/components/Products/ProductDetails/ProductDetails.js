import React, { useContext } from "react";
import { AiFillHeart } from "react-icons/ai";
import { TbShoppingCartPlus } from "react-icons/tb";
import { useLoaderData } from "react-router";
import { StateContext } from "../../../contexts/AuthProvider";

const ProductDetails = () => {
  const product = useLoaderData();
  const { handleAddToCart } = useContext(StateContext);
  const {
    name,
    description,
    imageUrl,
    original_price,
    price,
    qunatity,
    stock,
    bundle,
    save,
  } = product;
  return (
    <div className="w-10/12 mx-auto my-20">
      <div className="flex items-center mb-10">
        <div className="max-h-[350px] w-full">
          <img
            src={imageUrl}
            alt="product img"
            className="h-[350px] mx-auto rounded-t-md"
          />
        </div>
        <div className="w-full">
          <p className="text-xl font-semibold">{name}</p>
          <p>Quantity: {qunatity}</p>
          <p>Bundle: {bundle}</p>
          <p>Stock: {stock}</p>
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
              onClick={(e) => handleAddToCart(e, product)}
              className="px-3 mr-2
             bg-[#9acd5e] 
             hover:bg-[#80b248] duration-300 py-1
              rounded-md flex items-center
               justify-center"
            >
              <TbShoppingCartPlus className=" mr-2" />
              Add to Cart
            </button>
            <button className="bg-#8ba73b px-3 rounded-md bg-[#ff00001c] hover:bg-[#ff00002e] duration-300 flex items-center justify-center">
              <AiFillHeart className="text-red-600 mr-2" />
              Wishlist
            </button>
          </div>
        </div>
      </div>
      {description.length > 0 && (
        <div>
          <p className="text-[#7d9734] border-b-2 border-[#7d9734] inline-block text-xl font-semibold mb-3 pb-2">
            Description
          </p>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
