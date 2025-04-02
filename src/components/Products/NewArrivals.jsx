import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(true);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "3",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "4",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "5",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "6",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Stylish Jacket",
        },
      ],
    },
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    console.log({
      targetX: e.pageX,
      fin: e.pageX - scrollRef.current.offsetLeft
    });
    
  };
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behaviour: "smooth" });
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;

    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScroll =
        leftScroll + container.clientWidth < container.scrollWidth;

      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScroll);
    }

    console.log({
      scrollLeft: container.scrollLeft,
      clientWidth: container.clientWidth,
      containerScrollWidth: container.scrollWidth,
      offsetLeft: scrollRef.current.offsetLeft,
    });
  };
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
    }
  }, []);

  return (
    <section>
      <div className="container mx-auto  space-x-4 text-center gap-5 relative mb-10 w-full">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tighter">
          Explore New Arrivals
        </h2>
        <p className="text-gray-500 text-sm text-center">
          Discover the latest styles straight off the runwa, freshly added to
          keep your wardrobe on the cutting edge of fashion.
        </p>

        <div className="absolute right-0 top-[20px] flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`border border-gray-500 rounded-sm ${
              canScrollLeft
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-none"
            }`}
          >
            <IoIosArrowRoundBack className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`border border-gray-500 rounded-sm ${
              canScrollRight
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-none"
            }`}
          >
            <IoIosArrowRoundForward className="w-6 h-6" />
          </button>
        </div>

        {/* Scroll content */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className="container mx-auto w-9/10  overflow-x-scroll flex space-x-6 relative "
        >
          {newArrivals.map((product) => (
            <div
              key={product._id}
              className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33%] relative mb-2"
            >
              <img
                src={product.images[0]?.url}
                alt={product.images[0]?.altText || product.name}
                className="w-full h-[500px] object-cover"
                draggable="false"
              />
              <div className="absolute bottom-0 left-0 backdrop-blur-md text-white p-4 rounded-b-lg">
                <Link to={`product/${product._id}`} className="block">
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="mt-1">$ {product.price}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
