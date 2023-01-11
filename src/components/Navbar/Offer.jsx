import React from "react";
import { CiLocationOn, CiHeadphones } from "react-icons/ci";
const Offer = () => {
  const styles = {
    wrapper:
      "flex p-[10px] flex-row justify-between font-semibold text-[14px] text-black items-center ",
    flexRow: "flex items-center justify-center flex-row",
  };
  return (
    <div className={styles.wrapper}>
      <div>
        <p>
          New Offers This Weekend only to{" "}
          <span className="text-[#8BA73B]">Get 50%</span> Flate
        </p>
      </div>
      <div className="flex flex-row border-l-[1px] border-slate-300">
        <div>
          <p className={`${styles.flexRow} ml-2`}>
            {" "}
            <CiLocationOn />
            Store location
          </p>
        </div>
        <div className="border-l-[1px] border-slate-300 ml-2 mr-2">
          <p className={`${styles.flexRow} ml-2`}>
            <CiHeadphones />
            (+048) - 1800 33 689
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
