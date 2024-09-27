import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { FaRocketchat } from "react-icons/fa";
import useConverstion from "../../Zustand/useConverstion";
import { useAuthContext } from "../../context/AuthContext";

function MessageContainer() {
  const { selectedConverstion, setSelectedConverstion } = useConverstion();

  useEffect(() => {
    //cleanup function (unmount last selected chat)
    return () => setSelectedConverstion(null);
  }, [setSelectedConverstion]);

  return (
    <div className="md:min-w-[700px] flex flex-col p-5  ">
      {!selectedConverstion ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header  */}

          <div className="grayBgColor w-full flex items-center p-3 rounded-2xl gap-3 pl-6">
            <div className="w-10 rounded-full">
              <img src={selectedConverstion.profilePic} alt="user avatar" />
            </div>
            <span className="text-sm font-medium text-gray-400">
              {selectedConverstion.fullName}
            </span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-300 font-semibold flex flex-col items-center gap-2">
        <p>Welcome {authUser.fullname}</p>
        <p>Select a chat to start messaging</p>
        <FaRocketchat className="text-3xl md:text-5xl text-center animate-bounce mt-4 text-indigo-500" />
      </div>
    </div>
  );
};
