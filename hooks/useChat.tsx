import { ChatContext } from "@/context/chat/ChatContext";
import { useContext } from "react";


const useChat = () => useContext(ChatContext);

export default useChat;
