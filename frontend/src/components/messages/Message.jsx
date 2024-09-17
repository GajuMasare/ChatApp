import React from "react";

function Message() {
  return (
    <>
      <div className="md:min-w-[450] flex-col">
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png"
                alt="tailwind css chat bubble component"
              />
            </div>
          </div>
          <div className="chat-bubble text-white bg-blue-500">
            Hi! whats up mother fucker!
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
