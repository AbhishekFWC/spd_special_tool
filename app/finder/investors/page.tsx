"use client";
import React, { useEffect, useState } from "react";
import { CiImport } from "react-icons/ci";
import { TbMathGreater } from "react-icons/tb";
import Filters from "../../../components/Filters/Filters";
import useFilter from "../../../hooks/useFilter";
import { filterInvestor } from "@/actions/filterActions";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import InvestorCard from "../../../components/investor/InvestorCard";
import Modal from "../../../components/modals/Modal";
import SaveSearch from "../../../components/save search/SaveSearch";
import { BsFolderPlus } from "react-icons/bs";
import Skeleton from "../../../components/loader/Skeleton";

const Investors = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  const handleModal = () => {
    setOpenModal((prev) => !prev);
  };
  const { filter, filters } = useFilter();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any[]>([]);
  const fetchInvestors = async () => {
    const res = await filterInvestor(
      filters.industry,
      filters.round,
      filters.location,
      filters.investmentRange
    );
    if (res?.success) {
      setData(res?.data);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchInvestors();
    setLoading(false);
  }, [
    filters.industry,
    filters.investmentRange,
    filters.location,
    filters.round,
  ]);

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
        <div className="px-3 space-y-5 basis-full ">
          <div className="flex items-center justify-between w-full p-2 shadow-md g-white p">
            <div className="flex items-center justify-center space-x-5">
              <div className="flex items-center justify-center space-x-2">
                <input type="checkbox" id="select-all" />
                <label htmlFor="select-all">Select All</label>
              </div>
              <button
                onClick={handleModal}
                className="flex items-center justify-center space-x-2"
              >
                <BsFolderPlus />
                <span>Add to folder</span>
              </button>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <button>
                {" "}
                <BiChevronLeft class />{" "}
              </button>
              <p className="">page 1 of 34</p>
              <button>
                <BiChevronRight />
              </button>
            </div>
            <Modal isOpen={openModal} closeModal={closeModal}>
              <SaveSearch closeModal={closeModal} />
            </Modal>
          </div>

          <div className="w-full space-y-5 overflow-y-auto scroll-smooth max-h-[calc(100vh-20vh)]">
            {loading ? (
              <>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </>
            ) : (
              data?.map((investor, index) => (
                <InvestorCard
                  key={index}
                  imgUrl={`${investor["userId"].imgUrl}`}
                  _id={investor._id}
                  email={investor["userId"].email}
                  contact={investor["userId"].contact}
                  firstName={investor["userId"].firstName}
                  lastName={investor["userId"].lastName}
                  position={investor["userId"].position}
                  firmName={investor["firmName"]}
                  industry={investor["industry"]}
                  lead={investor["lead"]}
                  location={investor["currentLocation"]}
                  maxInvest={investor["maxInvest"]}
                  minInvest={investor["minInvest"]}
                  round={investor["round"]}
                  sweetSpot={investor["sweetSpot"]}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investors;
