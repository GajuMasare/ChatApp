import React from "react";
import useConverstion from "../../Zustand/useConverstion";
import { useSocketContext } from "../../context/SocketContext";

function Conversation({ conversation }) {
  const { selectedConverstion, setSelectedConverstion } = useConverstion();
  const isSelected = selectedConverstion?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-indigo-500 rounded-xl p-3 py-2 cursor-pointer  ${
          isSelected ? "bg-indigo-500" : ""
        }`}
        onClick={() => setSelectedConverstion(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-medium text-sm text-gray-200">
              {conversation.fullName}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Conversation;
