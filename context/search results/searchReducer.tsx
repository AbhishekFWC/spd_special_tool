export interface ResultInterface {
  entreprenuer: string[];
  investor: string[];
  pitch: string[];
}

export const initialState: ResultInterface = {
  investor: [],
  entreprenuer: [],
  pitch: [],
};

export enum Methods {
  // Investor methods
  "addInvestor" = "ADD_INV",
  "addInvestors" = "ADD_INVS",
  "removeInvestor" = "RMV_INV",
  "removeInvestors" = "RMV_INVS",

  // Entreprenuer Methods
  "addEntreprenuer" = "ADD_ENT",
  "addEntreprenuers" = "ADD_ENTS",
  "removeEntreprenuer" = "RMV_ENT",
  "removeEntreprenuers" = "RMV_ENTS",

  // Pitch Methods
  "addPitch" = "ADD_PITCH",
  "addPitches" = "ADD_PITCHES",
  "removePitch" = "RMV_PITCH",
  "removePitches" = "RMV_PITCHES",
}

type Action =   
  | { type: Methods.addInvestor; payload: { investor: string } }
  | { type: Methods.addEntreprenuer; payload: { entreprenuer: string } }
  | { type: Methods.addPitch; payload: { pitch: string } }
  | { type: Methods.addPitches; payload: { pitches: string[] } }
  | { type: Methods.addInvestors; payload: { investors: string[] } }
  | { type: Methods.addEntreprenuers; payload: { entreprenuers: string[] } }
  | { type: Methods.removeEntreprenuer; payload: { entreprenuer: string } }
  | { type: Methods.removeInvestor; payload: { investor: string } }
  | { type: Methods.removePitch; payload: { pitch: string } }
  | { type: Methods.removeInvestors }
  | { type: Methods.removeEntreprenuers }
  | { type: Methods.removePitches };

export const searchReducer = (state: ResultInterface, action: Action) => {
  switch (action.type) {
    case Methods.addInvestor:
      return {
        ...state,
        investor: [...state.investor, action.payload.investor],
      };
    case Methods.addEntreprenuer:
      return {
        ...state,
        entreprenuer: [...state.entreprenuer, action.payload.entreprenuer],
      };
    case Methods.addPitch:
      return { ...state, pitch: [...state.pitch, action.payload.pitch] };

    case Methods.addInvestors:
      return {
        ...state,
        investor: [...state.investor, ...action.payload.investors],
      };
    case Methods.addEntreprenuers:
      return {
        ...state,
        entreprenuer: [...state.entreprenuer, ...action.payload.entreprenuers],
      };
    case Methods.addPitches:
      return { ...state, pitch: [...state.pitch, ...action.payload.pitches] };

    case Methods.removeEntreprenuer:
      const updatedEntreprenuer = state.entreprenuer.filter(
        (entreprenuer) => entreprenuer !== action.payload.entreprenuer
      );
      return { ...state, entreprenuer: updatedEntreprenuer };
    case Methods.removeInvestor:
      const updatedInvestor = state.investor.filter(
        (investor) => investor != action.payload.investor
      );
      return { ...state, investor: updatedInvestor };
    case Methods.removePitch:
      const updatedPitch = state.pitch.filter(
        (pitch) => pitch != action.payload.pitch
      );
      return { ...state, pitch: updatedPitch };

    case Methods.removeInvestors:
      return { ...state, investor: [] };
    case Methods.removePitches:
      return { ...state, pitch: [] };
    case Methods.removeEntreprenuers:
      return { ...state, entreprenuer: [] };

    default:
      return state;
  }
};
