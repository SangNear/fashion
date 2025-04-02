import React from "react";
import  fea  from "../../assets/featured.webp";
const FeaturedCollection = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="flex md:flex-row flex-col-reverse w-full">
        <div className="md:w-1/2 w-full px-4 py-4 bg-emerald-100 flex items-center rounded-l-lg">
          <div className="flex flex-col md:items-start items-center gap-4">
            <h2 className="text-sm font-medium  ">Comfort and Style</h2>
            <h2 className="font-bold md:text-4xl text-2xl  text-center">
              Apparel made for your everyday life
            </h2>
            <p className="text-sm text-gray-500 text-center md:text-left">
              Discover high-quality, comfotable clothing that efforlessl blends
              fashion and function. Designed to make you look and feel great
              everyday
            </p>
            <button className="py-1 px-4 rounded-lg text-white bg-black">
              Shop now
            </button>
          </div>
        </div>
        <div className="md:w-1/2 w-full h-auto">
          <img
            src={fea}
            alt="pic"
            className="w-full object-cover rounded-r-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
