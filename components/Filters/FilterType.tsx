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
import gsap from 'gsap';

interface Props {
  title: string;
  filterType: string;
  data?: string[];
}

const FilterType: React.FC<Props> = ({ filterType, data, title }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { reducer } = useFilter();

  const handlDropDown = () => {
    const dropdownContent = document.querySelector('.dropdown');

    gsap.to(dropdownContent, {
      height: open ? 0 : 'auto',
      opacity: open ? 0 : 1,
      duration: 0.3,
      ease: 'power2.out',
    });
    setOpen((prev) => !prev);
  };

  const { filters } = useFilter();

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
      <div className="flex justify-between items-center cursor-pointer" onClick={handlDropDown}>
        <p className="tracking-wide font-medium">{title}</p>{" "}
        <button>
          {open ? <FiChevronDown /> : <FiChevronRight />}
        </button>
      </div>

      {/* <----------------------------------------- Dropdown -------------------------------> */}
      {open && (
        <div className={`space-y-5 dropdown overflow-hidden ${open ? 'h-auto opacity-100' : 'h-0 opacity-0'} transition-all duration-300 ease-in-out`}>
          {/* <------------------------------ Search Input --------------------------> */}
          <div>
            {filterType !== "investmentRange" ? (
              <label
                htmlFor="search"
                className="flex items-center bg-gray-50 px-2 shadow-sm rounded-md"
              >
                <input
                  type="text"
                  className="outline-none bg-gray-50 text-gray-900 w-full px-2 py-2 rounded-md"
                  placeholder="SAAS"
                  onChange={(e) => handleChange(e)}
                />
                <TbSearch className="text-lg" />
              </label>
            ) : (
              <div className="">
                <div>
                  <p className="text-xs"> INR (in Lacs)</p>
                  <div className="space-x-5 flex">
                    <div className="space-y-2 basis-1/2">
                      <span> From :</span>
                      <input
                        name="from"
                        type="number"
                        className="outline-none w-full appearance-none py-1 px-2 bg-gray-100 rounded-md"
                        placeholder="10"
                      />
                    </div>
                    <div className="space-y-2 basis-1/2">
                      <span> To :</span>
                      <input
                        name="from"
                        type="number"
                        className="outline-none appearance-non w-full py-1 px-2 bg-gray-100 rounded-md"
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
