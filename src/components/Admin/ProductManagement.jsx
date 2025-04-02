import React from "react";
import { Link } from "react-router-dom";

const ProductManagement = () => {
  const products = [
    {
      _id: 1234232,
      name: "Shirt",
      price: 29.99,
      sku: "2324234231",
    },
    {
      _id: 1234233,
      name: "Jeans",
      price: 49.99,
      sku: "2324234232",
    },
    {
      _id: 1234234,
      name: "Jacket",
      price: 79.99,
      sku: "2324234233",
    },
    {
      _id: 1234235,
      name: "Sneakers",
      price: 59.99,
      sku: "2324234234",
    },
    {
      _id: 1234236,
      name: "Hat",
      price: 19.99,
      sku: "2324234235",
    },
    {
      _id: 1234237,
      name: "Socks",
      price: 9.99,
      sku: "2324234236",
    },
    {
      _id: 1234238,
      name: "Sweater",
      price: 39.99,
      sku: "2324234237",
    },
    {
      _id: 1234239,
      name: "Shorts",
      price: 24.99,
      sku: "2324234238",
    },
    {
      _id: 1234240,
      name: "Scarf",
      price: 14.99,
      sku: "2324234239",
    },
    {
      _id: 1234241,
      name: "Gloves",
      price: 12.99,
      sku: "2324234240",
    },
  ];
  return (
    <div className="max-w-7xl p-6">
      <h1 className="text-3xl font-bold mb-6">Products Management</h1>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="min-w-full border border-gray-200 shadow-md rounded-lg">
        <thead className="bg-gray-100 rounded-lg">
          <tr>
            <th className="p-3 text-left ">Name</th>
            <th className="p-3 ">Price</th>
            <th className="p-3 ">Sku</th>
            <th className="p-3 ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr
              key={item.id}
              //   onClick={() => handleOrderDetail(item._id)}
              className="bg-white border-b-gray-200 border-b cursor-pointer "
            >
              <td className="p-3 ">{item.name}</td>
              <td className="p-3 text-center">{item.price}</td>

              <td className="p-3 text-center">{item.sku}</td>
              <td className="p-3 flex justify-center gap-2">
                <Link to={`/admin/products/${item._id}/edit`} className="bg-orange-400 text-white py-2 px-4 text-sm rounded-lg">
                  Edit
                </Link>
                <button className="bg-rabbit-red text-white py-2 px-4 text-sm rounded-lg">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
    </div>
  );
};

export default ProductManagement;
