import { useEffect, useState } from "react";
import useConverstion from "../Zustand/useConverstion";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setloading] = useState();
  const { messages, setMessages, selectedConverstion } = useConverstion();

  useEffect(() => {
    const getMessages = async () => {
      setloading(true);
      try {
        const res = await fetch(`/api/messages/${selectedConverstion._id}`);
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setloading(false);
      }
    };

    if (selectedConverstion?._id) getMessages();
  }, [selectedConverstion?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessages;
