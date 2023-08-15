import React from "react";

interface Props {
  _id?: string;
  message: string;
  time?: string;
  sentBy?: string;
}
import useAuth from "../../hooks/useAuth";

const Message: React.FC<Props> = ({ _id, message, time, sentBy }) => {
  const { user } = useAuth();
  const justify = sentBy !== undefined ? "justify-start" : "justify-end";
  return (
    <div className={`flex ${justify} text-sm`}>
      <p className="p-2 bg-gray-200 rounded-lg max-w-[70%]">{message}</p>
    </div>
  );
};

export default Message;
