import { useState } from "react";
import toast from "react-hot-toast";
import useConverstion from "../../Zustand/useConverstion";

const useSendMessage = () => {
  const [loading, setloading] = useState();
  const { messages, setMessages, selectedConverstion } = useConverstion();

  const sendMessage = async (message) => {
    setloading(true);
    try {
      const res = await fetch(`/api/messages/send/${selectedConverstion._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setloading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
