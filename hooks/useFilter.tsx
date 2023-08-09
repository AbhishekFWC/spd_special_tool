import { useContext } from "react";
import { FilterContext } from "@/context/filter/FilterContext";

const useFilter = () => useContext(FilterContext);

export default useFilter;
