import React, { useContext } from "react";
import { StateContext } from "react-scroll-to-bottom";

import FlashSaleHome from "../../FlashSale/FlashSaleHome";
import Loader from "../../Loader/Loader";
import FAQ from "../FAQ/FAQ";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeCategoryProducts from "../HomeCategoryProducts/HomeCategoryProducts";
import HomePageProducts from "../HomePageProducts/HomePageProducts";
import NewsLetter from "../NewsLetter/NewsLetter";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <HomeCategoryProducts></HomeCategoryProducts>
      <HomePageProducts></HomePageProducts>
      <div className="bg-[#FCFFF6]">
        <FlashSaleHome />
      </div>
      <FAQ></FAQ>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
