import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { RiCloseLine } from "react-icons/ri";
const Searchbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const handleOpenForm = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  const handleSearch = (e) => {
    e.preventDefault();

    console.log("data:", searchTerm);
    setIsOpen(false)
    setSearchTerm("")
  };
  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto -top-100"
      }`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className="relative flex items-center justify-center w-full transition-all"
        >
          <div className="relative w-1/2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="w-full bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg placeholder:text-gray-700 focus:outline-none"
            />
            {/* button search */}
            <button type="submit" className="absolute right-4 top-1/5">
              <HiMagnifyingGlass className="w-6 h-6" />
            </button>

            {/* button close */}
            <button
              onClick={handleOpenForm}
              className="absolute -right-8 top-0 transform -translate-y-0.5 cursor-pointer"
            >
              <RiCloseLine className="h-6 w-6 " />
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={handleOpenForm}
          className="max-md:hidden cursor-pointer"
        >
          <HiMagnifyingGlass className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default Searchbar;
