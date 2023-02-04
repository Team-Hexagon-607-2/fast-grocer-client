import React from "react";
import Chat from "../../Chat/Chat";
import FlashSaleHome from "../../FlashSale/FlashSaleHome";
import FAQ from "../FAQ/FAQ";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomePageProducts from "../HomePageProducts/HomePageProducts";
import NewsLetter from "../NewsLetter/NewsLetter";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <HomePageProducts></HomePageProducts>
      <div className="bg-[#FCFFF6]">
        <p className="text-2xl sm:text-4xl mb-10 sm:mt-10 font-bold text-center ">
          Flash Sale
        </p>
        <FlashSaleHome />
      </div>
      <FAQ></FAQ>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
