import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filters, setFilters] = useState(() => {
    const params = Object.fromEntries(searchParams.entries());
  
    return {
      category: params.category || "",
      gender: params.gender || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice ? Number(params.minPrice) : 0,
      maxPrice: params.maxPrice ? Number(params.maxPrice) : 100,
    };
  });

  const [priceRange, setPriceRange] = useState([0, 100]);

  const categories = ["Top Wear", "Bottom Wear"];

  // const color = [
  //   "Red",
  //   "Blue"
  //   "Black"
  //   "Green"
  //   "Yellow"
  //   "Gray"
  //   "White"
  //   ""
  //   "Blue"
  // ]

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = [
    "Cotton",
    "Wool",
    "Denim",
    "Polyester",
    "Silk",
    "Linen",
    "Fleece",
  ];
  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Street Style",
    "Beach Breeze",
    "Fashionista",
    "ChicStyle",
  ];

  const genders = ["Men", "Women"];
  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    console.log({ name, value, checked, type });

    let newFilters = { ...filters };

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else newFilters[name] = value;
    setFilters(newFilters);
    console.log(newFilters);

    updateURLParams(newFilters);
  };
  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();

    for (const [key, value] of Object.entries(newFilters)) {
      if (Array.isArray(value) && value.length > 0) {
        params.set(key, value.join(","));
      } else if (value) {
        params.set(key, value);
      }
    }
    console.log(params);
    setSearchParams(params);

    navigate(`?${params.toString()}`);
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      {/* Category */}

      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center">
            <input
              type="radio"
              value={category}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400"
              name="category"
            />
            <span>{category}</span>
          </div>
        ))}
      </div>

      {/* Gender */}

      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Gender</label>
        {genders.map((gender) => (
          <div key={gender} className="flex items-center">
            <input
              value={gender}
              onChange={handleFilterChange}
              type="radio"
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400"
              name="gender"
            />
            <span>{gender}</span>
          </div>
        ))}
      </div>

      {/* Size */}

      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center">
            <input
              onChange={handleFilterChange}
              type="checkbox"
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400"
              name="size"
              value={size}
            />
            <span>{size}</span>
          </div>
        ))}
      </div>

      {/* Material */}

      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Material</label>
        {materials.map((material) => (
          <div key={material} className="flex items-center">
            <input
              type="checkbox"
              onChange={handleFilterChange}
              value={material}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400"
              name="material"
            />
            <span>{material}</span>
          </div>
        ))}
      </div>

      {/* Brands */}

      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Brand</label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center">
            <input
              type="checkbox"
              onChange={handleFilterChange}
              value={brand}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400"
              name="brand"
            />
            <span>{brand}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
