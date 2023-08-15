import React from "react";
import Image from "next/image";
import AvatarIcon from "@/utils/icons/AvatarIcon";

const Skeleton = () => {
  return (
    <div className="flex w-full animate-pulse">
      <div className="flex space-y-5 p-5 flex-col items-center justify-center  basis-[45%] dark:bg-gray-700">
        <AvatarIcon width={80} height={80} />
        <div className="flex flex-col items-center justify-center w-full space-y-3">
          <p className="h-3 w-[90%] bg-gray-400 rounded-lg"></p>
          <p className="h-3 w-[90%] bg-gray-400 rounded-lg"></p>
        </div>
      </div>
      <div className="w-full space-y-10 ">
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div className="bg-gray-400 w-[35%] h-3 rounded-lg"></div>
            <div className="bg-gray-400 w-[35%] h-3 rounded-lg"></div>
          </div>
          <div className="flex items-center justify-between space-x-10">
            <div className="bg-gray-400 w-[35%] h-3 rounded-lg"></div>{" "}
            <div className="bg-gray-400 w-[35%] h-3 rounded-lg"></div>{" "}
            <div className="bg-gray-400 w-[35%] h-3 rounded-lg"></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="bg-gray-400 w-[35%] h-3 rounded-lg"></div>
          <div className="bg-gray-400 w-[65%] h-3 rounded-lg"></div>
          <div className="bg-gray-400 w-[75%] h-3 rounded-lg"></div>
          <div className="bg-gray-400 w-[45%] h-3 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
