import React, { useState } from "react";
import Conversation from "./Conversation";
import useGetConverstion from "../../hooks/useGetConverstion";
import { getRandomEmoji } from "../../utils/emojis";
import useScrollbar from "../../hooks/useScrollbar";

function Conversations() {
  const { loading, conversations } = useGetConverstion();
  console.log("CONVERSTIONS:", conversations);
  const { scrollBarLogic, onMouseEnter, onMouseLeave } = useScrollbar();

  return (
    <div
      className={` py-2 flex flex-col overflow-auto mt-5 ${scrollBarLogic} `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1} //using this so we dont show divider for last chat in the chat list
        />
      ))}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
}

export default Conversations;
