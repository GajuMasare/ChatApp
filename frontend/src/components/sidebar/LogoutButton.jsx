import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/userLogout";

function LogoutButton() {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-4 flex justify-end">
      {!loading ? (
        <BiLogOut
          className="w-5 h-5 text-gray-200 cursor-pointer hover:text-indigo-500"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
}

export default LogoutButton;
