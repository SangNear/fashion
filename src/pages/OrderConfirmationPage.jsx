import React from "react";

const OrderConfirmationPage = () => {
  const checkout = {
    _id: "12323",
    createdAt: new Date(),
    checkoutItems: [
      {
        productID: "1",
        name: "Jacket",
        color: "black",
        size: "M",
        price: 150,
        quantity: 1,
        image: "https://picsum.photos/150?random=1",
      },
      {
        productID: "2",
        name: "Colorus janu",
        color: "red",
        size: "M",
        price: 20,
        quantity: 1,
        image: "https://picsum.photos/150?random=2",
      },
    ],
    shippingAddress: {
      address: "9/20 thanh my loi",
      city: "Thu Duc",
      country: "VietNam",
    },
  };
  const calculatEstimateDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10);
    return orderDate.toLocaleDateString();
  };
  return (
    <div className="max-w-4xl bg-white text-white mx-auto p-6 ">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Thank you for your order!
      </h1>
      {checkout && (
        <div className="p-6  border  border-gray-300 rounded-lg">
          <div className="flex justify-between mb-20">
            <div>
              <h2 className="text-xl font-bold text-black">
                Order ID: {checkout._id}
              </h2>
              <p className="text-gray-500 text-sm">
                Order date: {new Date(checkout.createdAt).toLocaleDateString()}
              </p>
            </div>

            <div>
              <p className="text-emerald-700 text-sm">
                Estimated Delivery:{" "}
                {calculatEstimateDelivery(checkout.createdAt)}
              </p>
            </div>
          </div>
          <div className="mb-20">
            {checkout.checkoutItems.map((item) => (
              <div key={item.productID} className="flex item-center mb-4">
                <img
                  src={item.image}
                  alt=""
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                  <h4 className="text-md font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {item.color} | {item.size}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-md">${item.price}</p>
                  <p className="text-sm text-gray-500 ">Qtu: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmationPage;
