"use client";
import React, { useState } from "react";
import { TbMathGreater } from "react-icons/tb";
import Filters from "@/components/Filters/Filters";
import FilterResult from "@/components/home/FilterResult";
import Modal from "@/components/modals/Modal";
import SaveSearch from "@/components/save search/SaveSearch";

const Home = () => {

  return (
    <div className="w-full px-10 mt-5 space-y-5 font-light bg-gray-50">
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
        <div className="basis-full px-3 space-y-5 overflow-y-auto scroll-smooth max-h-[calc(100vh-20vh)]">
          <FilterResult />
        </div>
      </div>
    </div>
  );
};

export default Home;
