import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MyOrder from "../components/Common/MyOrder";

const OrderDetailsPage = () => {
  const [orderDetail, setOrderDetail] = useState();
  const { id } = useParams();
  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "PayPal",
      shippingMethod: "Standard",
      shippingAddress: {
        city: "New York",
        country: "USA",
      },
      orderItems: [
        {
          productId: "1frgergegerge",
          name: "Jacket",
          price: 120,
          quantity: 1,
          image: "https://picsum.photos/150?random=1",
        },
        {
          productId: "2frgrthbdfbd",
          name: "Shirt",
          price: 122,
          quantity: 3,
          image: "https://picsum.photos/150?random=2",
        },
      ],
    };
    setOrderDetail(mockOrderDetails);
  }, [id]);
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h1 className="text-4xl font-bold mb-5">Order Details</h1>
      {!orderDetail ? (
        <p>No Item to checkout</p>
      ) : (
        <div className="p-2 border border-gray-300 rounded-lg flex flex-col gap-10">
          <div className="flex justify-between">
            <div>
              <p className="text-xl font-bold">
                Order ID: #54534t4fsdfsd4534534332
              </p>
              <span className="text-sm text-gray-500">02/16/2025</span>
            </div>
            <div className="flex flex-col gap-2 items-end">
              <p className="px-4 py-1 rounded-xl w-fit bg-green-200 text-center text-sm">
                Approved
              </p>
              <p className="px-4 py-1 w-fit rounded-xl bg-amber-100 text-center text-sm">
                Pending Delivery
              </p>
            </div>
          </div>

          {/* PAYMENT INFO */}
          <div className="flex gap-10">
            <div>
              <p className="mb-2 font-bold">Payment Info</p>
              <p>Payment Method: PayPal</p>
              <p>Status: Paid</p>
            </div>
            <div>
              <p className="mb-2 font-bold">Shipping Info</p>
              <p>Shipping Method: PayPal</p>
              <p>Address: VietName, Thu duc</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold">Product</h2>
            <table className="min-w-full border border-gray-200 shadow-md rounded-lg">
              <thead className="bg-gray-100 rounded-lg">
                <tr>
                  <th className="p-3 ">Name</th>
                  <th className="p-3 ">Price</th>
                  <th className="p-3 ">Quantity</th>
                  <th className="p-3 ">Total</th>
                </tr>
              </thead>
              <tbody>
                {orderDetail.orderItems.map((item) => (
                  <tr
                    key={item.productId}
                    className="bg-white border-b-gray-400 border-b text-center"
                  >
                    <td className="p-3 flex items-center gap-2 text-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover"
                      />
                      <Link to={`/product/${item.productId}`}>{item.name}</Link>
                    </td>

                    <td className="p-3 ">{item.price}</td>
                    <td className="p-3 ">{item.quantity}</td>
                    <td className="p-3  text-center">
                      {item.price * item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <Link to={"/my-order"} className="text-blue-500 ">Back to my Orders</Link>
    </div>
  );
};

export default OrderDetailsPage;
