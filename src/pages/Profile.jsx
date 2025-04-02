import React from "react";
import MyOrder from "../components/Common/MyOrder";

const Profile = () => {
  return (
    <div className="min-h-screen px-4 mt-5 md:px-6">
      <div className="flex flex-col md:flex-row  gap-5">
        {/* Left section */}
        <div className="h-[350px] flex flex-col  w-full md:w-1/3 lg:w-1/4 p-4 gap-3 shadow-2xl rounded-lg">
          <h2 className="font-bold text-3xl">Admin User</h2>
          <span className="text-sm text-gray-500">admin@example.com</span>
          <button className="py-2 w-full text-white rounded-md bg-rabbit-red">
            Logout
          </button>
        </div>

        {/* Right section */}
        <div className="flex-grow flex flex-col gap-5">
          <h2 className="font-bold text-3xl">My Orders</h2>
            <MyOrder/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
