import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function RegisterUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const submitUserData = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3500/api/employee", {
        name: name,
        email: email,
        role: role,
        password: password,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex-1 bg-greay-200 flex justify-left items-center">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-sm border-2">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Register Team Member
          </h2>
          <form className="mt-8 space-y-2" onSubmit={submitUserData}>
            <label className="block text-sm font-medium text-gray-700">
              Name
              <input
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                type="text"
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </label>
            <br />
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
            <label className="block text-sm font-medium text-gray-700">
              Role
              <select
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="role"
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              >
                <option value="admin">admin</option>
                <option value="super admin">super admin</option>
                <option value="manager">manager</option>
                <option value="support">agent</option>
              </select>
            </label>
            <br />
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-700 hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
              onClick={submitUserData}
            >
              Register User
            </button>
            <div>
              {/* Already have an account? <Link to={`/login`}>Sign in here</Link> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
