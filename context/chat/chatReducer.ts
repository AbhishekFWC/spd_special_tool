interface Message {
  _id?: string;
  message: string;
  fileUrl?: string;
  sentBy: string;
}

type Action =
  | { type: "ADD_MSG"; payload: Message }
  | { type: "ADD_MSGS"; payload: Message[] };
  
export const messageReducer = (state: Message[], action: Action) => {
  switch (action.type) {
    case "ADD_MSG":
      return [...state, action.payload];
    case "ADD_MSGS":
      return [...state, ...action.payload];
    default:
      return state;
  }
};

