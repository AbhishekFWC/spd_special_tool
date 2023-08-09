export interface FilterInterface {
  industry: string[];
  investmentRange: string[];
  location: string[];
  round: string[];
  [key: string]: string[];
}
export type Action =
  | { type: "ADD_INDUSTRY"; payload: { industry: string } }
  | { type: "ADD_RANGE"; payload: { range: string } }
  | { type: "ADD_LOCATION"; payload: { location: string } }
  | { type: "ADD_ROUND"; payload: { round: string } }
  | { type: "REMOVE_INDUSTRY"; payload: { industry: string } }
  | { type: "REMOVE_LOCATION"; payload: { location: string } }
  | { type: "REMOVE_RANGE"; payload: { range: string } }
  | { type: "REMOVE_ROUND"; payload: { round: string } }
  | { type: "RESET" };

export const filterReducer = (state: FilterInterface, action: Action) => {
  switch (action.type) {
    case "ADD_INDUSTRY":
      const { industry } = action.payload;
      // Check if the industry already exists in the state to avoid duplicates
      if (industry && !state.industry.includes(industry)) {
        return {
          ...state,
          industry: [...state.industry, industry],
        };
      }
      return state;

    case "ADD_LOCATION":
      const { location } = action.payload;
      if (location && !state.location.includes(location)) {
        return {
          ...state,
          location: [...state.location, location],
        };
      }
      return state;

    case "ADD_RANGE":
      const { range } = action.payload;
      if (range && !state.investmentRange.includes(range)) {
        return { ...state, investmentRange: [...state.investmentRange, range] };
      }
      return state;

    case "ADD_ROUND":
      const { round } = action.payload;
      if (round && !state.round.includes(round)) {
        return { ...state, round: [...state.round, round] };
      }
      return state;
      
    case "REMOVE_INDUSTRY":
      const industryItem = action.payload.industry;
      if (industryItem) {
        const updatedIndustry = state.industry.filter(
          (industry) => industry !== industryItem
        );
        return {
          ...state,
          industry: updatedIndustry,
        };
      }
      return state;

    case "REMOVE_LOCATION":
      const locationItem = action.payload.location;
      if (locationItem) {
        const updatedLocation = state.location.filter(
          (location) => location !== locationItem
        );
        return { ...state, location: updatedLocation };
      }
      return state;

    case "REMOVE_RANGE":
      const rangeItem = action.payload.range;
      if (rangeItem) {
        const updateRange = state.investmentRange.filter(
          (range) => range !== rangeItem
        );
        return { ...state, investmentRange: updateRange };
      }
      return state;

    case "REMOVE_ROUND":
      const roundItem = action.payload.round;
      if (roundItem) {
        const updateRound = state.round.filter((round) => round !== roundItem);
        return { ...state, round: updateRound };
      }
      return state;

    case "RESET":
      return {
        ...state,
        industry: [],
        investmentRange: [],
        location: [],
        round: [],
      };
    default:
      return state;
  }
};
