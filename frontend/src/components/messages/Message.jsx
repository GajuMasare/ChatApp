import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConverstion from "../../Zustand/useConverstion";
import { extractTime } from "../../utils/extractTime";

function Message({ message }) {
  const { authUser } = useAuthContext();
  const { selectedConverstion } = useConverstion();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  const formattedTime = extractTime(message.createdAt);
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConverstion?.profilePic;
  return (
    <>
      <div className="md:min-w-[450] flex-col">
        <div className={`chat ${chatClassName}`}>
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                src={`${profilePic}`}
                alt="tailwind css chat bubble component"
              />
            </div>
          </div>
          <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>
            {message.message}
          </div>
          <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
            12:42
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
