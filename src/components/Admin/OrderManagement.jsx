import React from "react";
import { Link } from "react-router-dom";
const OrderManagement = () => {
  const orders = [
    {
      _id: 122312312,
      user: {
        name: "John Doe",
      },
      totalPrice: 110,
      status: "Processing",
    },
  ];
  const handleStatusChange = (orderId, status) => {
    console.log({
      id: orderId,
      status,
    });
  };
  return (
    <div className="max-w-7xl p-6">
      <h1 className="text-3xl font-bold mb-6">ORDER MANAGEMENT</h1>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full border border-gray-200 shadow-md rounded-lg">
          <thead className="bg-gray-100 rounded-lg">
            <tr>
              <th className="p-3 text-left ">Order ID</th>
              <th className="p-3 ">Customer</th>
              <th className="p-3 ">Total Price</th>
              <th className="p-3 ">Status</th>
              <th className="p-3 ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item) => (
              <tr
                key={item._id}
                //   onClick={() => handleOrderDetail(item._id)}
                className="bg-white border-b-gray-200 border-b cursor-pointer "
              >
                <td className="p-3 ">{item._id}</td>
                <td className="p-3 ">{item.user.name}</td>
                <td className="p-3 text-center">{item.totalPrice}</td>

                <td className="p-3 text-center">
                  <select
                    value={orders.status}
                    onChange={(e) =>
                      handleStatusChange(item._id, e.target.value)
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                  >
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
                <td className="p-3 flex justify-center gap-2">
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    onClick={() => handleStatusChange(item._id, "Delivered")}
                  >
                    Mark as Delivered
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

export default OrderManagement;
