import React, { use } from "react";
import { AiOutlineClose } from "react-icons/ai";
import useFilter from "@/hooks/useFilter";
interface Props {
  keyword: string;
  filterType: string;
}
const Keyword: React.FC<Props> = ({ keyword, filterType }) => {
  const { reducer,setFilter } = useFilter();

  const removeFilter = () => {
    if (filterType === "industry") {
      reducer({ type: "REMOVE_INDUSTRY", payload: { industry: keyword } });
    } else if (filterType === "location") {
      reducer({ type: "REMOVE_LOCATION", payload: { location: keyword } });
    } else if (filterType === "round") {
      reducer({ type: "REMOVE_ROUND", payload: { round: keyword } });
    }
    setFilter(prev => !prev)
  };

  return (
    <div className="flex items-center px-2 py-1 m-1 space-x-1 bg-gray-100 border-gray-400 rounded-2xl">
      <span className="text-sm">{keyword}</span>{" "}
      <button onClick={removeFilter} className="text-sm">
        <AiOutlineClose />
      </button>
    </div>
  );
};

export default Keyword;
