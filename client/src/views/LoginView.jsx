import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitUserData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3500/login", {
        email: email,
        password: password,
      });
      console.log(res.data);
      if (res.data.error) {
        alert(res.data.error);
      } else {
        // Save the access token to sessionStorage upon successful login
        sessionStorage.setItem("accessToken", res.data);
        navigate("/overview");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="">
        <div className="flex-1 flex justify-center items-center mt-60">
          <div className="max-w-md w-full space-y-8 p-8 bg-slate-300 rounded-lg shadow-md">
            <h2 className="text-3xl font-extrabold text-gray-900">Sign In</h2>
            <form className="mt-8 space-y-6" onSubmit={submitUserData}>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
                <input
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  type="email"
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </label>
              <br />
              <label className="block text-sm font-medium text-gray-700">
                Password
                <input
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  type="password"
                  name="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
              </label>
              <br />
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-700 hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                onClick={submitUserData}
              >
                Log In
              </button>
              <div>
                Don't have an account?{" "}
                <Link to={`/register_user`}>Register here</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
