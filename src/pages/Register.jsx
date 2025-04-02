import React from "react";
import register from "../assets/register.webp";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="flex">
      <div className="w-1/2 bg-white flex items-center justify-center h-auto">
        <div className="border border-gray-300 rounded-lg p-8 flex flex-col gap-4">
          <h2 className="text-lg font-light text-center">Rabbit</h2>
          <h2 className="text-2xl font-bold text-center">Hey There!</h2>
          <p className="font-medium">
            Enter your username and password to Login
          </p>
          <form action="submit" className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 relative">
              <label className="font-bold">Name</label>
              <input
                className="border border-gray-500 p-2 rounded-lg"
                type="text"
                placeholder="Enter your Name"
              />
            </div>
            <div className="flex flex-col gap-2 relative">
              <label className="font-bold">Email</label>
              <input
                className="border border-gray-500 p-2 rounded-lg"
                type="email"
                placeholder="Enter your email address"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold">Password</label>
              <input
                className="border border-gray-500 p-2 rounded-lg"
                type="password"
                placeholder="Enter your password address"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg py-2 bg-black text-white mt-4 "
            >
              Sign Up
            </button>
          </form>
          <p className="text-center">
            You already have an account{" "}
            <Link to="/register" className="text-blue-400">
              Register
            </Link>
          </p>
        </div>
      </div>
      <div className="w-1/2 h-[700px]">
        <img
          src={register}
          alt="loginPic"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Register;
