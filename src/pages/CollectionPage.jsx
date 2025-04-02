import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Common/FilterSidebar";
import SortOptions from "../components/Products/SortOptions"
import ProductGrid from "../components/Products/ProductGrid"
const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const handleOpenFilterSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  const handleCLickOutSide = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSideBarOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleCLickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleCLickOutSide);
    };
  }, []);
  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: 1,
          name: "Product 1",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=1",
            },
          ],
        },
        {
          _id: 2,
          name: "Product 2",
          price: 200,
          images: [
            {
              url: "https://picsum.photos/500/500?random=2",
            },
          ],
        },
        {
          _id: 3,
          name: "Product 3",
          price: 300,
          images: [
            {
              url: "https://picsum.photos/500/500?random=3",
            },
          ],
        },
        {
          _id: 4,
          name: "Product 4",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=4",
            },
          ],
        },
        {
          _id: 5,
          name: "Product 5",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=5",
            },
          ],
        },
        {
          _id: 6,
          name: "Product 6",
          price: 200,
          images: [
            {
              url: "https://picsum.photos/500/500?random=6",
            },
          ],
        },
        {
          _id: 7,
          name: "Product 7",
          price: 300,
          images: [
            {
              url: "https://picsum.photos/500/500?random=7",
            },
          ],
        },
        {
          _id: 8,
          name: "Product 8",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=8",
            },
          ],
        },
      ];
      setProducts(fetchedProducts);
    }, 1000);
  }, []);
  return (
    <div className="flex flex-col lg:flex-row">
      <div
        ref={sidebarRef}
        className={`${
          isSideBarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed w-64 inset-y-0 z-50 left-0 bg-white transition-all duration-300 overflow-y-auto lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>
      <button
        onClick={handleOpenFilterSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2" />
      </button>

      
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collections</h2>
        <SortOptions/>

        <ProductGrid products={products}/> 
      </div>
    </div>
  );
};

export default CollectionPage;
