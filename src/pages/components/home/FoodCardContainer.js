import React from 'react';
import FoodCard from './Cards';
const fallback = '/carousel_img2.jpeg'

const FoodCardContainer = ({foodData}) => {
    const isBadFood = 'Beef and Broccoli Stir-Fry';
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Delicious Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center items-center mx-auto">
        {foodData?.map((food, index) => (
          <FoodCard
            key={index}
            image={food.name !== isBadFood ? food.image : fallback}
            name={food.name !== isBadFood ? food.name : "Sweet"}
            price={food.caloriesPerServing}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodCardContainer;
