import React from "react";
import Hero from "../components/Products/Hero";
import GenderCollection from "../components/Products/GenderCollection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetail from "../components/Products/ProductDetail";
import FeaturedCollection from "../components/Products/FeaturedCollection";
const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollection />
      <NewArrivals />
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetail />
      <FeaturedCollection/>
    </div>
  );
};

export default Home;
