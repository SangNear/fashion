import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import AdminSidebar from "../Admin/AdminSidebar";
import { Outlet } from "react-router-dom";
const AdminLayout = () => {
  
  const [isSidebarOpen, setIsSideOpen] = useState(false);
  const toggleSideBar = () => {
    setIsSideOpen(!isSidebarOpen);
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      <div className="flex md:hidden p-4 bg-gray-900 text-white z-10">
        <button>
          <FaBars size={24} onClick={toggleSideBar} />
        </button>
        <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
      </div>

      {/* OVERLAY FOR MOBILE SIDEBAR */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black opacity-50 md:hidden"
          onClick={toggleSideBar}
        ></div>
      )}

      <div
        className={`min-h-screen bg-gray-900 w-64 md:relative absolute transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-300 z-20 md:translate-x-0 md:static md:block z-20`}
      >
        <AdminSidebar />
      </div>

      {/* Content */}
      <main className="flex-grow overflow-auto p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
