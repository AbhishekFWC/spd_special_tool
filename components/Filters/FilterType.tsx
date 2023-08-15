"use client";
import React, { useState } from "react";
import useFilter from "@/hooks/useFilter";
import {
  Bs0Circle,
  BsChevronCompactDown,
  BsChevronCompactRight,
} from "react-icons/bs";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { TbSearch } from "react-icons/tb";

import { LiaRupeeSignSolid } from "react-icons/lia";
interface Props {
  title: string;
  filterType: string;
  data?: string[];
}

const FilterType: React.FC<Props> = ({ filterType, data, title }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { reducer } = useFilter();

  const handlDropDown = () => {
    const dropdownContent = document.querySelector(".dropdown");
    setOpen((prev) => !prev);
  };

  const { filters, setFilter } = useFilter();

  const handleToggle = (e: any) => {
    if (e.target.checked) {
      if (filterType == "industry") {
        reducer({ type: "ADD_INDUSTRY", payload: { industry: e.target.name } });
      } else if (filterType === "investmentRange") {
        reducer({ type: "ADD_RANGE", payload: { range: e.target.name } });
      } else if (filterType === "location") {
        reducer({ type: "ADD_LOCATION", payload: { location: e.target.name } });
      } else if (filterType === "round") {
        reducer({ type: "ADD_ROUND", payload: { round: e.target.name } });
      }
      setFilter((prev) => !prev);
    } else {
      if (filterType === "industry") {
        reducer({
          type: "REMOVE_INDUSTRY",
          payload: { industry: e.target.name },
        });
      } else if (filterType === "location") {
        reducer({
          type: "REMOVE_LOCATION",
          payload: { location: e.target.name },
        });
      } else if (filterType === "round") {
        reducer({ type: "REMOVE_ROUND", payload: { round: e.target.name } });
      }
      setFilter((prev) => !prev);
    }
  };

  const [filteredData, setFilteredData] = useState<string[] | null>();

  // filtering the availabel data
  const handleChange = (e: any) => {
    console.log(e.target.value);
    const regex = new RegExp(e.target.value, "i");
    const filteredData = data?.filter((industry) => regex.test(industry));
    if (filteredData) setFilteredData(filteredData);
  };

  return (
    <div className="py-2 w-full border-gray-100 border-b-[1px] space-y-2 hover:translate-x-2 transition">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={handlDropDown}
      >
        <p className="font-medium tracking-wide">{title}</p>{" "}
        <button>{open ? <FiChevronDown /> : <FiChevronRight />}</button>
      </div>

      {/* <----------------------------------------- Dropdown -------------------------------> */}
      {open && (
        <div
          className={`space-y-5 dropdown overflow-hidden ${
            open ? "h-auto opacity-100" : "h-0 opacity-0"
          } transition-all duration-300 ease-in-out`}
        >
          {/* <------------------------------ Search Input --------------------------> */}
          <div>
            {filterType !== "investmentRange" ? (
              <label
                htmlFor="search"
                className="flex items-center px-2 rounded-md shadow-sm bg-gray-50"
              >
                <input
                  type="text"
                  className="w-full px-2 py-2 text-gray-900 rounded-md outline-none bg-gray-50"
                  placeholder="SAAS"
                  onChange={(e) => handleChange(e)}
                />
                <TbSearch className="text-lg" />
              </label>
            ) : (
              <div>
                <div>
                  <div className="flex space-x-5">
                    <div className="space-y-2 basis-1/2">
                      <span className="flex items-center space-x-2">
                        {" "}
                        <p>From</p> <LiaRupeeSignSolid />
                      </span>
                      <input
                        name="from"
                        type="number"
                        className="w-full px-2 py-1 bg-gray-100 rounded-md outline-none appearance-none"
                        placeholder="10"
                      />
                    </div>
                    <div className="space-y-2 basis-1/2">
                      <span className="flex items-center space-x-2">
                        {" "}
                        <p>To</p> <LiaRupeeSignSolid />
                      </span>
                      <input
                        name="from"
                        type="number"
                        className="w-full px-2 py-1 bg-gray-100 rounded-md outline-none appearance-non"
                        placeholder="100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            {/* <-----------------------------------Displaying the filter type data-------------------------------------> */}
            {filteredData
              ? filteredData.map((ele, index) => (
                  <label
                    key={index}
                    htmlFor={ele}
                    className="flex items-center"
                  >
                    <input
                      onChange={handleToggle}
                      name={ele}
                      type="checkbox"
                      checked={filters[filterType].includes(ele)}
                      className="mr-5"
                    />
                    {ele}
                  </label>
                ))
              : data
              ? data.map((ele, index) => (
                  <label
                    key={index}
                    htmlFor={ele}
                    className="flex items-center"
                  >
                    <input
                      onChange={handleToggle}
                      name={ele}
                      type="checkbox"
                      checked={filters[filterType].includes(ele)}
                      className="mr-5"
                    />
                    {ele}
                  </label>
                ))
              : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterType;
