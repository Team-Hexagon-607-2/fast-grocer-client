import { logDOM } from "@testing-library/react";
import React from "react";
import { useLocation } from "react-router-dom";

const WriteReview = () => {
  const { data } = useLocation();
  console.log(data);
  return <div>WriteReview</div>;
};

export default WriteReview;
