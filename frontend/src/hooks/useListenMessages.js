import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConverstion from "../Zustand/useConverstion";

import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConverstion();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessages");
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
