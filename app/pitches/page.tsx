import React from "react";
import { TbMathGreater } from "react-icons/tb";
import Filters from "@/components/Filters/Filters";
import FilterResult from "@/components/home/FilterResult";
const Pitches = () => {
  return (
    <div className="px-10  mt-5 w-full font-light space-y-5">
      <div className="w-full flex space-x-2 items-center tracking-wide px-2">
        <span className="tracking-wider font-medium">Smart Search</span>
        <TbMathGreater />
        <p>2,12,343 Investors found for</p>
        <p>Bangalore, Pre-Seed, SAAS,</p>
      </div>
      {/* <-------------------------------------Filter Section----------------------------------------> */}
      <div className="w-full flex space-x-5">
        <div className="basis-[35%] max-h-[calc(100vh-20vh)] shadow-md overflow-y-auto space-y-2 py-2">
          <Filters />
        </div>
        <div className="basis-full px-3 py-2 space-y-5 overflow-y-auto scroll-smooth max-h-[calc(100vh-20vh)]">
          <FilterResult />
        </div>
      </div>
    </div>
  );
};

export default Pitches;
