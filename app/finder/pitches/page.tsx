import React from "react";
import { TbMathGreater } from "react-icons/tb";
import Filters from "@/components/Filters/Filters";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import PitchCard from "@/components/pitch/PitchCard";

const Pitches = () => {
  return (
    <div className="w-full px-10 py-5 space-y-5 font-light bg-slate-50">
      <div className="flex items-center w-full px-2 space-x-2 tracking-wide">
        <span className="font-medium tracking-wider">Smart Search</span>
        <TbMathGreater />
        <p>2,12,343 Investors found for</p>
        <p>Bangalore, Pre-Seed, SAAS,</p>
      </div>
      {/* <-------------------------------------Filter Section----------------------------------------> */}
      <div className="flex w-full space-x-5">
        <div className="basis-[35%] max-h-[calc(100vh-20vh)] bg-white shadow-md overflow-y-auto space-y-2 py-2">
          <Filters />
        </div>
        {/* <-------------------------------- Filter Resulsts -------------------------------> */}
        <div className="basis-full px-3 py-2 space-y-5 overflow-y-auto scroll-smooth max-h-[calc(100vh-20vh)]">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2">
              <p>Active in </p>{" "}
              <span className="border-gray-300 border-[1px] px-2 py-1">
                {" "}
                6 months
              </span>
            </div>
            <div className="flex items-center space-x-5">
              <div>show 20</div>
              <div className="flex items-center justify-center space-x-2">
                <button>
                  {" "}
                  <BiChevronLeft class />{" "}
                </button>
                <p className="p-1 shadow-md">page 1 of 34</p>
                <button>
                  <BiChevronRight />
                </button>
              </div>
            </div>
          </div>
          {/* <-------------------------- Pitches -------------------------------------> */}
          <PitchCard imgUrl="https://media.licdn.com/dms/image/C560BAQH03e0VowA5sQ/company-logo_100_100/0/1523260171056?e=1699488000&v=beta&t=UCTNM2gewlmBhiwOhs9r6qSlBYLoVGyPoLQ1MQzRNQA" />
          <PitchCard imgUrl="https://media.licdn.com/dms/image/C4E0BAQGLKj3JHcof0w/company-logo_200_200/0/1589990867649?e=1699488000&v=beta&t=CKsWnpcI8AdavHnrzVNO1pbNBC09dSFTEl8riofAZZw" />
          <PitchCard imgUrl="https://media.licdn.com/dms/image/C4E0BAQFvx45x7j4Zhg/company-logo_200_200/0/1519864832328?e=1699488000&v=beta&t=OK4wa3gIREQ58G9YZycSjhM52ShEaiX-jktbjcK5FAU" />
          <PitchCard imgUrl="https://media.licdn.com/dms/image/C4D0BAQHYemd2p7TxeQ/company-logo_200_200/0/1673333565608?e=1699488000&v=beta&t=h085_fkdsayLBi3vGrbbR3qGx9mxNA0jq7B9Gj-8Dew" />
        </div>
      </div>
    </div>
  );
};

export default Pitches;
