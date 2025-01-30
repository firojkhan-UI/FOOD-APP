import React, { useEffect, useRef, useState } from 'react';

const FoodCard = ({ image, name, price, description }) => {
  console.log(image,"img::::")
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  // Use Intersection Observer to observe when the card is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting); // Set visibility based on whether the card is in view
        });
      },
      {
        threshold: 0.1 // Trigger when 10% of the card is visible
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`max-w-xs rounded-lg overflow-hidden shadow-lg bg-white transition-all duration-500 ${
        isVisible ? 'blur-0 opacity-100' : 'blur-md opacity-50'
      }`}
    >
      {/* Lazy load the image only if the card is visible */}
      {isVisible ? (
        <img className="w-full h-48 object-cover" src={image} alt={name} />
      ) : (
        <div className="w-full h-48 bg-gray-300" /> // Placeholder div when image is not loaded
      )}

      {/* Content Section */}
      <div className="p-6">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-sm mb-4">{description}</p>

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
