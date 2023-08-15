import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import InvestorCard from "../investor/InvestorCard";
import Modal from "../modals/Modal";
import SaveSearch from "../save search/SaveSearch";
import { BsFolderPlus } from "react-icons/bs";
import Skeleton from "../loader/Skeleton";

const FilterResult = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  const handleModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <>
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
          <SaveSearch closeModal={closeModal}/>
        </Modal>
      </div>
      {/* <--------------------------Investor--------------Profile */}
      <div className="w-full space-y-5 overflow-y-auto scroll-smooth max-h-[calc(100vh-20vh)]">
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
        {/* <InvestorCard imgUrl="https://media.licdn.com/dms/image/D5603AQHmYDodM0rsJg/profile-displayphoto-shrink_400_400/0/1691426112228?e=1697068800&v=beta&t=VBHq8kLYSUMZCrKJSozgQWS-ym2JooHUMf8FGnW-vv0" />
        <InvestorCard imgUrl="https://media.licdn.com/dms/image/D4D03AQF7DVMe4QvgWA/profile-displayphoto-shrink_400_400/0/1673517440334?e=1697068800&v=beta&t=n5ZAq06XdojK5BeqlTd-kWHKzNUBOqBgxoXGKMStbOs" />
        <InvestorCard imgUrl="https://media.licdn.com/dms/image/C4D03AQF3hTNkJNIyAg/profile-displayphoto-shrink_400_400/0/1646152712827?e=1697068800&v=beta&t=zIvfk3aon9YmbGiHKMsXLTLkCKpKJwbK8KvmjY-gPiU" />
        <InvestorCard imgUrl="https://media.licdn.com/dms/image/D4D03AQFh-UiUMbStbg/profile-displayphoto-shrink_400_400/0/1684580086412?e=1697068800&v=beta&t=vC2svNIsv283mx5RQ-QaLlAjskHRHu6GaxBIpz7-gy4" /> */}
      </div>
    </>
  );
};

export default FilterResult;
