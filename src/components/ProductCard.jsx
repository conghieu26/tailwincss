import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const navigate = useNavigate();

  const handleAddToBag = () => {
    navigate("/order");
  };
  return (
    <div className="flex flex-col md:flex-row p-8 bg-white shadow-lg rounded-lg max-w-4xl mx-auto">
      <div className="flex-shrink-0 flex flex-row items-center">
        <div className="flex flex-col space-y-1">
          <img
            className="w-12 h-12 object-cover border-2 border-blue-500"
            src="/image/H06ee494a8b744612bb3390dee5d42604o.avif"
            alt="Product"
          />
          <img
            className="w-12 h-12 object-cover border-2 border-gray-300"
            src="/image/H06ee494a8b744612bb3390dee5d42604o.avif"
            alt="Product"
          />
          <img
            className="w-12 h-12 object-cover border-2 border-gray-300"
            src="/image/H06ee494a8b744612bb3390dee5d42604o.avif"
            alt="Product"
          />
        </div>
        <img
          className="w-48 h-48 object-cover mb-4"
          src="/image/H06ee494a8b744612bb3390dee5d42604o.avif"
          alt="Product"
        />
      </div>
      <div className="mt-8 md:mt-0 md:ml-8 text-left">
        <h2 className="text-sm text-gray-500">POLO RALPH</h2>
        <h1 className="text-2xl font-bold">
          Custom Fit Polo Bear Oxford Shirt
        </h1>
        <p className="mt-2 text-lg text-gray-700">
          Blue polo with a classic cut. Made of smooth and soft cotton.
        </p>
        <div className="mt-4 flex items-baseline space-x-2">
          <span className="text-3xl font-semibold">$99.00</span>
          <span className="text-xl text-gray-500 line-through">$132.00</span>
          <span className="text-xl text-blue-500">-25%</span>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-medium">CHOOSE SIZE</h3>
          <div className="flex space-x-2 mt-2">
            <button className="w-10 h-10 border-2 border-gray-300 text-lg">
              S
            </button>
            <button className="w-10 h-10 border-2 border-black text-lg">
              M
            </button>
            <button className="w-10 h-10 border-2 border-gray-300 text-lg">
              L
            </button>
            <button className="w-10 h-10 border-2 border-gray-300 text-lg">
              XL
            </button>
            <button className="w-10 h-10 border-2 border-gray-300 text-lg">
              XXL
            </button>
          </div>
        </div>
        <button
          onClick={handleAddToBag}
          className="mt-4 px-4 py-2 bg-blue-500 text-white text-lg font-semibold rounded-lg"
        >
          ADD TO BAG
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
