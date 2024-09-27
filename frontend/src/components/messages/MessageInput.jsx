import React, { useState } from "react";
import { IoMdArrowRoundUp } from "react-icons/io";
import useSendMessage from "../../hooks/useSendMessage";

function MessageInput() {
  const [message, setmessage] = useState("");
  const { sendMessage, loading } = useSendMessage();

  const handleSubmit = async (e) => {
    console.log(message);
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setmessage("");
  };

  return (
    <form
      className="px-4 my-3 flex flex-row justify-between gap-3 "
      onSubmit={handleSubmit}
    >
      <div className="w-[94%] ">
        <input
          type="text"
          className="border rounded-xl block w-full p-3.5 pl-6 grayBgColor border-none placeholder-gray-600 text-xs font-medium  "
          placeholder="Message..."
          value={message}
          onChange={(e) => {
            setmessage(e.target.value);
          }}
        />
      </div>
      <div className="h-full flex ">
        <button
          type="submit"
          className="flex bg-indigo-500 rounded-xl w-10 items-center h-full justify-center "
        >
          {loading ? (
            <div className="loading loading-spinner te"></div>
          ) : (
            <IoMdArrowRoundUp className="w-4 h-4 text-gray-200" />
          )}
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
