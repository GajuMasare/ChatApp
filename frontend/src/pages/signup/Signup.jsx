import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import userSignup from "../../hooks/userSignup";

const Signup = () => {
  const [inputs, setinputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = userSignup();

  const handleCheckboxChange = (gender) => {
    setinputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto  grayBgColor rounded-3xl blur">
      <div className="w-full p-6 rounded-lg shadow-md  ">
        <h1 className="text-3-1 font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500"> Chat app</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="label-text text-sm  text-gray-300">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Gaju Masare"
              className="border rounded-xl block w-full p-3.5 pl-6 grayBgColor border-none blackBgColor text-xs font-medium"
              value={inputs.fullName}
              onChange={(e) =>
                setinputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="label-text text-sm  text-gray-300">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="gajumasare"
              className="border rounded-xl block w-full p-3.5 pl-6 grayBgColor border-none blackBgColor text-xs font-medium"
              value={inputs.userName}
              onChange={(e) =>
                setinputs({ ...inputs, userName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-sm  text-gray-300">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="border rounded-xl block w-full p-3.5 pl-6 grayBgColor border-none blackBgColor text-xs font-medium"
              value={inputs.password}
              onChange={(e) =>
                setinputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-sm  text-gray-300">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="border rounded-xl block w-full p-3.5 pl-6 grayBgColor border-none blackBgColor text-xs font-medium"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setinputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
            <GenderCheckbox
              onCheckboxChange={handleCheckboxChange}
              selectedGender={inputs.gender}
            />
            <Link
              to="/login"
              className="text-xs  text-gray-400  hover:text-indigo-500 mt-5 inline-block"
            >
              Already have an account?
            </Link>
            <div>
              <button
                className="btn btn-block btn-md mt-2 bg-indigo-800  text-center text-gray-300"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner "></span>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
