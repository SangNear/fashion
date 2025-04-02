import React from "react";
import woman from "../../assets/womens-collection.webp";
import man from "../../assets/mens-collection.webp";
import { Link } from "react-router-dom";
const GenderCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        <div className="relative flex-1">
          <img src={woman} alt="wm" className="h-[700px] w-full object-cover" />
          <div className="absolute bottom-8 left-8 bg-white  p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Women's Collection
            </h2>
            <Link to="/collections/all?gender=Women" className="text-gray-900 underline">Shop now</Link>
          </div>
        </div>
        <div className="relative flex-1">
          <img src={man} alt="m" className="h-[700px] w-full object-cover" />
          <div className="absolute bottom-8 left-8 bg-white  p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Men's Collection
            </h2>
            <Link to="/collections/all?gender=Men" className="text-gray-900 underline">Shop now</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollection;
