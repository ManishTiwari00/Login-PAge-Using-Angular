// AdminLogin.jsx

import React from "react";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <div>
    <h1 className="text-4xl text-white font-bold text-center mb-6">LEAVE MANAGEMENT SYSTEM</h1>
      <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
        <h1 className="text-4xl text-white font-bold text-center mb-6">Admin Login</h1>
        <form>
          <div className="relative my-4">
            <input
              type="text"
              id="adminUsername"
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""
            />
            <label htmlFor="adminUsername" className="absolute text-sm text-white duration-300 left-0 transition-transform transform translate-y-6 scale-75 top-1/4 z-10 origin-[0] peer-focus-left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Admin Username
            </label>
          </div>

          <div className="relative my-4">
            <input
              type="password"
              id="adminPassword"
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""
            />
            <label htmlFor="adminPassword" className="absolute text-sm text-white duration-300 left-0 transition-transform transform translate-y-6 scale-75 top-1/4 z-10 origin-[0] peer-focus-left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Admin Password
            </label>
          </div>

          <div className="mb-4">
            <button type="submit" className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-500 hover:text-white py-2 transition-colors duration-300">
              Admin Login
            </button>
          </div>
        </form>
        <span className="text-white mt-4 block">
          Go back to <Link to="/login" className="text-white-500 underline  text-white-800 hover:text-yellow-500 py-2 transition-colors duration-300">User Login</Link>.
        </span>
      </div>
    </div>
  );
}

export default AdminLogin;
