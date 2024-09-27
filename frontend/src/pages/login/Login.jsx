import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(userName, password);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto grayBgColor rounded-3xl blur">
      <div className="w-full p-6 rounded-lg   ">
        <h1 className="text-3x1 font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className=" label-text text-sm  text-gray-300">
                UserName
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter unsername"
              className="border rounded-xl block w-full p-3.5 pl-6 grayBgColor border-none blackBgColor text-xs font-medium"
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-text text-sm  text-gray-300">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="border rounded-xl block w-full p-3.5 pl-6 grayBgColor border-none blackBgColor text-xs font-medium"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className="text-xs  text-gray-400  hover:text-indigo-500 mt-5 inline-block"
          >
            "Don't" have an account?
          </Link>
          <div>
            <button
              className="btn btn-block btn-md mt-2 bg-indigo-800  text-center text-gray-300"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner "></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
