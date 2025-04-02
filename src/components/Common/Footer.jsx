import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto bg-white px-4 gap-8 grid grid-cols-1 md:grid-cols-4 ">
        <div className="flex flex-col ">
          <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
          <p className="text-gray-500 mb-4">
            Be the first to hear about new products, exclusive events, and
            online offers.
          </p>
          <p className="text-gray-500 mb-4">
            Sign up and get 10% off your first order.
          </p>

          <form className="flex">
            <input
              type="text"
              className="rounded-l-md focus:outline-none border border-gray-500 p-2 "
              placeholder="Enter your email..."
            />
            <button className="bg-black py-2 px-2 text-white rounded-r-md text-xs">
              Subcribes
            </button>
          </form>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
          <div className="flex flex-col gap-2">
            <p className="text-md text-gray-700">Men's Top Wear</p>
            <p className="text-md text-gray-700">Woman's Top Wear</p>
            <p className="text-md text-gray-700">Men's Bottom Wear</p>
            <p className="text-md text-gray-700">Woman's Bottom Wear</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg text-gray-800 mb-4">Support</h3>
          <div className="flex flex-col gap-2">
            <p className="text-md text-gray-700">Contact Us</p>
            <p className="text-md text-gray-700">About Us</p>
            <p className="text-md text-gray-700">FAQs</p>
            <p className="text-md text-gray-700">Features</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4 mb-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <TbBrandMeta className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <IoLogoInstagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <RiTwitterXLine className="h-5 w-5" />
            </a>
          </div>
          <p className="text-gray-500">Call Us</p>
          <p>
            <FiPhoneCall className="inline-block mr-2" />
            0123-456-789
          </p>
        </div>
      </div>
      {/* Footer Bottom */}

      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
        <p className="text-gray-500 text-sm tracking-tighter text-center">
          @ 2025, Lam Sang. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
