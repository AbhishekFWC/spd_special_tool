import Header from "@/components/home/Header";
import React from "react";
import { CiImport } from "react-icons/ci";
import Image from "next/image";
import profile from "../../public/abhishek.jpeg";

const Investors = () => {
  return (
    <div className="w-full px-5 space-y-5">
      {/* <-----------------------------Filters-------------------------------> */}
      <div className="bg-white my-5 px-5 py-2">Filters :</div>

      {/* <-----------------------Top Investors--------------------------> */}
      <div className="w-full bg-white p-5 space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-2xl"> Top Investors </p>

          {/* <------Download button--------> */}
          <button className="flex justify-center items-center space-x-2 cursor-pointer rounded-lg border-purple-400 border-[1px] px-2 py-1 hover:bg-purple-50">
            <p>Download </p>
            <CiImport />
          </button>
        </div>

        {/* <-----------------------Investors card----------------------> */}

        <div className="w-full">
          <div className="flex w-full justify-between bg-gray-100 py-2">
            <div className="flex items-center space-x-5 basis-1/5">
              <p>Investor</p>
            </div>
            <div className="basis-1/5">Industry</div>
            <div className="basis-1/5">Locations</div>
            <div className="basis-1/5">Range</div>
            <div className="basis-1/5">Firm</div>
          </div>
          <div className="flex w-full justify-between border-b-[1px] py-2">
            <div className="flex basis-1/5 items-center space-x-5">
              <Image alt="profile pic" width={50} height={50} src={profile} />
              <div>
                <p>Abhishek Bhat</p>
                <p>CEO & Co-founder of Mux</p>
                <p>Bengaluru, India</p>
              </div>
            </div>
            <div className="basis-1/5">Industry</div>
            <div className="basis-1/5">Locations</div>
            <div className="basis-1/5">Range</div>
            <div className="basis-1/5">Firm</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investors;
