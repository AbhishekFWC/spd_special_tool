import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import InvestorCard from "../investor/InvestorCard";

const FilterResult = () => {
  return (
    <>
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

      {/* <--------------------------Investor--------------Profile */}
      <InvestorCard imgUrl="https://media.licdn.com/dms/image/D5603AQHmYDodM0rsJg/profile-displayphoto-shrink_400_400/0/1691426112228?e=1697068800&v=beta&t=VBHq8kLYSUMZCrKJSozgQWS-ym2JooHUMf8FGnW-vv0" />
      <InvestorCard imgUrl="https://media.licdn.com/dms/image/D4D03AQF7DVMe4QvgWA/profile-displayphoto-shrink_400_400/0/1673517440334?e=1697068800&v=beta&t=n5ZAq06XdojK5BeqlTd-kWHKzNUBOqBgxoXGKMStbOs" />
      <InvestorCard imgUrl="https://media.licdn.com/dms/image/C4D03AQF3hTNkJNIyAg/profile-displayphoto-shrink_400_400/0/1646152712827?e=1697068800&v=beta&t=zIvfk3aon9YmbGiHKMsXLTLkCKpKJwbK8KvmjY-gPiU" />
      <InvestorCard imgUrl="https://media.licdn.com/dms/image/D4D03AQFh-UiUMbStbg/profile-displayphoto-shrink_400_400/0/1684580086412?e=1697068800&v=beta&t=vC2svNIsv283mx5RQ-QaLlAjskHRHu6GaxBIpz7-gy4" />
    </>
  );
};

export default FilterResult;
