import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogout = () => {
  const [loading, setloading] = useState(false);
  const { setauthUser } = useAuthContext();

  const logout = async () => {
    setloading(true);
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.removeItem("chat-user");
      setauthUser(null);
    } catch (error) {
      toast.error(error.meessage);
    } finally {
      setloading(false);
    }
  };
  return { loading, logout };
};

export default useLogout;
