import React, { useState } from "react";

const EditProductPage = () => {
  const [product, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    collections: "",
    meterial: "",
    gender: "",
    images: [
      {
        url: "https://picsum.photos/150?random=1",
      },
      {
        url: "https://picsum.photos/150?random=2",
      },
    ],
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleChangeImage = async (e) => {
    const file = e.target.files[0];
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
  };
  return (
    <div className="max-w-5xl mx-auto shadow-md rounded-md p-6">
      <h2 className="text-3xl font-bold mb-6">Edit Product</h2>
      <form onSubmit={handleSubmit}>
        {/* NAME */}
        <div className="mb-6">
          <label htmlFor="">Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={() => handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        {/* DESCRIPTION */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Description</label>
          <textarea
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        {/* Price */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Price</label>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        {/* Count in Stock */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Count in Stock</label>
          <input
            type="text"
            name="countInStock"
            value={product.countInStock}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        {/* SKU */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">SKU</label>
          <input
            type="text"
            name="sku"
            value={product.sku}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        {/* SIZES */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">SIZE</label>
          <input
            type="text"
            name="size"
            value={product.sizes.join(",")}
            onChange={(e) =>
              setProductData({
                ...product,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* IMAGE UPLOAD */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Upload Image</label>
          <input type="file" name="" onChange={handleChangeImage} />
          <div className="flex gap-4 mt-4">
            {product.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.url}
                  alt="Product image"
                  className="w-20 object-cover h-20 shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-400 text-white w-full py-2 rounded-lg"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
