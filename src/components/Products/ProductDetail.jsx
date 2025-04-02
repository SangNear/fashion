import React, { useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const ProductDetail = () => {
  const [imgSelected, setImgSelected] = useState(
    "https://picsum.photos/500/500?random=1"
  );
  const [size, setSize] = useState("S");
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn lên đầu trang khi vào trang chi tiết
  }, [id]);
  const selectedProduct = {
    name: "Stylish Jacket",
    price: 120,
    originalPrice: 150,
    description:
      "This is a stylish jacket, perfect for any occasionWhether you're heading to a casual outing, a formal event, or just running errands, this jacket adds a touch of elegance to your outfit",
    brand: "FashionBrand",
    material: "Leather",
    sizes: ["S", "M", "L", "XL"],
    colors: ["red", "blue", "green"],
    images: [
      {
        url: "https://picsum.photos/500/500?random=1",
        altText: "Stylish Jacket",
      },
      {
        url: "https://picsum.photos/500/500?random=2",
        altText: "Stylish Jacket 2",
      },
    ],
  };
  const similarProducts = [
    {
      _id: 1,
      name: "Product 1",
      price: 100,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
        },
      ],
    },
    {
      _id: 2,
      name: "Product 2",
      price: 200,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
        },
      ],
    },
    {
      _id: 3,
      name: "Product 3",
      price: 300,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
        },
      ],
    },
    {
      _id: 4,
      name: "Product 4",
      price: 100,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
        },
      ],
    },
  ];
  const placeholderProducts = [
    {
      _id: 1,
      name: "Product 1",
      price: 100,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
        },
      ],
    },
    {
      _id: 2,
      name: "Product 2",
      price: 200,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
        },
      ],
    },
    {
      _id: 3,
      name: "Product 3",
      price: 300,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
        },
      ],
    },
    {
      _id: 4,
      name: "Product 4",
      price: 100,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
        },
      ],
    },
    {
      _id: 5,
      name: "Product 5",
      price: 100,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
        },
      ],
    },
    {
      _id: 6,
      name: "Product 6",
      price: 200,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
        },
      ],
    },
    {
      _id: 7,
      name: "Product 7",
      price: 300,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
        },
      ],
    },
    {
      _id: 8,
      name: "Product 8",
      price: 100,
      images: [
        {
          url: "https://picsum.photos/500/500?random=8",
        },
      ],
    },
  ];
  const handleSelectedImg = (e) => {
    setImgSelected(e.target.currentSrc);
  };
  const handleDecrease = () => {
    if (quantity >= 2) {
      setQuantity(quantity - 1);
    }
  };
  const handleCrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (!color) {
      toast.error("Please select size before add to cart!", {
        duration: 1000,
      });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Product added to cart!");
      setLoading(false);
    }, 2000);
  };
  return (
    <section className="p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="hidden md:flex md:flex-col gap-4">
            {selectedProduct.images.map((thumb, index) => (
              <img
                key={index}
                src={thumb.url}
                alt={thumb.altText}
                className={`w-20 h-20 object-cover rounded-lg ${
                  thumb.url === imgSelected ? "border-4 border-black" : ""
                }`}
                onClick={handleSelectedImg}
              />
            ))}
          </div>

          {/* Main picture */}
          <div className="w-full md:w-1/2">
            <div className="mb-4">
              <img
                src={imgSelected}
                alt="Pic"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="flex gap-4 md:hidden justify-center">
            {selectedProduct.images.map((thumb, index) => (
              <img
                key={index}
                src={thumb.url}
                alt={thumb.altText}
                className={`w-20 h-20 object-cover rounded-lg ${
                  thumb.url === imgSelected ? "border-4 border-black" : ""
                }`}
                onClick={handleSelectedImg}
              />
            ))}
          </div>

          {/* Description */}
          <div className=" w-full md:w-1/2 h-[550px] flex flex-col justify-between">
            <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
            <span className="text-sm text-gray-500">
              $ {selectedProduct.price}
            </span>
            <p className="text-md text-gray-400">
              {selectedProduct.description}
            </p>
            <p>Color:</p>
            <div className="flex gap-2">
              {selectedProduct.colors.map((col) => (
                <button
                  key={col}
                  onClick={() => setColor(col)}
                  className={`w-8 h-8 rounded-full p-4 ${
                    color === col ? "border-4 border-white" : ""
                  }`}
                  style={{
                    backgroundColor: col,
                    filter: "brightness(0.5)",
                  }}
                ></button>
              ))}
            </div>
            <p>Size:</p>
            <div className="flex gap-2">
              {selectedProduct.sizes.map((item) => (
                <button
                  onClick={() => setSize(item)}
                  key={item}
                  className={`w-8 h-8 border border-gray-300 text-xs ${
                    size === item ? "bg-black text-white" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <p>Quantity: </p>
            <div className="flex gap-3 items-center">
              <button className="w-6 h-8 bg-gray-200 " onClick={handleDecrease}>
                -
              </button>
              <span>{quantity}</span>
              <button onClick={handleCrease} className="w-6 h-8 bg-gray-200 ">
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={loading}
              className={`bg-black rounded-md w-full text-white py-2 uppercase ${
                loading ? "bg-gray-300" : ""
              }`}
            >
              {loading ? "Adding..." : "Add to cart"}
            </button>

            <div className="flex flex-col gap-3 ">
              <h4 className="font-bold text-xl">Characteristics</h4>
              <div className="grid grid-cols-2">
                <h5 className="text-md text-gray-500">Material</h5>
                <h5 className="text-md text-gray-500">Brand</h5>
                <h5 className="text-md text-gray-500">Urban Chic</h5>
                <h5 className="text-md text-gray-500">Cotton</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h2 className="text-2xl text-center font-medium mb-4">
          You may also like
        </h2>
        <ProductGrid products={similarProducts} />

        <div className="container mx-auto">
          <h2 className="text-2xl text-center font-medium mb-4">
            Top wears for woman
          </h2>
          <ProductGrid products={placeholderProducts} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
