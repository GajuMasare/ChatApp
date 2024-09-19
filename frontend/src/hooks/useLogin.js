import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setloading] = useState();
  const { setauthUser } = useAuthContext();

  const login = async (userName, password) => {
    const success = handleInputErrors({
      userName,
      password,
    });
    if (!success) return;

    setloading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, password }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setauthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setloading(false);
    }
  };

  return { loading, login };
};

export default useLogin;

function handleInputErrors({ userName, password }) {
  if (!userName || !password) {
    toast.error("Please fill all the fields you mother fucker");
    return false;
  }
  return true;
}
