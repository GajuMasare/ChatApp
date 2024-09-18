import React, { useState } from "react";
import toast from "react-hot-toast";

const userSignup = () => {
  const [loding, setloding] = useState(false);

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;

    setloding(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setloding(false);
    }
  };
  return { loding, signup };
};

export default userSignup;

function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill all the fields you mother fucker");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("passwords dont you dumb ass");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password should be at least 6 characters");
    return false;
  }

  return true;
}
