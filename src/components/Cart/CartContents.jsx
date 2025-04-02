import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
const CartContents = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jean",
      size: "L",
      color: "blue",
      quantity: 2,
      price: 20,
      image: "https://picsum.photos/200?random=1",
    },
  ];
  return (
    <div className="flex flex-col z-50 ">
      {cartProducts.map((cartProduct) => (
        <div key={cartProduct.productId} className="w-full py-4 flex  space-x-2  border-b border-gray-200">
          <img
            src={cartProduct.image}
            alt="imgProduct"
            className="w-20 h-24 object-cover rounded-lg"
          />

          <div className="flex flex-1  flex-col justify-between  h-24">
            <h3 className="font-medium text-xl">{cartProduct.name}</h3>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">
                size: {cartProduct.size}
              </span>
              <span className="text-sm text-gray-500">|</span>
              <span className="text-sm text-gray-500">
                color: {cartProduct.color}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button className="px-1.5  border border-gray-300 text-center rounded-sm cursor-pointer">
                -
              </button>
              <span>{cartProduct.quantity}</span>
              <button className="px-1.5  border border-gray-300 text-center rounded-sm cursor-pointer">
                +
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-baseline ">
            <span>$ {cartProduct.price * cartProduct.quantity}</span>
            <button className="cursor-pointer">
              <HiOutlineTrash className="w-6 h-6 text-rabbit-red  " />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
