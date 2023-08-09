import React from "react";

const PitchCard = () => {
  return (
    <div className="w-full bg-white text-base shadow-md flex">
      <div className="basis-[35%]">Pitch Logo</div>
      <div className="basis-[60%]">Pitch Details</div>
      <div className="basis-[5%]">Tasks related to the pitch</div>
    </div>
  );
};

export default PitchCard;
