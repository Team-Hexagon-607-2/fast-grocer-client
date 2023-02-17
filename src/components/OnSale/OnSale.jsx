import React from "react";
import UseTitle from "../../hooks/UseTitle";
import OfferProducts from "./OfferProducts";

const OnSale = () => {
  UseTitle('Onsale')
  return (
    <div className="sm:mt-[20px] sm:mb-[20px] mt-[10px] mb-[10px]">
      <OfferProducts />
    </div>
  );
};

export default OnSale;
