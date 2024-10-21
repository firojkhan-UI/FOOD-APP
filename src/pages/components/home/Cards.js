import React from 'react';

const FoodCard = ({ image, name, price, description }) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Image Section */}
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      
      {/* Content Section */}
      <div className="p-6">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-sm mb-4">
          {description}
        </p>
        
        {/* Price Section */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold text-green-500">₹{price}</span>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
