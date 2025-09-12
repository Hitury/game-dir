import React from 'react';
import { Divider } from "@heroui/divider";

const Carousel: React.FC = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg mt-35 max-w-lg mx-auto">
      <h2 className="text-white text-2xl mb-4">Top Sellers</h2>
      <div className="relative">
        <div className="flex overflow-hidden">
          <div className="flex-shrink-0 w-full h-64 bg-gray-800 rounded-lg">
            <img
              src="https://via.placeholder.com/300x400?text=Hollow+Knight"
              alt="Hollow Knight"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between">
          <button className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600">
            &lt;
          </button>
          <button className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600">
            &gt;
          </button>
        </div>
      </div>
      <div className="mt-4 text-white">
        <p className="mb-2">Description</p>
        <p className="text-xl">$19.99</p>
      </div>
      <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500">
        Buy Now
      </button>
    </div>
  );
};

export default Carousel;