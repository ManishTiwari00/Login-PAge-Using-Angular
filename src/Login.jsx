import React from "react";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    
    <div>
    <h1 className="text-4xl text-white font-bold text-center mb-6">LEAVE MANAGEMENT SYSTEM</h1>
      <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative" >
      <h3 className="text-4xl text-white  text-center mb-6">Login</h3>
        <form>
         
          <div className="relative my-4">
            <input type="email" id="email" className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
            <label htmlFor="email" className="absolute text-sm text-white duration-300 left-0 transition-transform transform translate-y-6 scale-75 top-1/4 z-10 origin-[0] peer-focus-left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email</label>
           
          </div>

          <div className="relative my-4">
            <input type="password" id="password" className="block w-72 py-2.3 px-0 text-small text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
            <label htmlFor="password" className="absolute text-sm text-white duration-300  left-0 -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus-left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Password</label>
          </div>
          <br></br>

          <div className="mb-4">
            <div className="flex items-center">
              <input type='checkbox' id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-white">Remember Me</label>
            </div>
            <div className="flex justify-between">
              <span className="text-white cursor-pointer"><Link to="/forgot-password-reset">Forgot Password</Link></span>
              <span className="text-white cursor-pointer"><Link to="/admin-login">Admin?</Link></span>
            </div>
          </div>
          <button type='submit' className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-500 hover:text-white py-2 transition-colors duration-300"><Link to="/all-students">Login</Link></button>
        </form>
        <span className="text-white mt-4 block">New Here? <Link to="/register" className="text-white-500 underline  text-white-800 hover:text-yellow-500 transition-colors duration-300">Create an Account.</Link></span>
      </div>
    </div>
  );
}

export default Login;
