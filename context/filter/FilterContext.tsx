'use client'
import React, { createContext, useReducer, useState } from "react";
import { filterReducer, FilterInterface } from "./filterReducer";

interface FilterContextInterface {
  filters: FilterInterface;
  reducer: React.Dispatch<any>;
  filter : boolean,
  setFilter : React.Dispatch<React.SetStateAction<boolean>>;
}

const initialState: FilterContextInterface = {
  filter : false,
  setFilter : () => {},
  filters: {
    industry: [],
    investmentRange: [],
    location: [],
    round: [],
  },
  reducer: () => {},
};

export const FilterContext =
  createContext<FilterContextInterface>(initialState);

interface Props {
  children: React.ReactNode;
}


export const FilterContextProvider: React.FC<Props> = ({ children }) => {
  const state: FilterInterface = {
    industry: [],
    investmentRange: [],
    round: [],
    location: [],
  };
  const [filters, reducer] = useReducer(filterReducer, state);
  const [filter,setFilter] = useState<boolean>(true);

  return (
    <FilterContext.Provider value={{ filters, reducer,filter,setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
