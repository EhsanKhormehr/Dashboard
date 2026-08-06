import React from "react";
import ProductCard from "./product-card";
import { Button } from "@/components/ui/button";

export const products = [
  {
    title: "Apple iPhone 15 Pro Max 256GB Natural Titanium",
    category: "Mobile",
    image: "/shop/iphone-14.png",
    price: 1199,
    oldPrice: 1299,
    discount: 8,
  },
  {
    title: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
    category: "Headset",
    image: "/shop/iphone-14.png",
    price: 349,
  },
  {
    title: "Samsung Odyssey G5 27 Inch QHD Gaming Monitor",
    category: "Monitor",
    image: "/shop/iphone-14.png",
    price: 260,
    oldPrice: 330,
    discount: 21,
  },
  {
    title: "Logitech MX Master 3S Wireless Performance Mouse",
    category: "Mouse",
    image: "/shop/iphone-14.png",
    price: 89,
  },
  {
    title: "ASUS ROG Strix G16 Gaming Laptop RTX 4060",
    category: "Laptop",
    image: "/shop/iphone-14.png",
    price: 1399,
    oldPrice: 1549,
    discount: 10,
  },
  {
    title: "Corsair Vengeance RGB 32GB DDR5 6000MHz RAM",
    category: "RAM",
    image: "/shop/iphone-14.png",
    price: 115,
  },
  {
    title: "Intel Core i7 14700K Desktop Processor",
    category: "CPU",
    image: "/shop/iphone-14.png",
    price: 385,
    oldPrice: 450,
    discount: 14,
  },
  {
    title: "Apple MacBook Air 13 Inch M3 8GB 256GB",
    category: "Laptop",
    image: "/shop/iphone-14.png",
    price: 999,
  },
];

const ProductsWrapper = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard
            category={product.category}
            image={product.image}
            price={product.price}
            title={product.title}
            discount={product.discount}
            oldPrice={product.oldPrice}
            key={product.title}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button className="py-5 px-8 cursor-pointer">Show More</Button>
      </div>
    </div>
  );
};

export default ProductsWrapper;
