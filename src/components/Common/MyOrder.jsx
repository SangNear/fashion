import React from "react";
import { useNavigate } from "react-router-dom";

const MyOrder = () => {
  const navigate = useNavigate();
  const mockOrder = [
    {
      _id: "12345",
      createdAt: new Date(),
      shippingAddress: {
        city: "New York",
        country: "USA",
      },
      orderItems: [
        {
          name: "Product 1",
          image: "https://picsum.photos/500/500?random=1",
        },
      ],
      totalPrice: 100,
      quantity: 2,
      isPaid: true,
    },
    {
      _id: "67898",
      createdAt: new Date(),
      shippingAddress: {
        city: "New York",
        country: "USA",
      },
      orderItems: [
        {
          name: "Product 2",
          image: "https://picsum.photos/500/500?random=2",
        },
      ],
      quantity: 2,
      totalPrice: 200,
      isPaid: true,
    },
  ];
  const handleOrderDetail = (orderId) => {
    navigate(`/order/${orderId}`);
  };
  return (
    <div className="rounded-lg">
      <table className="min-w-full border border-gray-200 shadow-md rounded-lg">
        <thead className="bg-gray-100 rounded-lg">
          <tr>
            <th className="p-3 ">Image</th>
            <th className="p-3 ">Order ID</th>
            <th className="p-3 ">Created At</th>
            <th className="p-3 ">Address</th>
            <th className="p-3 ">Quantity</th>
            <th className="p-3 ">Price</th>
            <th className="p-3 ">Status</th>
          </tr>
        </thead>
        <tbody>
          {mockOrder.map((item) => (
            <tr
              key={item._id}
              onClick={() => handleOrderDetail(item._id)}
              className="bg-white border-b-gray-400 border-b cursor-pointer"
            >
              <td className="p-3 ">
                <img
                  src={item.orderItems[0].image}
                  alt={item.orderItems[0].name}
                  className="w-12 h-12 object-cover"
                />
              </td>
              <td className="p-3 ">{item._id}</td>
              <td className="p-3 ">{item.createdAt.toString()}</td>
              <td className="p-3 ">asdas</td>
              <td className="p-3  text-center">{item.quantity}</td>
              <td className="p-3  text-right">${item.totalPrice}</td>
              <td className="p-3  text-center">
                <span className="px-2 py-1 bg-green-200 text-green-800 rounded">
                  Paid
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
