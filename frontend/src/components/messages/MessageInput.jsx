import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
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
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
          value={message}
          onChange={(e) => {
            setmessage(e.target.value);
          }}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
