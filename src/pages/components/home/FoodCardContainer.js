import React from 'react';
import FoodCard from './Cards';
const fallback = '/carousel_img2.jpeg'

const FoodCardContainer = ({foodData}) => {
    const isBadFood = 'Beef and Broccoli Stir-Fry';
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Delicious Menu</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {foodData.map((food, index) => (
          <FoodCard
            key={index}
            image={food.name !== isBadFood ? food.image : fallback}
            name={food.name !== isBadFood ? food.name : "Sweet"}
            price={food.caloriesPerServing}
            // description={food.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodCardContainer;
