import { useContext } from "react";
import { SelectionContext } from "@/context/selection/SelectionContext";

const useSelect = () => useContext(SelectionContext);

export default useSelect;
