"use client";
import React from "react";
import { CiFilter } from "react-icons/ci";
import { industryTypes, roundTypes } from "../../utils/filterTypes";
import Keyword from "./Keyword";
import FilterType from "./FilterType";
import useFilter from "../../hooks/useFilter";

const Filters = () => {
  const { filters, reducer } = useFilter();

  const resetFilters = () => {
    reducer({ type: "RESET" });
  };

  return (
    <>
      <div className="flex space-x-3 items-center mx-3 py-2 border-gray-100 border-b-[1px]">
        <CiFilter className="text-3xl font-medium" />
        <p className="font-medium">Smart Filters</p>
      </div>
      <div className="px-3 space-y-5">
        {filters.industry.length > 0 || filters.round.length > 0 ? (
          <>
            {" "}
            <div className="flex items-center justify-between text-sm">
              <p className="font-normal">Filters Applied</p>{" "}
              <button
                className="font-normal text-blue-600"
                onClick={resetFilters}
              >
                Reset
              </button>
            </div>
            <div className="flex flex-wrap py-2 border-gray-100 border-b-[1px]">
              {filters.industry?.map((ele) => (
                <Keyword key={ele} filterType="industry" keyword={ele} />
              ))}
              {filters.round.map((ele) => (
                <Keyword key={ele} filterType="round" keyword={ele} />
              ))}
            </div>
          </>
        ) : null}
        {/* <-----------------------------------Keywords-------------------------------->  */}

        {/* <-----------------------------------Filters-------------------------------------> */}
        <div className="space-y-5">
          <FilterType
            title="Industry"
            filterType="industry"
            data={industryTypes}
          />
          <FilterType title="Investment Range" filterType="investmentRange" />
          <FilterType title="Location" filterType="location" />
          <FilterType title="Round" filterType="round" data={roundTypes} />
        </div>
      </div>
    </>
  );
};

export default Filters;
