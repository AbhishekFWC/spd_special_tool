import React, {
  createContext,
  useState,
  useReducer,
  useRef,
  useEffect,
} from "react";
import { messageReducer } from "./chatReducer";

interface ChatContextInterface {
  openMsgBox: boolean;
  setOpenMsgBox: React.Dispatch<React.SetStateAction<boolean>>;
  websocket: WebSocket | null;
  msgState: {};
  msgReducer: React.Dispatch<any>;
}

const initialState: ChatContextInterface = {
  openMsgBox: false,
  setOpenMsgBox: () => {},
  msgState: {},
  msgReducer: () => {},
  websocket: null,
};

export const ChatContext = createContext<ChatContextInterface>(initialState);

interface Props {
  children: React.ReactNode;
}

export const ChatContextProvider: React.FC<Props> = ({ children }) => {
  const [openMsgBox, setOpenMsgBox] = useState<boolean>(true);

  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // connection to the websocket with token
      const socket = new WebSocket(`ws://49.204.73.222:9876?__a_t=${token}`);
      socketRef.current = socket;
    }

    // Closing the connection
    () => {
      socketRef.current?.close();
    };
  }, []);

  const [msgState, msgReducer] = useReducer(messageReducer, []);
  return (
    <ChatContext.Provider
      value={{
        openMsgBox,
        setOpenMsgBox,
        msgState,
        msgReducer,
        websocket: socketRef.current,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
