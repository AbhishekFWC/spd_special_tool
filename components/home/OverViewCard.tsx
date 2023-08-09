import React from "react";
import { AiOutlineRise } from "react-icons/ai";

interface Props {
  role: string;
  Icon: React.FC;
  count: number;
}


const OverViewCard: React.FC<Props> = ({ role, Icon, count }) => {
  return (
    <div className="bg-white w-96 h-44 shadow-lg rounded-sm px-5 py-2 flex flex-col justify-around">
      <div className="w-full flex justify-between items-center">
        <p className="text-2xl">{role} </p>
        <Icon />
      </div>
      <div className="text-3xl">{count}</div>
      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <AiOutlineRise />
          <p>5% from the last month</p>
        </div>{" "}
        <span className="text-blue-500">See more</span>
      </div>
    </div>
  );
};

export default OverViewCard;
