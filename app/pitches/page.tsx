import React from "react";
import { TbMathGreater } from "react-icons/tb";
import Filters from "@/components/Filters/Filters";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import PitchCard from "@/components/pitch/PitchCard";

const Pitches = () => {
  return (
    <div className="px-10 py-5 w-full font-light space-y-5 bg-slate-50">
      <div className="w-full flex space-x-2 items-center tracking-wide px-2">
        <span className="tracking-wider font-medium">Smart Search</span>
        <TbMathGreater />
        <p>2,12,343 Investors found for</p>
        <p>Bangalore, Pre-Seed, SAAS,</p>
      </div>
      {/* <-------------------------------------Filter Section----------------------------------------> */}
      <div className="w-full flex space-x-5">
        <div className="basis-[35%] max-h-[calc(100vh-20vh)] bg-white shadow-md overflow-y-auto space-y-2 py-2">
          <Filters />
        </div>
        {/* <-------------------------------- Filter Resulsts -------------------------------> */}
        <div className="basis-full px-3 py-2 space-y-5 overflow-y-auto scroll-smooth max-h-[calc(100vh-20vh)]">
          <div className="text-xs flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <p>Active in </p>{" "}
              <span className="border-gray-300 border-[1px] px-2 py-1">
                {" "}
                6 months
              </span>
            </div>
            <div className="flex items-center space-x-5">
              <div>show 20</div>
              <div className="flex items-center space-x-2 justify-center">
                <button>
                  {" "}
                  <BiChevronLeft class />{" "}
                </button>
                <p className="shadow-md p-1">page 1 of 34</p>
                <button>
                  <BiChevronRight />
                </button>
              </div>
            </div>
          </div>
          {/* <-------------------------- Pitches -------------------------------------> */}
          <PitchCard/>
        </div>
      </div>
    </div>
  );
};

export default Pitches;
