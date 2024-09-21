//zustand is a labilary used for global state. its working is same as usecontext

import { create } from "zustand";

const useConverstion = create((set) => ({
  selectedConverstion: null,
  setSelectedConverstion: (selectedConverstion) => set({ selectedConverstion }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConverstion;
