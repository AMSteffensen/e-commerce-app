import React from "react";
import Image from "next/image";

const Product = (product) => {
  return (
    <div
      className="p-4 hover:scale-105 hover:border-2 transition transform flex space-y-2 flex-col border-black/30"
      key={product.id}
    >
      <h3 className="font-xl font-semibold truncate">{product.name}</h3>
      <p className="truncate">{product.description}</p>
      <p>
        <span className="text-gray-600">{product.price} NOK</span>
      </p>
      <div className="aspect-video relative">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectfit="cover"
        />
      </div>
      <div className="lg:space-x-2 lg:space-y-0 space-x-0 space-y-2 flex flex-col lg:flex-row w-full">
        <button
          className="py-0.5 h-full w-full py-2 p-4 text-lg bg-black hover:text-black hover:bg-white 
border text-white rounded"
        >
          Buy now
        </button>
        <button className="py-0.5 h-full w-full py-2 p-4 text-lg hover:text-black hover:border-black border text-black rounded">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
