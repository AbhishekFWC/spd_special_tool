'use client'
import React, { createContext, useReducer } from "react";
import { filterReducer, FilterInterface } from "./filterReducer";

interface FilterContextInterface {
  filters: FilterInterface;
  reducer: React.Dispatch<any>;
}

const initialState: FilterContextInterface = {
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

  return (
    <FilterContext.Provider value={{ filters, reducer }}>
      {children}
    </FilterContext.Provider>
  );
};
