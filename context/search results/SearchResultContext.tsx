import React, { createContext, useReducer } from "react";
import { searchReducer, initialState } from "./searchReducer";

//serch interface
interface SearchInterface {
    candidates: {},
    dispatch: React.Dispatch<any>
}
interface Props {
    children: React.ReactNode
}

// search context
export const SearchContext = createContext<SearchInterface | null>(null);

const SearchContextProvider: React.FC<Props> = ({ children }) => {

    const [candidates, dispatch] = useReducer(searchReducer, initialState)

    return <SearchContext.Provider value={{ candidates, dispatch }}>
        {children}
    </SearchContext.Provider>
}