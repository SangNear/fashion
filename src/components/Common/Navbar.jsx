import React from "react";
import { Link } from "react-router-dom";
import { IoMdMale } from "react-icons/io";
import { IoMdFemale } from "react-icons/io";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
  HiMagnifyingGlass,
} from "react-icons/hi2";
import Searchbar from "./Searchbar";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navbarMobile, setNavbarMobile] = useState(false);
  const toggleNavbarMobile = () => {
    setNavbarMobile(!navbarMobile);
  };
  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <Link to="/" className="text-2xl font-medium">
            Rabbit
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-3 ">
          <Link
            to="collection/all"
            className="uppercase text-gray-700 hover:text-black text-sm font-medium"
          >
            men
          </Link>
          <Link
            to="#"
            className="uppercase text-gray-700 hover:text-black text-sm font-medium"
          >
            woman
          </Link>
          <Link
            to="#"
            className="uppercase text-gray-700 hover:text-black text-sm font-medium"
          >
            top wear
          </Link>
          <Link
            to="#"
            className="uppercase text-gray-700 hover:text-black text-sm font-medium"
          >
            bottom wear
          </Link>
        </div>
        <div className="flex items-center gap-4 ">
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6" />
          </Link>

          <button
            className="hover:text-black relative"
            onClick={toggleCartDrawer}
          >
            <HiOutlineShoppingBag className="h-6 w-6" />
            <span className="absolute -top-1 bg-rabbit-red text-white text-xs rounded-full px-2 py-0.5">
              4
            </span>
          </button>

          {/* Button toggle navbarMobile */}
          <button
            onClick={toggleNavbarMobile}
            className="hover:text-black relative md:hidden"
          >
            <HiBars3BottomRight className="w-6 h-6" />
          </button>

          <div className="overflow-hidden">
            <Searchbar />
          </div>
        </div>
        <CartDrawer
          drawerOpen={drawerOpen}
          toggleCartDrawer={toggleCartDrawer}
        />
      </nav>

      {/* Mobile Navbar */}

      <div
        className={`fixed h-full w-3/4 bg-white shadow-xl left-0 top-0 flex flex-col transition-all duration-300 z-50 ${
          navbarMobile ? "translate-x-0" : "-translate-x-500"
        }`}
      >
        <div className="flex justify-end px-4 py-2">
          <button onClick={toggleNavbarMobile}>
            <IoMdClose className="h-6 w-6 text-gray-600 cursor-pointer" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-bold border-b-gray-300 border-b">
            Menu
          </h2>
          <nav className="flex flex-col space-x-4 mt-5 gap-5">
            <Link
              to="#"
              className="uppercase text-gray-700 hover:text-black text-sm font-medium"
            >
              
              men
            </Link>
            <Link
              to="#"
              className="uppercase text-gray-700 hover:text-black text-sm font-medium"
            >
              woman
            </Link>
            <Link
              to="#"
              className="uppercase text-gray-700 hover:text-black text-sm font-medium"
            >
              top wear
            </Link>
            <Link
              to="#"
              className="uppercase text-gray-700 hover:text-black text-sm font-medium"
            >
              bottom wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
