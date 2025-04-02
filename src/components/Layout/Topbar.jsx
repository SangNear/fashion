import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { MdOutlineLocalPhone } from "react-icons/md";
const Topbar = () => {
  return (
    <div className="bg-rabbit-red text-white">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center space-x-4 max-lg:hidden">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="h-5 w-5" />
          </a>
        </div>
        <div className="text-sm text-center max-lg:w-full">
          <span>Chúng tôi vận chuyển đến cả thế giới - Nhanh nhất có thể</span>
        </div>
        <div className="text-sm max-lg:hidden flex items-center gap-2">
          <MdOutlineLocalPhone />
          <a href="tel:0987667872">+84 817467859</a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
