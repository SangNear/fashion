import React, { useState } from "react";
import PaypalButton from "../components/Cart/PaypalButton";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
  const [checkoutId, setCheckoutId] = useState(null);
  const navigate = useNavigate();
  const cart = {
    product: [
      {
        name: "Stylish Jacket",
        size: "M",
        color: "Black",
        price: 120,
        image: "https://picsum.photos/150?random=1",
      },
      {
        name: "Casual Sneakers",
        size: "41",
        color: "Black",
        price: 194,
        image: "https://picsum.photos/150?random=2",
      },
    ],
    totalPrice: 314,
  };
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });
  //   const handleCheckout = (e) => {
  //     e.preventDefault();
  //     console.log(shippingAddress);
  //   };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setShippingAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmitCheckout = (e) => {
    e.preventDefault();
    setCheckoutId(123);
  };
  const handlePaymentSuccess = (details) => {
    console.log("Payment Successfully", details);
    navigate("/order-confirmation");
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-auto max-w-7xl py-10 px-6">
      {/* Left Side */}
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-light uppercase">Checkout</h1>
        <div className="flex flex-col gap-3">
          <h2>Contact Detail</h2>
          <form onSubmit={handleSubmitCheckout}>
            <div className="mb-4">
              <label className="mr-4 block text-gray-700">Email</label>
              <input
                type="email"
                value="nguyenlamsang2004@gmail.com"
                disabled
                className="p-2 bg-gray-100 w-full border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4 flex items-center gap-2">
              <div className="w-full">
                <label className="mr-4 block text-gray-700 text-sm">
                  First name
                </label>
                <input
                  value={shippingAddress.firstName}
                  onChange={handleChange}
                  type="text"
                  name="firstName"
                  className="p-2  w-full border border-gray-300 rounded-lg"
                />
              </div>
              <div className="w-full">
                <label className="mr-4 block text-gray-700 text-sm">
                  Last Name
                </label>
                <input
                  value={shippingAddress.lastName}
                  onChange={handleChange}
                  name="lastName"
                  type="text"
                  className="p-2  w-full border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="mr-4 block text-gray-700 text-sm">
                Address
              </label>
              <input
                value={shippingAddress.address}
                onChange={handleChange}
                name="address"
                type="text"
                className="p-2  w-full border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4 flex items-center gap-2">
              <div className="w-full">
                <label className="mr-4 block text-gray-700 text-sm">City</label>
                <input
                  value={shippingAddress.city}
                  onChange={handleChange}
                  name="city"
                  type="text"
                  className="p-2  w-full border border-gray-300 rounded-lg"
                />
              </div>
              <div className="w-full">
                <label className="mr-4 block text-gray-700 text-sm">
                  Postal Code
                </label>
                <input
                  value={shippingAddress.postalCode}
                  onChange={handleChange}
                  name="postalCode"
                  type="text"
                  className="p-2  w-full border border-gray-300 rounded-lg"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="mr-4 block text-gray-700 text-sm">
                Country
              </label>
              <input
                value={shippingAddress.country}
                onChange={handleChange}
                name="country"
                type="text"
                className="p-2  w-full border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="mr-4 block text-gray-700 text-sm">Phone</label>
              <input
                value={shippingAddress.phone}
                onChange={handleChange}
                name="phone"
                type="text"
                className="p-2  w-full border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              {checkoutId ? (
                <div>
                  <h2>Pay with Paypal</h2>
                  <PaypalButton
                    amount={2004}
                    onSuccess={handlePaymentSuccess}
                    onError={(err) => alert("Payment has error")}
                  />
                </div>
              ) : (
                <button
                  type="submit"
                  className="bg-black text-white py-4 rounded-lg w-full"
                >
                  Continue to Payment
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      {/* Right Side */}
      <div className="bg-cyan-50 px-4  rounded-lg">
        <h1 className="border-gray-300 border-b py-3">Order Summary</h1>
        <div className="flex flex-col gap-2 w-full py-3 border-gray-300 border-b">
          {cart.product.map((item, index) => (
            <div key={index} className="flex gap-2 w-full">
              <img
                src={item.image}
                alt={item.name}
                className="object-cover w-20 h-24"
              />
              <div className="flex flex-col">
                <h3>{item.name}</h3>
                <span className="text-sm text-gray-500">Size: {item.size}</span>
                <span className="text-sm text-gray-500">
                  Color: {item.color}
                </span>
              </div>
              <div className="flex-grow text-right">${item.price}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 py-3 border-gray-300 border-b">
          <div className="flex justify-between items-center">
            <span>Subtotal</span>
            <span>$120</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Shipping</span>
            <span>FREE</span>
          </div>
          
        </div>
        <div className="flex justify-between mt-3">
            <span className="font-bold">Total</span>
            <p>${cart.totalPrice?.toLocaleString()}</p>
          </div>
      </div>
    </div>
  );
};

export default Checkout;
