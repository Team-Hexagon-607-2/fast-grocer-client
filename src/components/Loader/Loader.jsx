import React from "react";

const Loader = () => {
  return (
    <div className="h-[500px]">
      <div
        className="sm:w-[40px] sm:h-[40px]
         w-[40px] h-[40px] animate-spin bg-white
          text-white border-dashed border-4 sm:border-4 
          border-[#92B137] rounded-[50%] flex justify-center items-center"
      ></div>
    </div>
  );
};

export default Loader;
