import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomePageProducts from "../HomePageProducts/HomePageProducts";
import NewsLetter from "../NewsLetter/NewsLetter";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <HomePageProducts></HomePageProducts>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
