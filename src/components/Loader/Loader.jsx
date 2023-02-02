import React from "react";

const Loader = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div
        className="sm:w-[45px] sm:h-[45px]
         w-[45px] h-[45px] animate-spin bg-white
          text-white border-dashed border-[5px] sm:border-[5px] 
          border-[#92B137] rounded-[50%]"
      ></div>
    </div>
  );
};

export default Loader;
