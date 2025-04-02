import React from "react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";
import { useNavigate } from "react-router-dom";
const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate()
  const handleCheckout = () => {
    navigate("checkout")
    toggleCartDrawer()
  }
  return (
    <div
      className={`fixed w-3/4 md:w-1/3 bg-white shadow-lg h-full top-0 right-0 transition-all duration-300 flex flex-col z-10 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end px-4 py-2">
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="h-6 w-6 text-gray-600 cursor-pointer" />
        </button>
      </div>
      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4 ">Your cart</h2>
        <CartContents />
      </div>

      <div className="sticky bottom-0 p-4 bg-white">
        <button onClick={handleCheckout} className="bg-black text-white w-full rounded-lg text-center py-3 hover:bg-gray-800 transition-all duration-500 cursor-pointer">
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-center text-gray-500">
          Shipping, taxes, and discount codes calculated at checkout
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
