import React from "react";
import FAQ from "../FAQ/FAQ";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomePageProducts from "../HomePageProducts/HomePageProducts";
import NewsLetter from "../NewsLetter/NewsLetter";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <HomePageProducts></HomePageProducts>
      <FAQ></FAQ>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
