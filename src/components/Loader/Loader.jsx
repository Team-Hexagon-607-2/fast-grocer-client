import React from "react";

const Loader = () => {
  return (
    <div
      className="sm:w-[80px]  sm:h-[80px]
         w-[40px] h-[40px]  animate-spin bg-white
          text-white border-dashed border-4 sm:border-8 
          border-[#92B137] rounded-[50%]"
    ></div>
  );
};

export default Loader;
