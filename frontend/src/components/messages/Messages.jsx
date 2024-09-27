import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import useListenMessages from "../../hooks/useListenMessages";
import useScrollbar from "../../hooks/useScrollbar";

function Messages() {
  const { messages, loading } = useGetMessages();
  const { scrollBarLogic, onMouseEnter, onMouseLeave } = useScrollbar();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div
      className={`px-4  pt-4 flex-1 overflow-auto ${scrollBarLogic}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className="text-center text-xs font-medium text-gray-600">
          Send a message to start the conversion
        </p>
      )}
    </div>
  );
}

export default Messages;
